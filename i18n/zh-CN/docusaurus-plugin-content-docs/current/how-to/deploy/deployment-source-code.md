---
sidebar_position: 3
---

# 源码编译部署

本文档介绍如何通过源码编译方式部署各模块。

需要编译部署的模块主要有三个：

| 示例机器   | 部署模块            | 端口          |
| ---------- | ------------------- | ------------- |
| 10.100.1.1 | FeatureProbe API    | 4008          |
| 10.100.1.1 | FeatureProbe UI     | 4009（Nginx） |
| 10.100.1.2 | FeatureProbe Server | 4007          |

## 创建数据库

1. 环境准备

   - MySQL 5.7+

2. 创建 `feature_probe ` 数据库：

   ```sql
   CREATE DATABASE feature_probe; 
   ```

   *注： 无须手工创建表结构。初次启动 API 服务时会自动创建所有表和初始化数据。*



## 编译部署 API 服务

### 编译步骤 

1. 环境准备

   - JDK 1.8+
   - Maven 2.0+

    

2. 获取源码并编译出部署包：

  ```bash
  git clone https://github.com/FeatureProbe/feature-probe-api.git
  cd feature-probe-api
  mvn clean package
  ```

  完成编译后会在当前目录生成以版本命名的 jar 部署文件，如 ` target/feature-probe-api-1.1.0.jar`。

### 部署步骤

1. 环境准备

   - JDK 1.8+
   - MySQL 5.7+

2. 将 `feature-probe-api-1.1.0.jar` 放置部署服务器中，并以 `4008` 端口启动：

   ```bash
   java -jar feature-probe-api-1.1.0.jar -Dserver.port=4008 \
      -Dspring.datasource.jdbc-url=jdbc:mysql://{MYSQL_DATABASE_IP}:{MYSQL_PORT}/feature_probe \  # 数据库 IP/端口和库名
      -Dspring.datasource.username={MYSQL_USERNAME} \
      -Dspring.datasource.password={MYSQL_PASSWORD} 
   ```

   :::info
   API 服务更详细的启动参数说明见 [FeatureProbe API 参数说明文档](../../reference/deployment-configuration#featureprobe-api)
   :::

3. 检查服务是否运行成功

   ```bash
   curl "http://10.100.1.1:4008/api/actuator/health"
   ```

   显示如下信息则表示启动成功：

   ```json
   {
   	status: "UP"
   }
   ```




## 编译部署 UI 服务

### 编译步骤 

1. 环境准备

   * Node.js 16 +
   * npm


2. 获取源码并编译出可部署的静态文件：

   :::info
   国内建议切换为 npm 中国镜像站：[npmmirror 中国镜像站](https://npmmirror.com/)
   :::
   
   ```bash
   git clone https://github.com/FeatureProbe/feature-probe-ui.git
   cd feature-probe-ui
   npm install
   npm run build
   ```
   
   完成编译后会在 `build` 目录下生成可部署的静态文件。如下所示：
   
   ```bash
   ➜ $ ls build 
   asset-manifest.json favicon.ico         index.html          static/


### 部署步骤

1. 环境准备

   - Nginx

2. 创建 Nginx 配置：`/etc/nginx/conf.d/feature_probe.conf`

   ```bash
   upstream featureProbeAPI {
       server 10.100.1.1:4008; # FeatureProbeAPI IP和端口
   }
   
   server {
     listen 4009;  # UI 端口
   
     location / {
       index  index.html index.htm;
       root /usr/share/nginx/html;  # UI 静态文件目录
       try_files $uri /index.html;
     }
   
      location /api { # 访问 /api 时统一转发到 featureProbeAPI 服务
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-NginX-Proxy true;
       proxy_pass http://featureProbeAPI/api;
       proxy_ssl_session_reuse off;
       proxy_set_header Host $http_host;
       proxy_cache_bypass $http_upgrade;
       proxy_redirect off;
     }
   }
   ```


3. 执行 `reload nginx` 配置，使上述配置生效：

   ```nginx -s reload
   nginx -s reload
   ```

4. 将编译生成的 `build` 下的所有文件和文件夹复制到 `/usr/share/nginx/html/` 目录下。

5. 在浏览器中访问 `http://10.100.1.1:4009` 并使用如下账号密码登录来验证是否部署成功：

      - username: `admin`

      - password: `Pass1234`

        

## 编译部署 Server 服务

### 编译步骤 

1. 环境准备

   * Rust *([如何安装？](https://www.rust-lang.org/tools/install))*
   * Cargo *([如何安装？](https://doc.rust-lang.org/cargo/getting-started/installation.html))*


2. 获取源码并编译出部署包：

   :::info
   国内建议切换为 cargo 中国镜像：[配置 Cargo 国内镜像源](https://mirrors.tuna.tsinghua.edu.cn/help/crates.io-index.git/)
   :::
   
   ```bash
   git clone https://github.com/FeatureProbe/feature-probe-server.git
   cd feature-probe-server
   cargo build --release --verbose
   ```
   
   完成编译后会在 `build` 目录下生成可执行的二制文件：
   
   ```bash
   ➜ $ ls build 
   feature_probe_server
   ```


### 部署步骤

1. 环境准备

   - 无

2. 将生成的 `feature_probe_server` 文件放在服务器上，并创建启动脚本 `start-feature-probe-server.sh`：

   ```bash
   #/bin/bash
   
   export FP_SERVER_PORT=4007  # FeatureProbe Server 端口
   export FP_TOGGLES_URL=http://10.100.1.1:4008/api/server/toggles  # FeatureProbe API IP 和端口号
   export FP_EVENTS_URL=http://10.100.1.1:4008/api/server/events
   export FP_KEYS_URL=http://10.100.1.1:4008/api/server/sdk_keys
   
   ./feature_probe_server 
   ```

  :::info
  Server 服务更详细启动参数说明详见 [FeatureProbe Server 参数说明文档](../../reference/deployment-configuration#featureprobe-server)
  :::

3. 执行启动脚本运行服务：`sh ./start-feature-probe-server.sh`

4. 检查服务是否运行成功

   ```bash
   curl "http://10.100.1.2:4007/"
   ```

   显示如下信息则表示启动成功：

   ```json
   <h1>Feature Probe Server</h1>
   ```

