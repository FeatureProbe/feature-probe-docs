---
sidebar_position: 4
---

# 部署生产环境

本文档介绍如何部署 FeatureProbe 服务。

## 对比两种部署模式

FeatureProbe 服务架构如下图：
![deploy](../../../../../pictures/featureprobe_deploy.png)

FeatureProbe 支持两种部署模式，可根据实际场景选择对应模式：

- All-in-One 部署：一般用于本地测试或试用，将所有子服务部署在一个部署单元中（容器、虚拟机、物理机），部署步骤简单。
- 子服务独立部署：适用于真实线上环境部署，子服务部署在单独部署单元中，部署过程稍复杂，灵活性更高，可以子服务单独扩容。

## 环境准备

* Docker 17+
* MySQL 5.7+
* 建议：生产环境3个节点及以上
* 建议：2核 CPU/4G内存及以上

## All-in-One 部署

使用 docker-compose快速在 Linux/Unix/Mac 上运行。

**操作步骤：**

1. 安装 git 和 docker
2. 国内默认链接从docker网站下载会比较慢，请先[配置国内docker镜像](https://gitee.com/featureprobe/FeatureProbe/blob/main/DOCKER_HUB.md)
3. 然后从github clone当前代码目录，按照以下命令启动服务：
   ```shell
   git clone https://gitee.com/featureprobe/FeatureProbe.git
   cd FeatureProbe
   docker compose up
   ```
4. docker启动成功后，打开浏览器，访问：`localhost:4009`，并用以下默认帐号登录试用：
   - username: `admin`
   - password: `Pass1234`

## 子服务独立部署

使用各模块提供的 [docker 镜象](https://hub.docker.com/repository/docker/featureprobe)在 Linux/Unix 独立部署。
需要部署有三个服务镜像，分别是 FeatureProbe UI、FeatureProbe Server 和 FeatureProbe API。
数据库可以使用默认的mysql镜像，也可以配置为链接已有的mysql数据库实例。

**操作步骤：**

1. 创建一个专用网络连接：
   ```bash
   docker network create featureProbeNet
   ```

2. 运行 MySQL 数据库实例:
:::tip
可以跳过此步骤，使用您已经部署好的其他MySQL环境。需要参考 [*数据库配置*](#数据库配置) 修改数据库连接信息，连接到您已部署好的MySQL实例。
:::
   ```bash
   docker run -e  MYSQL_ROOT_PASSWORD=root -e \
     MYSQL_DATABASE=feature_probe \
     MYSQL_TCP_PORT=3306 \
     --network featureProbeNet --name database -d mariadb
   ```

3. 运行 FeatureProbe API 实例:
   ```bash
   docker run -e server.port=4008 -e \
     spring.datasource.jdbc-url=jdbc:mysql://database:13306/feature_probe \
     spring.datasource.jdbc-url=3306 \
     --network featureProbeNet --name backendAPI -d featureprobe/api
   ```

4. 运行 FeatureProbe Server 实例:
   ```bash
   docker run -e FP_SERVER_PORT=4007 -e \
     FP_TOGGLES_URL=http://backendAPI:4008/api/server/toggles \
     FP_EVENTS_URL=http://backendAPI:4008/api/server/events \
     FP_KEYS_URL=http://backendAPI:4008/api/server/sdk_keys \
     --network featureProbeNet --name serverAPI -d featureprobe/server
   ```

5. 运行 FeatureProbe UI 实例:
   ```bash
   docker run -e FP_SERVER_PORT=4007 -e \
     --network featureProbeNet --name ui -d featureprobe/ui
   ```

6. 上述服务启动后打开浏览器，访问：`{FeatureprobeUI_IP}:4009`并用以下默认帐号登录试用：
   - username: `admin`
   - password: `Pass1234`


## 部署参数说明

API 模块和 Server 模块在启动时参数说明。

### FeatureProbe API

| **Environment variable**   | **Default value** | **Description**                                              |
| -------------------------- | ----------------- | ------------------------------------------------------------ |
| server.port                | 8080              | 服务端口                                                     |
| TZ                         | Asia/Shanghai     | 时区                                                         |
| spring.datasource.jdbc-url | -                 | JDBC 连接地址。如` jdbc:mysql://database:13306/feature_probe` |
| spring.profiles.active     | online            | 当前生效的 profile                                           |



### FeatureProbe Server

| **Environment variable** | **Default value**                         | **Description**                                        |
| ------------------------ | ----------------------------------------- | ------------------------------------------------------ |
| FP_SERVER_PORT           | 4007                                      | 服务端口                                               |
| FP_TOGGLES_URL           | http://127.0.0.1:8080/api/server/toggles  | 连接的 FeatureProbe API 服务地址；用于拉取开关         |
| FP_KEYS_URL              | http://127.0.0.1:8080/api/server/sdk_keys | 连接的 FeatureProbe API 服务地址；用于拉取 sdk key     |
| FP_EVENTS_URL            | http://127.0.0.1:8080/api/server/events   | 连接的 FeatureProbe API 服务地址；用于上报开关访问事件 |
| FP_REFRESH_SECONDS       | 3                                         | 轮训拉取开关间隔时间                                   |

### 配置日志输出

可以通过 FeatureProbe API 和 FeatureProbe Server 启动参数来控制日志输出。

- FeatureProbe API
   - `logging.level.root=INFO`  - 应用日志级别； `INFO`/`ERROR`/`WARN`/`DEBUG`
   - `spring.jpa.show-sql=false`  - 是否输出 JPA SQL 语句； `true`/`false`

- FeatureProbe Server
   - `RUST_LOG=info`   - 应用日志级别;  `info`/`error`



### 安全认证配置

FeatureProbe 管理后台用户认证基于[ JWT](https://jwt.io/) 标准协议，使用 [RSA256](https://de.wikipedia.org/wiki/RSA-Kryptosystem) 加密算法签名。为保证安全性，强烈建议重新生成 RSA 密钥文件。

密钥生成方式：

```bash
keytool -genkey -alias my-featureprobe-jwt -keyalg RSA -keysize 1024 -keystore fp-jwt.jks -validity 365 -keypass YOU-PRIVATE-KEY-PASSPHRASE -storepass YOU-KEYSTORE-PASSWORD
```

执行完成后会在当前目录下生成 `fp-jwt.jks` 文件，参数说明：

- validity - 证书有效天数
- keypass - *YOU-PRIVATE-KEY-PASSPHRASE*
- storepass - *YOU-KEYSTORE-PASSWORD*

在 FeaturePorbe 中使用生成的证书，可以在调整 FeatureProbe API 启动参数：

- **app.security.jwt** - (object)  该对象用于自定义 jwt 配置
   - keystore-location - (string) 生成的证书文件路径，如 ./fp-jwt.jks
   - keystore-password - (string) 对应命令行中 storepass 参数值
   - private-key-passphrase - (string) 对应命令行中 keypass 参数值



### 数据库配置

| **Environment variable** | **Default value** | **Description**       |
| ---------------------- | ----------------- | --------------------- |
| MYSQL_DATABASE         | feature_probe     | FeatureProbe 数据库名 |
| MYSQL_ROOT_PASSWORD    | root              | 数据库连接 root 密码  |
| MYSQL_TCP_PORT         | 3306              | 数据库端口            |

