---
sidebar_position: 3
---

# Rust SDK

使用此SDK可以在后端Rust项目中使用FeatureProbe。后端项目通常只需要实例化一个FeatureProbe SDK（Client）
然后针对不同用户的请求，调用FeatureProbe Client获取对每一个用户的开关处理结果。
服务端SDK采用异步连接FeatureProbe服务器，并将判定规则在本地内存缓存的实现方式。所有对用户代码暴露的接口都只涉及内存操作，用户完全不必担心性能问题。

## 快速尝试 Demo Code

我们提供了一个可运行的演示代码，让您了解如何使用 FeatureProbe SDK

1. 首先需要选择通过连接哪个环境的FeatureProbe来控制你的程序
    * 可以使用我们提供的在线的[演示环境](https://featureprobe.io/login)
    * 也可以使用自己搭建的[docker环境](https://gitee.com/featureprobe/FeatureProbe#%E5%90%AF%E5%8A%A8featureprobe)

2. 下载此 repo 中的演示代码：

 ```bash
 git clone https://github.com/FeatureProbe/server-sdk-rust.git
 cd server-sdk-rust
 ```

3. 修改`examples/demo.rs`程序中的链接信息。
    * 对于在线演示环境:
        * `remote_url` = "https://featureprobe.io/server"
        * `server_sdk_key` please copy from GUI:
          ![server_sdk_key snapshot](../../../../../../pictures/server_sdk_key_zh.png)
    * 对于本地docker环境:
        * `remote_url` = "http://YOUR_DOCKER_IP:4009/server"
        * `server_sdk_key` = "server-8ed48815ef044428826787e9a238b9c6a479f98c"

4. 运行修改后的代码，查看程序输出

 ```bash
 cargo run --example demo
 ```

## 分步指南

在本指南中，我们解释了如何使用 FeatureProbe 在 Rust 应用程序中使用功能开关。

### 步骤 1. 安装 FeatureProbe SDK

首先，在您的应用程序中安装 FeatureProbe SDK 作为依赖项：

```shell
cargo install cargo-edit
cargo add feature-probe-server-sdk-rs --allow-prerelease
```

然后，在代码中引入：

```rust
use feature_probe_server_sdk::{FPConfig, FPUser, FeatureProbe};
```

### 步骤 2. 创建一个 FeatureProbe instance

安装并导入 SDK 后，创建 FeatureProbe sdk 的单个共享实例。

```rust
fn main() {
    let config = FPConfig {
        remote_url: /* FeatureProbe Server URI */,
        server_sdk_key: /* FeatureProbe Server SDK Key */,
        refresh_interval: Duration::from_secs(5),
        wait_first_resp: true,
    };

    let fp = match FeatureProbe::new(config) {
        Ok(fp) => fp,
        Err(e) => {
            tracing::error!("{:?}", e);
            return;
        }
    };
}
```

### 步骤 3. 使用 FeatureProbe 开关获取设置的值

您可以使用 sdk 拿到对应开关名设置的值。

```rust
let user = FPUser::new().with("ATTRIBUTE_NAME_IN_RULE", VALUE_OF_ATTRIBUTE);
let show_feature = fp.bool_value("YOUR_TOGGLE_KEY", &user, false);

if show_feature {
    # application code to show the feature
} else {
    # the code to run if the feature is off
}
```

### 步骤 4. 程序退出前关闭 FeatureProbe Client

退出前关闭client，保证数据上报准确。

```rust
fp.close();
```

## 单元测试中使用 FeatureProbe

```rust
let fp = FeatureProbe::new_for_test("toggle_1", Value::Bool(false));
let u = FPUser::new();
assert_eq!(fp.bool_value("toggle_1", &u, true), false);

let mut toggles: HashMap<String, Value> = HashMap::new();
toggles.insert("toggle_2".to_owned(), json!(12.5));
toggles.insert("toggle_3".to_owned(), json!("value"));
let fp = FeatureProbe::new_for_tests(toggles);
assert_eq!(fp.number_value("toggle_2", &u, 20.0), 12.5);
assert_eq!(fp.string_value("toggle_3", &u, "val".to_owned()), "value");
```

## 回归测试

我们对所有 SDK 进行了统一的集成测试。集成测试用例作为每个 SDK 存储库的子模块添加。所以
在运行测试之前，请务必先拉取子模块以获取最新的集成测试。

```shell
git submodule update --init
cargo test
```