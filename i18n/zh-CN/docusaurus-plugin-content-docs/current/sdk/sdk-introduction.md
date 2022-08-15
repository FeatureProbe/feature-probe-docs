---
sidebar_position: 1
---

# SDK 介绍

本文档主要介绍 SDK 的分类，实现的原理，相同点和不同点。

## SDK 原理

SDK 通过 User 对象存储用户的特有属性，根据在 FeatureProbe 的 UI 平台中配置的开关规则，匹配属性，返回对应设置的值。
比如 APP 中某个功能，提前预埋了功能开关，控制功能的打开和关闭，运行一段时间，发现某种情况下会触发 BUG，那么我们可以有一条规则是低于指定版本，这个 feature 返回 false。那就需要我们的 User 对象中，加入了 app_version 这个属性，这样属性传给 FeatureProbe 服务端时，对应规则就会对低版本返回 false，关闭对应功能。

## 主要数据结构

- FPConfig
  - remote url: 服务端地址
  - sdk key: 分为 server 和 client 两种，用于拉取开关信息，在 UI 平台的项目列表中可以找到
  - refresh interval: 开关拉取间隔和开关访问信息上报间隔
  - wait first response: 是否等待拉取开关后返回，如果是否，刚启动时的开关求值会拿到默认值 

- FPUser
  - new 方法: 参数为用户在业务中的唯一标识，用于区分不同的用户
  - with 方法: 用来上传属性，会在平台的规则中根据属性返回不同的值

- FeatureProbe
  - value 方法: 分为 bool/string/number/json 四种，用于获取 UI 平台中规则对应的值，四种类型对应平台开关创建的四种类型
  - detail 方法: 分为 bool/string/number/json 四种，用于获取 UI 平台中规则对应的值，和更多的调试信息

- FPDetail
  - value : UI 平台中规则对应的值
  - rule index: 命中规则的在 UI 配置中规则的序号
  - variation index: 返回的值，在 UI 平台中variation列表中的序号
  - version: 命中开关的版本
  - reason: 返回值对应的原因，如 disabled, default, not exist 等


## SDK 区别

目前 SDK 分为 Client-side SDK 和 Server-side SDK 两种

### Client-side SDK

目前主要针对浏览器，移动端等 APP 用户的设备环境，包括 JavaScript，Android 和 iOS 三种类别。相比 Server-side SDK，设备的性能和安全的级别不如在 IDC 中的服务器更好，所以 Client-side SDK 选择把规则计算交给 FeatureProbe 服务端，等服务端计算完成所有开关的返回值，一起返回给 Client-side SDK。后续的 APP 获取对应的开关值，都从内存中的结果集返回。

### Server-side SDK

目前主要针对在 开发者的 IDC 或者 FeatureProbe 的 IDC 中部署的后端服务，包括 Golang，Java，Rust，Python 等。因为服务端性能更好，并发量更大，安全等级更高，且 User 的属性根据用户数变化，所以规则的计算是在 Server-side SDK 中实时计算的。

## SDK Key

Client SDK Key 只能用在 Client-side SDK 中，只能拉取计算结果。

Server SDK Key 只能用在 Server-side SDK 中，只能拉取计算规则，并在 SDK 中实时求值。

## 隐私

User 中的属性目前 FeatureProbe 不会持久化。

* Server-side SDK 的 User 对象是在开发者自己的应用中，不会发给 FeatureProbe 的服务器。
* Client-side SDK 的 User 会发给 FeatureProbe 的服务器，但是不会存储，仅用作当时的规则求值，计算完即释放。
