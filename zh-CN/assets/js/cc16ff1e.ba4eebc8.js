"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="\u5ba2\u6237\u7aef SDK iOS",l={unversionedId:"sdk/client-sdk-ios",id:"sdk/client-sdk-ios",title:"\u5ba2\u6237\u7aef SDK iOS",description:"iOS Usage",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/client-sdk-ios.md",sourceDirName:"sdk",slug:"/sdk/client-sdk-ios",permalink:"/zh-CN/sdk/client-sdk-ios",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/client-sdk-ios.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"\u5ba2\u6237\u7aef SDK Android",permalink:"/zh-CN/sdk/client-sdk-android"},next:{title:"\u670d\u52a1\u7aef SDK Golang",permalink:"/zh-CN/sdk/server-sdk-golang"}},u={},s=[{value:"iOS Usage",id:"ios-usage",level:2},{value:"Swift",id:"swift",level:3},{value:"Step 1. \u5b89\u88c5 SDK",id:"step-1-\u5b89\u88c5-sdk",level:4},{value:"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance",id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance",level:4},{value:"\u6b65\u9aa4 3.  \u4f7f\u7528 FeatureProbe \u5f00\u5173",id:"\u6b65\u9aa4-3--\u4f7f\u7528-featureprobe-\u5f00\u5173",level:4},{value:"\u6b65\u9aa4 4. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)",id:"\u6b65\u9aa4-4-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009",level:4},{value:"Objective-C",id:"objective-c",level:3},{value:"\u6b65\u9aa4 1. \u5b89\u88c5 SDK",id:"\u6b65\u9aa4-1-\u5b89\u88c5-sdk",level:4},{value:"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance",id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance-1",level:4},{value:"\u6b65\u9aa4 3.  \u4f7f\u7528 FeatureProbe \u5f00\u5173",id:"\u6b65\u9aa4-3--\u4f7f\u7528-featureprobe-\u5f00\u5173-1",level:4},{value:"\u6b65\u9aa4 4. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)",id:"\u6b65\u9aa4-4-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009-1",level:4}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5ba2\u6237\u7aef-sdk-ios"},"\u5ba2\u6237\u7aef SDK iOS"),(0,a.kt)("h2",{id:"ios-usage"},"iOS Usage"),(0,a.kt)("h3",{id:"swift"},"Swift"),(0,a.kt)("h4",{id:"step-1-\u5b89\u88c5-sdk"},"Step 1. \u5b89\u88c5 SDK"),(0,a.kt)("p",null,"Swift Package Manager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. XCode -> File -> Add Packages -> input `https://github.com/FeatureProbe/client-sdk-ios.git`\n2. click `Add Package`\n")),(0,a.kt)("p",null,"Cocoapods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. add `pod 'FeatureProbe', :git => 'git@github.com:FeatureProbe/client-sdk-ios.git'` to Podfile\n2. `pod install` or `pod update`\n")),(0,a.kt)("h4",{id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance"},"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'import featureprobe\n\nlet url = FpUrlBuilder(remoteUrl: "remote_url/").build();\nlet user = FpUser(key: "user@company.com")\nuser.setAttr(key: "name", value: "bob")\nlet config = FpConfig(\n    remoteUrl: url!,\n    clientSdkKey: "client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d",\n    refreshInterval: 10,\n    waitFirstResp: true\n)\nlet fp = FeatureProbe(config: config, user: user)\n')),(0,a.kt)("h4",{id:"\u6b65\u9aa4-3--\u4f7f\u7528-featureprobe-\u5f00\u5173"},"\u6b65\u9aa4 3.  \u4f7f\u7528 FeatureProbe \u5f00\u5173"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let showFeature = fp.boolValue("your.toggle.key", false)\nif showFeature {\n    # application code to show the feature\n} else {\n    # the code to run if the feature is off\n}\n')),(0,a.kt)("h4",{id:"\u6b65\u9aa4-4-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009"},"\u6b65\u9aa4 4. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let fp2 = FeatureProbe.newForTest(toggles: "{ \\"toggle_1\\": true }")\nlet is_true = fp2.boolValue(key: "toggle_1", defaultValue: false)\nassert(is_true == true);\n')),(0,a.kt)("p",null,"Find the Demo code in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-ios/demo-cocoapods"},"example")),(0,a.kt)("h3",{id:"objective-c"},"Objective-C"),(0,a.kt)("h4",{id:"\u6b65\u9aa4-1-\u5b89\u88c5-sdk"},"\u6b65\u9aa4 1. \u5b89\u88c5 SDK"),(0,a.kt)("p",null,"Cocoapods"),(0,a.kt)("p",null,"add ",(0,a.kt)("inlineCode",{parentName:"p"},"pod 'FeatureProbe', :git => 'git@github.com:FeatureProbe/client-sdk-ios.git'")," to Podfile"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pod update")),(0,a.kt)("h4",{id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance-1"},"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objective-c"},'#import "FeatureProbe-Swift.h"\n\nNSString *urlStr = @"remote_url/";\nFpUrl *url = [[[FpUrlBuilder alloc] initWithRemoteUrl: urlStr] build];\nFpUser *user = [[FpUser alloc] initWithKey:@"user_key"];\n[user setAttrWithKey:@"name" value:@"bob"];\nFpConfig *config = [[FpConfig alloc] initWithRemoteUrl: url\n                                          clientSdkKey:@"client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d"\n                                       refreshInterval: 10\n                                         waitFirstResp: true];\nFeatureProbe *fp = [[FeatureProbe alloc] initWithConfig:config user:user];\n')),(0,a.kt)("h4",{id:"\u6b65\u9aa4-3--\u4f7f\u7528-featureprobe-\u5f00\u5173-1"},"\u6b65\u9aa4 3.  \u4f7f\u7528 FeatureProbe \u5f00\u5173"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objective-c"},'bool showFeature = [fp boolValueWithKey: @"your.toggle.key" defaultValue: false];\nif (showFeature) {\n    # application code to show the feature\n} else {\n    # the code to run if the feature is off\n}\n')),(0,a.kt)("h4",{id:"\u6b65\u9aa4-4-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009-1"},"\u6b65\u9aa4 4. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objective-c"},'#import "FeatureProbe-Swift.h"\n\nNSString *s = @"{ \\"ab_test\\": \\"green\\"}";\nFeatureProbe *fp = [[FeatureProbe alloc] initWithTestJson: s];\nNSString *value = [fp stringValueWithKey:@"ab_test" defaultValue:@"red"];\nNSLog(@"value is %@", value);\n')),(0,a.kt)("p",null,"Find the Demo code in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-ios/demo-objc"},"example")))}p.isMDXComponent=!0}}]);