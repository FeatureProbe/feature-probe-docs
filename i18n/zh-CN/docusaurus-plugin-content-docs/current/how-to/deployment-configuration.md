# 部署配置

>  本文档介绍在自行部署 FeatureProbe 时自定义相关配置。

## 参数说明

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

### 

## 如何配置日志输出？

可以通过 FeatureProbe API 和 FeatureProbe Server 启动参数来控制日志输出。

- FeatureProbe API
  - `logging.level.root=INFO`  - 应用日志级别； `INFO`/`ERROR`/`WARN`/`DEBUG`
  - `spring.jpa.show-sql=false`  - 是否输出 JPA SQL 语句； `true`/`false`

- FeatureProbe Server
  - `RUST_LOG=info`   - 应用日志级别;  `info`/`error`



## 安全配置

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



## 数据库配置

| Environment variable** | **Default value** | **Description**       |
| ---------------------- | ----------------- | --------------------- |
| MYSQL_DATABASE         | feature_probe     | FeatureProbe 数据库名 |
| MYSQL_ROOT_PASSWORD    | root              | 数据库连接 root 密码  |
| MYSQL_TCP_PORT         | 3306              | 数据库端口            |
