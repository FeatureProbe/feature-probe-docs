---
sidebar_position: 3
---

# iOS SDK

## iOS Usage

### Swift

#### Step 1. 安装 SDK

Swift Package Manager:

    1. XCode -> File -> Add Packages -> input `https://github.com/FeatureProbe/client-sdk-ios.git`
    2. click `Add Package`

Cocoapods:

    1. add `pod 'FeatureProbe', :git => 'git@github.com:FeatureProbe/client-sdk-ios.git'` to Podfile
    2. `pod install` or `pod update`

#### 步骤 2. 创建一个 FeatureProbe instance

```swift
import featureprobe

let url = FpUrlBuilder(remoteUrl: "featureprobe.io/server").build();
let user = FpUser()
user.setAttr(key: "name", value: "bob")
let config = FpConfig(
    remoteUrl: url!,
    clientSdkKey: "client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d",
    refreshInterval: 10,
    waitFirstResp: true
)
let fp = FeatureProbe(config: config, user: user)
```

#### 步骤 3. 使用 FeatureProbe 开关

```swift
let showFeature = fp.boolValue("toggle_key", false)
if showFeature {
    # application code to show the feature
} else {
    # the code to run if the feature is off
}
```

#### 步骤 4. 单元测试 (可选)

```swift
let fp2 = FeatureProbe.newForTest(toggles: "{ \"toggle_1\": true }")
let is_true = fp2.boolValue(key: "toggle_1", defaultValue: false)
assert(is_true == true);
```

Find the Demo code in [example](https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-ios/demo-cocoapods)

### Objective-C

#### 步骤 1. 安装 SDK

Cocoapods

add `pod 'FeatureProbe', :git => 'git@github.com:FeatureProbe/client-sdk-ios.git'` to Podfile

`pod install` or `pod update`

#### 步骤 2. 创建一个 FeatureProbe instance

```objective-c
#import "FeatureProbe-Swift.h"

NSString *urlStr = @"featureprobe.io/server";
FpUrl *url = [[[FpUrlBuilder alloc] initWithRemoteUrl: urlStr] build];
FpUser *user = [[FpUser alloc] init];
[user setAttrWithKey:@"name" value:@"bob"];
FpConfig *config = [[FpConfig alloc] initWithRemoteUrl: url
                                          clientSdkKey:@"client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d"
                                       refreshInterval: 10
                                         waitFirstResp: true];
FeatureProbe *fp = [[FeatureProbe alloc] initWithConfig:config user:user];
```

#### 步骤 3. 使用 FeatureProbe 开关

```objective-c
bool showFeature = [fp boolValueWithKey: @"toggle_key" defaultValue: false];
if (showFeature) {
    # application code to show the feature
} else {
    # the code to run if the feature is off
}
```

#### 步骤 4. 单元测试 (可选)

```objective-c
#import "FeatureProbe-Swift.h"

NSString *s = @"{ \"ab_test\": \"green\"}";
FeatureProbe *fp = [[FeatureProbe alloc] initWithTestJson: s];
NSString *value = [fp stringValueWithKey:@"ab_test" defaultValue:@"red"];
NSLog(@"value is %@", value);
```

Find the Demo code in [example](https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-ios/demo-objc)
