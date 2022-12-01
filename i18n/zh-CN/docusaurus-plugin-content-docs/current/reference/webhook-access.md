---
sidebar_position: 6
---

# Webhook接入

通过webhook配置，可以向您推送FeatureProbe平台发生的事件数据，Webhook是一个http请求回调接口，需要您的团队按照以下方式提供实现；
FeatureProbe平台发生某个事件时，会去回调该接口，并把该事件的数据以json格式推送到您的服务器。

## 配置Webhook

如何在FeatureProbe平台配置Webhook参考 [配置Webhook](https://docs.featureprobe.io/zh-CN/how-to/platform/webhooks)

## 接入Webhook


### 请求方法

支持 http/https POST 方法

### 请求头

```text
Content-Type: application/json; charset=utf-8 
User-Agent: FeatureProbe-Webhook/1.0
X-FeatureProbe-Sign: xxxxxxxxxxxxxxx
```

### 请求体

请求体格式整体如下

```json
{
  "action": "PUBLISH",
  "operator": "jianggang@featureprobe.com",
  "projectKey": "My_Project",
  "resource": "TOGGLE",
  "toggleKey": "Demo",
  "environmentKey": "online",
  "segmentKey": "online",
  "timestamp": 1669360165044,
  "data": {}
}
```

统一字段说明

| 字段             | 说明              |
|----------------|-----------------|
| resource       | 事件对应实体          |
| action         | 事件类型            |
| operator       | 操作人             |
| timestamp      | 操作时间            |


具体事件的格式会不同. FeatureProbe平台Webhook所有事件如下：

| 资源      | 事件  | request body示例 ｜                                     
|---------|-----|------------------------------------------------------|
| 项目      | 创建  | [Request Body 示例](#project_create)                   |
|         | 更新  | [Request Body 示例](#project_update)                   |
|         | 删除  | [Request Body 示例](#project_delete)                   | 
|         | 更新审批设置 | [Request Body 示例](#project_update_approval_settings) |
| 环境      | 创建  | [Request Body 示例](#environment_create)               |
|         | 更新 | [Request Body 示例](#environment_update)               |
|         | 下线 | [Request Body 示例](#environment_offline)              |
|         | 恢复 | [Request Body 示例](#environment_restore)              |
| 人群      | 创建 | [Request Body 示例](#segment_create)                   |
|         | 更新 | [Request Body 示例](#segment_update)                   |
|         | 发布 | [Request Body 示例](#segment_publish)                  |
|         | 删除 | [Request Body 示例](#segment_delete)                   |
| 开关      | 创建 | [Request Body 示例](#toggle_create)                    |
|         | 更新 | [Request Body 示例](#toggle_update)                    |
|         | 发布 | [Request Body 示例](#toggle_publish)                   |
|         | 下线 | [Request Body 示例](#toggle_offline)                   |
|         | 恢复 | [Request Body 示例](#toggle_restore)                   |
|         | 发起审批 | [Request Body 示例](#toggle_approval)                  |
|         | 审批单状态变更 | [Request Body 示例](#toggle_update_approval)           |
| 成员      | 创建 | [Request Body 示例](#member_create)                    |
|         | 更新 | [Request Body 示例](#member_update)                    |
|         | 删除 | [Request Body 示例](#member_delete)                    |
| Webhook | 创建 | [Request Body 示例](#webhook_create)                   |
|         | 更新 | [Request Body 示例](#webhook_update)                   |
|         | 删除 | [Request Body 示例](#webhook_delete)                   |


### 验证Webhook请求 （可选）

FeaturePobe Webhook提供了一种安全验证方式，用于防止请求伪造（CSRF攻击）。
FeaturePobe服务端在推送数据的时候，会使用Secret Key对请求体数据进行sha1签名，将签名放在请求头 X-FeatureProbe-Sign 中，
对接时可以同样的算法计算该Sign，两者需要一致。


#### 各类语言签名计算参考


##### Java
```java
public String sign(String secretKey, String requestBody) {
    try {
        SecretKeySpec signinKey = new SecretKeySpec(secretKey.getBytes(), "HmacSHA1");
        Mac mac = Mac.getInstance("HmacSHA1");
        mac.init(signinKey);
        byte[] rawHmac = mac.doFinal(requestBody.getBytes("UTF8"));
        return new BASE64Encoder().encode(rawHmac);
    } catch (Exception e) {
        throw new RuntimeException(e);
    }
}
```

##### PHP
```php
function getSignature($secretKey, $content) {
    return base64_encode(hash_hmac("sha1", $content, $secretKey, true));
}
```

#### Go
```go
func sign(secretKey string, content string) string{
   key := []byte(secretKey)
   mac := hmac.New(sha1.New, key)
   mac.Write([]byte(content))
   res := base64.StdEncoding.EncodeToString(mac.Sum(nil))
   return res
}
```

## 回调结果判断

FeaturePorbe Webhook 判定 Response code 在 [200 ～ 300）之间为成功，其他都为失败。

## 各类事件Request Body示例

### 项目（Project）

<span id="project_create">项目创建</span>

```json
{
 "action": "CREATE",
 "data": {
  "description": "",
  "environments": [{
   "clientSdkKey": "client-965ddabdca5dd390ac9a0398bfb1debce72573c6",
   "enableApproval": false,
   "key": "online",
   "name": "online",
   "serverSdkKey": "server-98848ff59b3278193c0b0bd07a6f3c60b9f69252"
  }],
  "key": "Test",
  "name": "Test"
 },
 "operator": "test@featureprobe.com",
 "resource": "PROJECT",
 "timestamp": 1669342189510
}
```

<span id="project_update">项目更新</span>
```json
{
 "action": "UPDATE",
 "data": {
  "description": "",
  "environments": [{
   "clientSdkKey": "client-965ddabdca5dd390ac9a0398bfb1debce72573c6",
   "enableApproval": false,
   "key": "online",
   "name": "online",
   "serverSdkKey": "server-98848ff59b3278193c0b0bd07a6f3c60b9f69252"
  }],
  "key": "Test",
  "name": "Demo"
 },
 "operator": "test@featureprobe.com",
 "projectKey": "Test",
 "resource": "PROJECT",
 "timestamp": 1669342296378
}
```

<span id="project_delete">项目删除</span>
```json
{
 "action": "DELETE",
 "data": {
  "description": "",
  "environments": [{
   "clientSdkKey": "client-965ddabdca5dd390ac9a0398bfb1debce72573c6",
   "enableApproval": false,
   "key": "online",
   "name": "online",
   "serverSdkKey": "server-98848ff59b3278193c0b0bd07a6f3c60b9f69252"
  }],
  "key": "Test",
  "name": "Demo"
 },
 "operator": "jianggang@featureprobe.com",
 "projectKey": "Test",
 "resource": "PROJECT",
 "timestamp": 1669342345254
}
```

<span id="project_update_approval_settings">项目更新审批设置</span>
```json
{
 "action": "UPDATE_APPROVAL_SETTINGS",
 "data": [{
  "enable": true,
  "environmentKey": "bbb",
  "environmentName": "bbbb",
  "locked": false,
  "reviewers": ["jianggang@featureprobe.com"]
 }, {
  "enable": false,
  "environmentKey": "online",
  "environmentName": "online",
  "locked": false,
  "reviewers": ["jianggang@featureprobe.com"]
 }],
 "operator": "jianggang@featureprobe.com",
 "projectKey": "My_Project",
 "resource": "PROJECT",
 "timestamp": 1669342480539
}
```

### 环境（Environment）

<span id="environment_create">环境创建</span>
```json
{
 "action": "CREATE",
 "data": {
  "clientSdkKey": "client-b74b8525e286391982bfdf1b8ba82cc1a7102faf",
  "enableApproval": false,
  "key": "stage",
  "name": "stage",
  "serverSdkKey": "server-5a664086d9350b4ec85c9b307eb1ccf531c7d862"
 },
 "operator": "jianggang@featureprobe.com",
 "projectKey": "My_Project",
 "resource": "ENVIRONMENT",
 "timestamp": 1669342539671
}
```

<span id="environment_update">环境更新</span>
```json
{
 "action": "UPDATE",
 "data": {
  "clientSdkKey": "client-b74b8525e286391982bfdf1b8ba82cc1a7102faf",
  "enableApproval": false,
  "key": "stage",
  "name": "stage test",
  "serverSdkKey": "server-5a664086d9350b4ec85c9b307eb1ccf531c7d862"
 },
 "environmentKey": "stage",
 "operator": "jianggang@featureprobe.com",
 "projectKey": "My_Project",
 "resource": "ENVIRONMENT",
 "timestamp": 1669342620464
}
```

<span id="environment_offline">环境下线</span>
```json
{
 "action": "OFFLINE",
 "data": {
  "clientSdkKey": "client-b74b8525e286391982bfdf1b8ba82cc1a7102faf",
  "enableApproval": false,
  "key": "stage",
  "name": "stage test",
  "serverSdkKey": "server-5a664086d9350b4ec85c9b307eb1ccf531c7d862"
 },
 "environmentKey": "stage",
 "operator": "jianggang@featureprobe.com",
 "projectKey": "My_Project",
 "resource": "ENVIRONMENT",
 "timestamp": 1669342656893
}
```

<span id="environment_restore">环境恢复</span>
```json
{
 "action": "RESTORE",
 "data": {
  "clientSdkKey": "client-b74b8525e286391982bfdf1b8ba82cc1a7102faf",
  "enableApproval": false,
  "key": "stage",
  "name": "stage test",
  "serverSdkKey": "server-5a664086d9350b4ec85c9b307eb1ccf531c7d862"
 },
 "environmentKey": "stage",
 "operator": "jianggang@featureprobe.com",
 "projectKey": "My_Project",
 "resource": "ENVIRONMENT",
 "timestamp": 1669342694978
}
```

### 人群

<span id="segment_create">人群创建</span>
```json
{
 "action": "CREATE",
 "data": {
  "createdTime": 1669342753382,
  "description": "",
  "key": "Test",
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669342753382,
  "name": "Test",
  "projectKey": "My_Project",
  "rules": []
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "SEGMENT",
 "timestamp": 1669342752617
}
```

<span id="segment_update">人群更新</span>
```json
{
 "action": "UPDATE",
 "data": {
  "createdTime": 1669342753000,
  "description": "",
  "key": "Test",
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669342753000,
  "name": "Demo",
  "projectKey": "My_Project",
  "rules": []
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "SEGMENT",
 "timestamp": 1669342849844
}
```

<span id="segment_publish">人群发布</span>
```json
{
 "action": "PUBLISH",
 "data": {
  "createdTime": 1669342753000,
  "description": "",
  "key": "Test",
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669342898961,
  "name": "Demo",
  "projectKey": "My_Project",
  "rules": [{
   "conditions": [{
    "objects": ["TEST"],
    "predicate": "is one of",
    "subject": "name",
    "type": "string"
   }],
   "name": ""
  }]
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "SEGMENT",
 "timestamp": 1669342898814
}
```

<span id="segment_delete">人群删除</span>
```json
{
 "action": "DELETE",
 "data": {
  "createdTime": 1669342753000,
  "description": "",
  "key": "Test",
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669342936447,
  "name": "Demo",
  "projectKey": "My_Project",
  "rules": [{
   "conditions": [{
    "objects": ["TEST"],
    "predicate": "is one of",
    "subject": "name",
    "type": "string"
   }],
   "name": ""
  }]
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "SEGMENT",
 "timestamp": 1669342936153
}
```

### 开关

<span id="toggle_create">开关创建</span>
```json
{
 "action": "CREATE",
 "data": {
  "archived": false,
  "clientAvailability": false,
  "createdTime": 1669342980446,
  "desc": "",
  "disabledServe": 0,
  "key": "Test",
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669342980446,
  "name": "Test",
  "permanent": false,
  "returnType": "boolean",
  "tags": ["test"],
  "variations": [{
   "description": "",
   "name": "variation1",
   "value": "false"
  }, {
   "description": "",
   "name": "variation2",
   "value": "true"
  }]
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "TOGGLE",
 "timestamp": 1669342980174
}
```

<span id="toggle_update">开关更新</span>
```json
{
 "action": "UPDATE",
 "data": {
  "archived": false,
  "clientAvailability": true,
  "createdTime": 1669344216000,
  "desc": "",
  "disabledServe": 0,
  "key": "Demo",
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669344216000,
  "name": "Demo",
  "permanent": false,
  "returnType": "boolean",
  "tags": [],
  "variations": [{
   "description": "",
   "name": "variation1",
   "value": "false"
  }, {
   "description": "",
   "name": "variation2",
   "value": "true"
  }]
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "TOGGLE",
 "timestamp": 1669360035636
}
```

<span id="toggle_publish">开关发布</span>
```json
{
 "action": "PUBLISH",
 "data": {
  "content": {
   "defaultServe": {
    "select": 1
   },
   "disabledServe": {
    "select": 0
   },
   "rules": [],
   "variations": [{
    "description": "",
    "name": "variation1",
    "value": "false"
   }, {
    "description": "",
    "name": "variation2",
    "value": "true"
   }]
  },
  "disabled": false,
  "enableApproval": false,
  "locked": false,
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669360165284,
  "publishTime": 1669360165273,
  "status": "RELEASE",
  "version": 2
 },
 "environmentKey": "online",
 "operator": "jianggang@featureprobe.com",
 "projectKey": "My_Project",
 "resource": "TOGGLE",
 "timestamp": 1669360165044,
 "toggleKey": "Demo"
}
```

<span id="toggle_offline">开关下线</span>
```json
{
 "action": "OFFLINE",
 "data": {
  "archived": true,
  "clientAvailability": true,
  "createdTime": 1669344216000,
  "desc": "",
  "disabledServe": 0,
  "key": "Demo",
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669360035000,
  "name": "Demo",
  "permanent": false,
  "returnType": "boolean",
  "tags": [],
  "variations": [{
   "description": "",
   "name": "variation1",
   "value": "false"
  }, {
   "description": "",
   "name": "variation2",
   "value": "true"
  }]
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "TOGGLE",
 "timestamp": 1669360204523
}
```

<span id="toggle_restore">开关恢复</span>
```json
{
 "action": "RESTORE",
 "data": {
  "archived": false,
  "clientAvailability": true,
  "createdTime": 1669344216000,
  "desc": "",
  "disabledServe": 0,
  "key": "Demo",
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669360204000,
  "name": "Demo",
  "permanent": false,
  "returnType": "boolean",
  "tags": [],
  "variations": [{
   "description": "",
   "name": "variation1",
   "value": "false"
  }, {
   "description": "",
   "name": "variation2",
   "value": "true"
  }]
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "TOGGLE",
 "timestamp": 1669360239018
}
```

<span id="toggle_approval">开关发起审批</span>
```json
{
 "action": "CREATE_APPROVAL",
 "data": {
  "approvalData": {
   "content": "{"rules":[],"disabledServe":{"select":0},"defaultServe":{"select":1},"variations":[{"value":"false","name":"variation1","description":""},{"value":"true","name":"variation2","description":""}]}",
   "disabled": true
  },
  "approvalDate": 1669370201286,
  "currentData": {
   "content": "{"rules":[],"disabledServe":{"select":0},"defaultServe":{"select":1},"variations":[{"value":"false","name":"variation1","description":""},{"value":"true","name":"variation2","description":""}]}",
   "disabled": false
  },
  "environmentKey": "online",
  "projectKey": "My_Project",
  "status": "PENDING",
  "submitBy": "jianggang@featureprobe.com",
  "toggleKey": "Demo"
 },
 "environmentKey": "online",
 "operator": "jianggang@featureprobe.com",
 "projectKey": "My_Project",
 "resource": "TOGGLE",
 "timestamp": 1669370200888,
 "toggleKey": "Demo"
}
```

<span id="toggle_update_approval">开关更新审批单</span>
```json
{
 "action": "UPDATE_APPROVAL",
 "data": {
  "approvalData": {
   "content": "{"rules":[],"disabledServe":{"select":0},"defaultServe":{"select":1},"variations":[{"value":"false","name":"variation1","description":""},{"value":"true","name":"variation2","description":""}]}",
   "disabled": true
  },
  "approvalDate": 1669370291876,
  "currentData": {
   "content": "{"rules":[],"disabledServe":{"select":0},"defaultServe":{"select":1},"variations":[{"value":"false","name":"variation1","description":""},{"value":"true","name":"variation2","description":""}]}",
   "disabled": false
  },
  "environmentKey": "online",
  "projectKey": "My_Project",
  "status": "REVOKE",
  "submitBy": "jianggang@featureprobe.com",
  "toggleKey": "Demo"
 },
 "environmentKey": "online",
 "operator": "jianggang@featureprobe.com",
 "projectKey": "My_Project",
 "resource": "TOGGLE",
 "timestamp": 1669370291596,
 "toggleKey": "Demo"
}
```

### 成员

<span id="member_create">成员创建</span>
```json
{
 "action": "CREATE",
 "data": [{
  "account": "test@test.com",
  "createdBy": "jianggang@featureprobe.com",
  "createdTime": 1669360591619,
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669360591619,
  "role": "WRITER"
 }],
 "operator": "jianggang@featureprobe.com",
 "resource": "MEMBER",
 "timestamp": 1669360591287
}
```

<span id="member_update">成员更新</span>
```json
{
 "action": "UPDATE",
 "data": {
  "account": "test@test.com",
  "createdBy": "jianggang@featureprobe.com",
  "createdTime": 1669360591000,
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669360591000,
  "role": "OWNER"
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "MEMBER",
 "timestamp": 1669360630120
}
```

<span id="member_delete">成员删除</span>
```json
{
 "action": "DELETE",
 "data": {
  "account": "test@test.com",
  "createdBy": "jianggang@featureprobe.com",
  "createdTime": 1669360591000,
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669360630000,
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "MEMBER",
 "timestamp": 1669361086817
}
```

### Webhook

<span id="webhook_create">Webhook创建</span>
```json
{
 "action": "CREATE",
 "data": {
  "createdBy": "jianggang@featureprobe.com",
  "createdTime": 1669363048466,
  "description": "This a test webhook",
  "id": 37,
  "modifiedBy": "jianggang@featureprobe.com",
  "modifiedTime": 1669363048466,
  "name": "Test",
  "status": "ENABLE",
  "url": "http://127.0.0.1"
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "WEBHOOK",
 "timestamp": 1669363048390
}
```

<span id="webhook_update">Webhook更新</span>
```json
{
 "action": "UPDATE",
 "data": {
  "createdBy": "jianggang@featureprobe.com",
  "createdTime": 1669363048000,
  "description": "This a test webhook",
  "id": 37,
  "modifiedBy": "Admin",
  "modifiedTime": 1669363050000,
  "name": "Test",
  "status": "ENABLE",
  "url": "http://127.0.0.1/demo"
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "WEBHOOK",
 "timestamp": 1669363075138
}
```

<span id="webhook_delete">Webhook删除</span>
```json
{
 "action": "DELETE",
 "data": {
  "createdBy": "jianggang@featureprobe.com",
  "createdTime": 1669363048000,
  "description": "This a test webhook",
  "id": 37,
  "modifiedBy": "Admin",
  "modifiedTime": 1669363077000,
  "name": "Test",
  "status": "ENABLE",
  "url": "http://127.0.0.1/demo"
 },
 "operator": "jianggang@featureprobe.com",
 "resource": "WEBHOOK",
 "timestamp": 1669363176546
}
```




