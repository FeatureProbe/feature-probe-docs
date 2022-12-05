---
sidebar_position: 7
---

# 配置Webhook

## 添加WebHook
FeatureProbe提供推送消息到第三方应用的能力。
![history screenshot](/WebHook_list.png)

1. WebHook的状态（开启后，WebHook的配置内容才能生效）
2. 填写WebHook名称
3. 填写描述信息
4. 填写URL（当特定事件发生时，我们将发送一个POST消息到这个URL）
5. 点击创建按钮，即可完成WebHook的创建。

![history screenshot](/WebHook.png)

## 编辑WebHook
WebHookURL变更后，当特定事件发生时，我们将发送POST消息到这个新的URL。

## 删除WebHook
删除WebHook后，我们将停止发送任何POST消息到这个URL。
