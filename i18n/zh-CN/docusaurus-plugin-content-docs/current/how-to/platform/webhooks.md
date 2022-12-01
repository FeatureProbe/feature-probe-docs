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
|---------|-----|-----------------------------------------------------|
| 项目      | 创建  | [Request Body 示例](#项目创建)                                |
|         | 更新  | [Request Body 示例](#project_update)                  |
|         | 删除  | [Request Body 示例](#project_delete)                  | 
|         | 更新审批设置 | [Request Body 示例](#project_update_approval_settings) |
| 环境      | 创建  | [Request Body 示例](#environment_create)              |
|         | 更新 | [Request Body 示例](#environment_update)              |
|         | 下线 | [Request Body 示例](#environment_offline)             |
|         | 恢复 | [Request Body 示例](#environment_restore)             |
| 人群      | 创建 | [Request Body 示例](#segment_create)                  |
|         | 更新 | [Request Body 示例](#segment_update)                  |
|         | 发布 | [Request Body 示例](#segment_publish)                 |
|         | 删除 | [Request Body 示例](#segment_delete)                  |
| 开关      | 创建 | [Request Body 示例](#toggle_create)                   |
|         | 更新 | [Request Body 示例](#toggle_update)                   |
|         | 发布 | [Request Body 示例](#toggle_publish)                  |
|         | 下线 | [Request Body 示例](#toggle_offline)                  |
|         | 恢复 | [Request Body 示例](#toggle_restore)                  |
|         | 发起审批 | [Request Body 示例](#toggle_approval)                 |
|         | 审批单状态变更 | [Request Body 示例](#toggle_update_approval)          |
| 成员      | 创建 | [Request Body 示例](#member_create)                   |
|         | 更新 | [Request Body 示例](#member_update)                   |
|         | 删除 | [Request Body 示例](#member_delete)                   |
| Webhook | 创建 | [Request Body 示例](#webhook_create)                  |
|         | 更新 | [Request Body 示例](#webhook_update)                  |
|         | 删除 | [Request Body 示例](#webhook_delete)                  |


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

##### 项目创建
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