---
sidebar_position: 4
---

# Deploy Guide

> This document describes how to deploy the FeatureProbe service.

## Deployment mode

FeatureProbe support two deployment modes, and the corresponding mode can be selected according to the actual scene:

- Standalone deployment - for local testing or single-machine deployment trial

- Docker deployment - for production deployment

## Requirements

* Docker 17+

* MySQL 5.7+

* Recommendation: Production environment with 3 nodes and above

- Recommendation: 2-core CPU/4G memory and above

## Deploy FeatureProbe Service

### 一、Standalone

Get up and running on Linux/Unix/Mac quickly with docker-compose.

**Setps：**

1. Make sure you have [`git`](https://git-scm.com/) and [`docker`](https://www.docker.com/) installed. 。

2. Clone the repository to your server and boot up the services. Change the ports defined in docker-compose.yml as needed

3. For users in Mainland China, please refer to [configure mirror](https://github.com/FeatureProbe/FeatureProbe/blob/main/DOCKER_HUB.md) to speed up your download.

   ```shell
   git clone https://gitee.com/featureprobe/FeatureProbe.git
   cd FeatureProbe
   docker compose up
   ```

4. Go to UI/Portal at `localhost:4009` and use the default credentials to log in.

5. Remember to update the admin password after your first time login：

   - username: `admin`

   - password: `Pass1234`

### 二、Docker

Deploy independently on Linux/Unix using the [docker image](https://hub.docker.com/u/featureprobe) provided by each module. There are three services that need to be deployed, namely FeatureProbe UI, FeatureProbe Server and FeatureProbe API.

**Setps：**

1. Create a private network connection: `docker network create featureProbeNet`

2. Run the MySQL database instance:

   ```bash
   docker run -e  MYSQL_ROOT_PASSWORD=root -e \
     MYSQL_DATABASE=feature_probe \
     MYSQL_TCP_PORT=3306 \
     --network featureProbeNet --name database -d mariadb
   ```

3. Run the FeatureProbe API instance:

   ```bash
   docker run -e server.port=4008 -e \
     spring.datasource.jdbc-url=jdbc:mysql://database:13306/feature_probe \
     spring.datasource.jdbc-url=3306 \
     --network featureProbeNet --name backendAPI -d featureprobe/api
   ```

4. Run the FeatureProbe Server instance:

   ```bash
   docker run -e FP_SERVER_PORT=4007 -e \
     FP_TOGGLES_URL=http://backendAPI:4008/api/server/toggles \
     FP_EVENTS_URL=http://backendAPI:4008/api/server/events \
     FP_KEYS_URL=http://backendAPI:4008/api/server/sdk_keys \
     --network featureProbeNet --name serverAPI -d featureprobe/server
   ```

5. Run the FeatureProbe UI instance:

   ```bash
   docker run -e FP_SERVER_PORT=4007 -e \
     --network featureProbeNet --name ui -d featureprobe/ui
   ```

6. After the above services are started, open the browser, visit: `{FeatureProbeUI_IP}:4009` and log in with the following default account to try it out:

   - username: `admin`

   - password: `Pass1234`



