---
sidebar_position: 1
---

# JavaScript SDK

## 快速尝试 Demo Code

我们提供了一个可运行的演示代码，让您了解如何使用 FeatureProbe SDK。

1. 使用 docker composer 启动 FeatureProbe 服务。 [How to](https://github.com/FeatureProbe/FeatureProbe#1-starting-featureprobe-service-with-docker-compose)

2. 下载此 repo 并运行演示程序：

```bash
git clone https://github.com/FeatureProbe/client-sdk-js.git
cd client-sdk-js
// open example/index.html in browser
```

3. 从此处下载 [example](https://github.com/FeatureProbe/client-sdk-js/tree/main/example),
做一些修改并再次运行程序。

```
// open example/index.html in browser
```

## 分步指南

在本指南中，我们解释了如何使用 FeatureProbe 在 JavaScript 应用程序中使用功能开关。

### 步骤 1. 安装 JavaScript SDK

首先，在您的应用程序中安装 FeatureProbe SDK 作为依赖项。

NPM：


```js
npm install featureprobe-client-sdk-js --save
```

或者通过CDN：

```js
<script type="text/javascript" src="https://unpkg.com/featureprobe-client-sdk-js@latest/dist/featureprobe-client-sdk-js.min.js"></script>
```

### 步骤 2. 创建一个 FeatureProbe instance

安装并导入 SDK 后，创建 FeatureProbe sdk 的单个共享实例。

NPM：


```js
const user = new FPUser();
user.with("userId", /* userId */);

const fp = new FeatureProbe({
  remoteUrl: "https://featureprobe.io/server",
  // remoteUrl: "https://127.0.0.1:4007", // for local docker
  clientSdkKey: /* clientSdkKey */
  user,
});
fp.start();
```

或者通过CDN：

```js
const user = new featureProbe.FPUser();
user.with("userId", /* userId */);

const fp = new featureProbe.FeatureProbe({
  remoteUrl: "https://featureprobe.io/server",
  // remoteUrl: "https://127.0.0.1:4007", // for local docker
  clientSdkKey: /* clientSdkKey */
  user,
});
fp.start();
```

### 步骤 3. 使用 FeatureProbe 开关获取设置的值

您可以使用 sdk 拿到对应开关名设置的值。

```js
fp.on('ready', function() {
    const result = fp.boolValue('ui_demo_toggle', false);
    if (result) {
        do_some_thing();
    } else {
        do_other_thing();
    }
    const reason = fp.boolDetail('ui_demo_toggle', false);
    console.log(reason);
})
```

### 步骤 4. 单元测试 (可选)

NPM：

```js
test("feature probe unit testing", (done) => {
  let fp = FeatureProbe.newForTest({ testToggle: true });
  fp.start();

  fp.on("ready", function () {
    let t = fp.boolValue(/* toggleKey */, false);
    expect(t).toBe(true);
    done();
  });
});
```

或者通过CDN：

```js
test("feature probe unit testing", (done) => {
  let fp = featureProbe.FeatureProbe.newForTest({ testToggle: true });
  fp.start();

  fp.on("ready", function () {
    let t = fp.boolValue(/* toggleKey */, false);
    expect(t).toBe(true);
    done();
  });
});
```

## 此 SDK 采用以下选项：

| 选项            | 是否必填       | 默认值 | 描述                                                                                                                                      |
|-------------------|----------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| remoteUrl         | 若其他URL未填写则必填 | n/a     | 远端 URL 用来获取开关和上报事件 |
| togglesUrl        | no             | n/a     | 单独设置开关下发 URL，如果设置会忽略 remoteUrl前缀的地址 |
| eventsUrl         | no             | n/a     | 单独设置时间上报 URL，如果设置会忽略 remoteUrl前缀的地址 |
| clientSdkKey      | yes            | n/a     | SDK Key用来验证权限   |
| user              | yes            | n/a     | User 对象可以通过With方法设置属性，用来根据属性判断开关规则 |
| refreshInterval   | no            | 1000    | 设置 SDK 的开关和事件刷新时间   |

## 测试


```js
npm run test
```
