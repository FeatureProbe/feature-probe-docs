---
sidebar_position: 1
---

# Python SDK

使用此SDK可以在后端Python项目中使用FeatureProbe。后端项目通常只需要实例化一个FeatureProbe SDK（Client）。
然后针对不同用户的请求，调用FeatureProbe Client获取对每一个用户的开关处理结果。

服务端SDK采用异步连接FeatureProbe服务器，并将判定规则在本地内存缓存的实现方式。所有对用户代码暴露的接口都只涉及内存操作，用户完全不必担心性能问题。

## 快速尝试 Demo Code

我们提供了一个可运行的[演示代码](https://github.com/FeatureProbe/server-sdk-python/blob/main/demo.py)，让您了解如何使用 FeatureProbe SDK。

1. 首先需要选择通过连接哪个环境的FeatureProbe来控制你的程序
    * 可以使用我们提供的在线的[演示环境](https://featureprobe.io/login)
    * 也可以使用自己搭建的[docker环境](https://gitee.com/featureprobe/FeatureProbe#%E5%90%AF%E5%8A%A8featureprobe)

2. 下载演示代码：

```bash
git clone https://github.com/FeatureProbe/server-sdk-python.git
cd server-sdk-python
```

3. 修改演示代码 `demo.py`，把 `FEATURE_PROBE_SERVER_URL` 和
    `SDK_KEY` 配置成你选择的FeatureProbe环境信息。

    * 对于在线演示环境:
        * `FEATURE_PROBE_SERVER_URL` = "https://featureprobe.io/server"
        * `SDK_KEY` 请从如下界面中拷贝：
          ![server_sdk_key snapshot](../../../../../../pictures/server_sdk_key_zh.png)
    * 对于本地docker环境:
        * `FEATURE_PROBE_SERVER_URL` = "http://YOUR_DOCKER_IP:4009/server"
        * `SDK_KEY` = "server-8ed48815ef044428826787e9a238b9c6a479f98c"

4. 运行修改后的代码，查看程序输出

```bash
pip3 install -r requirements.txt
python3 demo.py
```

## 接入指南

以下将介绍如何在用户工程代码中使用 FeatureProbe 与功能开关。

### 步骤 1. 安装 FeatureProbe SDK

首先，在您的环境中安装 FeatureProbe SDK。

#### pip

```bash
pip3 install featureprobe-server-sdk-python
```

> 您可通过 [TestPyPI](https://test.pypi.org/project/featureprobe-server-sdk-python/) 安装预发行的版本。

<!-- WIP
#### conda

Will be supported later.

```bash
conda install featureprobe-server-sdk-python
```
-->

### 步骤 2. 创建一个 FeatureProbe instance

在程序中导入 SDK，然后创建 FeatureProbe sdk 的单个共享实例。

```python
import featureprobe as fp

config = fp.Config(remote_uri='http://127.0.0.1:4007', sync_mode='pooling', refresh_interval=3)
client = fp.Client('server-8ed48815ef044428826787e9a238b9c6a479f98c', config)
```

> 注：您可以使用`上下文管理器`（即 `with`）来创建一个 fp.Client，在离开上下文时会自动 close 该实例。

### 步骤 3. 使用 FeatureProbe 开关获取设置的值

您可以使用 sdk 拿到对应开关名设置的值。

```python
user = fp.User(
    stable_rollout_key='user_unique_id',
    attrs={
        'userId': '9876',
        'tel': '12345678998',
    })
bool_eval = bool(client.value('bool_toggle_key', user, default=False))
if bool_eval:
    ...  # application code to show the feature
else:
    ...  # the code to run if the feature is off
```

## SDK回归测试

我们对所有 SDK 进行了统一的集成测试。集成测试用例作为每个 SDK 存储库的子模块添加。所以
在运行测试之前，请务必先拉取子模块以获取最新的集成测试。

```shell
git pull --recurse-submodules
pip3 install -r requirements-dev.txt
pytest featureprobe
```
