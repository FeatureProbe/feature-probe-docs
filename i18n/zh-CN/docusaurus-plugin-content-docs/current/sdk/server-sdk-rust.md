---
sidebar_position: 7
---

# Rust SDK

## 快速尝试 Demo Code

我们提供了一个可运行的演示代码，让您了解如何使用 FeatureProbe SDK。

1. 使用 docker composer 启动 FeatureProbe 服务。 [How to](https://github.com/FeatureProbe/FeatureProbe#1-starting-featureprobe-service-with-docker-compose)

2. 下载此 repo 并运行演示程序：

 ```bash
 git clone https://github.com/FeatureProbe/server-sdk-rust.git
 cd server-sdk-rust
 cargo run --example demo
 ```

3. 从此处下载 [examples](https://github.com/FeatureProbe/server-sdk-rust/tree/main/examples), 做一些修改并再次运行程序

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
    let remote_url = "http://localhost:4007";

    let config = FPConfig {
        remote_url: remote_url.to_owned(),
        server_sdk_key: args.server_sdk_key.to_owned(),
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
let user = FPUser::new("user@company.com").with("name", "bob");
let show_feature = fp.bool_value("your.toggle.key", &user, false);

if show_feature {
    # application code to show the feature
} else {
    # the code to run if the feature is off
}
```

### 步骤 4. 单元测试 (可选)

```rust
let fp = FeatureProbe::new_for_test("toggle_1", Value::Bool(false));
let u = FPUser::new("key");
assert_eq!(fp.bool_value("toggle_1", &u, true), false);

let mut toggles: HashMap<String, Value> = HashMap::new();
toggles.insert("toggle_2".to_owned(), json!(12.5));
toggles.insert("toggle_3".to_owned(), json!("value"));
let fp = FeatureProbe::new_for_tests(toggles);
assert_eq!(fp.number_value("toggle_2", &u, 20.0), 12.5);
assert_eq!(fp.string_value("toggle_3", &u, "val".to_owned()), "value");
```

## 测试

我们对所有 SDK 进行了统一的集成测试。集成测试用例作为每个 SDK 存储库的子模块添加。所以
在运行测试之前，请务必先拉取子模块以获取最新的集成测试。

```shell
git pull --recurse-submodules
cargo test
```