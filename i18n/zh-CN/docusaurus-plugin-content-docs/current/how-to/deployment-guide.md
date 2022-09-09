---
sidebar_position: 4
---

# 部署生产环境

> 本文档介绍如何部署 FeatureProbe 服务。

## 部署模式

FeatureProbe 支持两种部署模式，可根据实际场景选择对应模式：

- 单机部署 - 用于本地测试或单机部署试用
- Docker 部署 - 用于生产环境部署



## 环境准备

* Docker 17+

* MySQL 5.7+

* 建议：生产环境3个节点及以上

* 建议：2核 CPU/4G内存及以上

  

## 两种部署模式

### 一、单机部署

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

### 二、Docker 部署

使用各模块提供的 [docker 镜象](https://hub.docker.com/repository/docker/featureprobe)在 Linux/Unix 独立部署。需要部署有三个服务，分别是 FeatureProbe UI、FeatureProbe Server 和 FeatureProbe API。

**操作步骤：**

1. 创建一个专用网络连接：`docker network create featureProbeNet`

2. 运行 MySQL 数据库实例:

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

