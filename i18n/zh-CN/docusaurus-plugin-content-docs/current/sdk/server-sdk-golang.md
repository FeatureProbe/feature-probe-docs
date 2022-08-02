---
sidebar_position: 5
---

# 服务端 SDK Golang

## 快速尝试 Demo Code

我们提供了一个可运行的演示代码，让您了解如何使用 FeatureProbe SDK

1. 使用 docker composer 启动 FeatureProbe 服务。 [How to](https://github.com/FeatureProbe/FeatureProbe#1-starting-featureprobe-service-with-docker-compose)

2. 下载此 repo 并运行演示程序：

```bash
git clone https://github.com/FeatureProbe/server-sdk-go.git
cd server-sdk-go
go run example/main.go
```

3. 从此处下载 [example](https://github.com/FeatureProbe/server-sdk-go/tree/main/example),
做一些修改并再次运行程序。

```bash
go run main.go
```

## 分步指南

在本指南中，我们解释了如何使用 FeatureProbe 在 Golang 应用程序中使用功能开关。

### 步骤 1. 安装 JavaScript SDK

首先，在您的应用程序中安装 FeatureProbe SDK 作为依赖项。

```go
import "github.com/featureprobe/server-sdk-go"
```

拉取 FeatureProbe SDK 作为 `go.mod` 中的依赖项：

```shell
go get github.com/featureprobe/server-sdk-go
```

### 步骤 2. 创建一个 FeatureProbe instance

安装并导入 SDK 后，创建 FeatureProbe sdk 的单个共享实例。

```go

config := featureprobe.FPConfig{
    RemoteUrl:       "https://127.0.0.1:4007",
    ServerSdkKey:    "serverSdkKey",
    RefreshInterval: 1000,
}

fp, err := featureprobe.NewFeatureProbe(config)
```

### 步骤 3. 使用 FeatureProbe 开关获取设置的值

您可以使用 sdk 拿到对应开关名设置的值。

```go
user := featureprobe.NewUser("user")
val := fp.BoolValue("bool_toggle", user, true)
```

### 步骤 4. 单元测试 (可选)

```go
toggles := map[string]interface{}{}
toggles["bool_toggle"] = true

fp := featureprobe.NewFeatureProbeForTest(toggles)
user := featureprobe.NewUser("user")

assert.Equal(t, fp.BoolValue("bool_toggle", user, false), true)
```

## 测试

我们对所有 SDK 进行了统一的集成测试。集成测试用例作为每个 SDK 存储库的子模块添加。所以
在运行测试之前，请务必先拉取子模块以获取最新的集成测试。

```shell
git pull --recurse-submodules
go test
```
