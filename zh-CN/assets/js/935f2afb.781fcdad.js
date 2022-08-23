"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"defaultSidebar":[{"type":"category","label":"\u7b80\u4ecb","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4ec0\u4e48\u662f\u529f\u80fd\u7ba1\u7406","href":"/zh-CN/","docId":"introduction/what"},{"type":"link","label":"\u9002\u7528\u573a\u666f","href":"/zh-CN/introduction/scene","docId":"introduction/scene"},{"type":"link","label":"FeatureProbe\u6838\u5fc3\u6982\u5ff5","href":"/zh-CN/introduction/concept","docId":"introduction/concept"},{"type":"link","label":"FeatureProbe \u67b6\u6784","href":"/zh-CN/introduction/structure","docId":"introduction/structure"}],"href":"/zh-CN/category/introduction"},{"type":"category","label":"\u4f7f\u7528\u65b9\u6cd5","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u9879\u76ee\u4e0e\u73af\u5883","href":"/zh-CN/how-to/project-and-environment","docId":"how-to/project-and-environment"},{"type":"link","label":"\u4f7f\u7528\u529f\u80fd\u5f00\u5173","href":"/zh-CN/how-to/how-to-create-toggle","docId":"how-to/how-to-create-toggle"},{"type":"link","label":"\u5f00\u5173\u914d\u7f6e","href":"/zh-CN/how-to/toggle-detail","docId":"how-to/toggle-detail"},{"type":"link","label":"\u6570\u636e\u76d1\u63a7","href":"/zh-CN/how-to/metrics","docId":"how-to/metrics"},{"type":"link","label":"\u4eba\u7fa4\u7ec4","href":"/zh-CN/how-to/segments","docId":"how-to/segments"},{"type":"link","label":"API","href":"/zh-CN/how-to/api","docId":"how-to/api"}],"href":"/zh-CN/category/how-to-guides"},{"type":"category","label":"SDK","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"SDK \u4ecb\u7ecd","href":"/zh-CN/sdk/sdk-introduction","docId":"sdk/sdk-introduction"},{"type":"link","label":"\u5ba2\u6237\u7aef SDK JavaScript","href":"/zh-CN/sdk/client-sdk-javascript","docId":"sdk/client-sdk-javascript"},{"type":"link","label":"\u5ba2\u6237\u7aef SDK Android","href":"/zh-CN/sdk/client-sdk-android","docId":"sdk/client-sdk-android"},{"type":"link","label":"\u5ba2\u6237\u7aef SDK iOS","href":"/zh-CN/sdk/client-sdk-ios","docId":"sdk/client-sdk-ios"},{"type":"category","label":"Server-Side SDKs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Java SDK","href":"/zh-CN/sdk/Server-Side SDKs/java-sdk","docId":"sdk/Server-Side SDKs/java-sdk"},{"type":"link","label":"Server SDK Golang","href":"/zh-CN/sdk/Server-Side SDKs/golang-sdk","docId":"sdk/Server-Side SDKs/golang-sdk"},{"type":"link","label":"Server SDK Rust","href":"/zh-CN/sdk/Server-Side SDKs/rust-sdk","docId":"sdk/Server-Side SDKs/rust-sdk"}],"href":"/zh-CN/category/server-side-sdks"}],"href":"/zh-CN/category/sdk"},{"type":"category","label":"\u6700\u4f73\u5b9e\u8df5","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u5355\u5143\u6d4b\u8bd5","href":"/zh-CN/practices/unit-test","docId":"practices/unit-test"},{"type":"link","label":"\u4f5c\u4e3a\u964d\u7ea7\u7684\u5f00\u5173","href":"/zh-CN/practices/degrade","docId":"practices/degrade"},{"type":"link","label":"\u5f00\u5173\u6cbb\u7406","href":"/zh-CN/practices/governance","docId":"practices/governance"}],"href":"/zh-CN/category/best-practices"}]},"docs":{"how-to/api":{"id":"how-to/api","title":"API","description":"\u6211\u4eec\u4f7f\u7528 OpenAPI \u4f7f\u7528\u4e86 REST \u89c4\u8303\uff0c\u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u627e\u5230\u6211\u4eec\u7684\u6587\u6863\uff1aFeatureProbe OpenAPI\u3002","sidebar":"defaultSidebar"},"how-to/how-to-create-toggle":{"id":"how-to/how-to-create-toggle","title":"\u4f7f\u7528\u529f\u80fd\u5f00\u5173","description":"\u4f7f\u7528\u529f\u80fd\u5f00\u5173","sidebar":"defaultSidebar"},"how-to/metrics":{"id":"how-to/metrics","title":"\u6570\u636e\u76d1\u63a7","description":"\u67e5\u770b\u5f00\u5173\u7684\u8bbf\u95ee\u4fe1\u606f","sidebar":"defaultSidebar"},"how-to/project-and-environment":{"id":"how-to/project-and-environment","title":"\u9879\u76ee\u4e0e\u73af\u5883","description":"\u9879\u76ee\u7ba1\u7406","sidebar":"defaultSidebar"},"how-to/segments":{"id":"how-to/segments","title":"\u4eba\u7fa4\u7ec4","description":"\u4eba\u7fa4\u7ec4\u7ba1\u7406","sidebar":"defaultSidebar"},"how-to/toggle-detail":{"id":"how-to/toggle-detail","title":"\u5f00\u5173\u914d\u7f6e","description":"\u5f00\u5173\u914d\u7f6e","sidebar":"defaultSidebar"},"introduction/concept":{"id":"introduction/concept","title":"FeatureProbe\u6838\u5fc3\u6982\u5ff5","description":"\u5b83\u5305\u542b\u300e\u529f\u80fd\u7c92\u5ea6\u300f\u7684\u53d1\u5e03\u7ba1\u7406\u3001\u7070\u5ea6\u653e\u91cf\u3001\u964d\u7ea7\u9884\u6848\u3001AB\u5b9e\u9a8c\u53d8\u7b49\u4e00\u7cfb\u5217\u7ba1\u7406\u64cd\u4f5c\u3002\u5b83\u53ef\u4ee5\u8ba9\u5f00\u53d1\u4eba\u5458\u3001\u8fd0\u8425\u4eba\u5458\u3001\u8fd0\u7ef4\u4eba\u5458\u5b89\u5168\u3001\u9ad8\u6548\u7684\u5b8c\u6210\u529f\u80fd\u4ea4\u4ed8\uff0c\u540c\u65f6\u7cbe\u7ec6\u63a7\u5236\u53d8\u66f4\u98ce\u9669\u3002FeatureProbe\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u670d\u52a1\uff0c\u6240\u6709\u4e3b\u6d41\u8bed\u8a00\u7684SDK\uff0c\u53ef\u4ee5\u4e3a\u5404\u7c7b\u6280\u672f\u6808\u7684\u8f6f\u4ef6\u9879\u76ee\u63d0\u4f9b\u6301\u7eed\u4ea4\u4ed8\u65f6\u4ee3\u4e0b\u7684\u6700\u5148\u8fdb\u7684Feature Mangement\u670d\u52a1\u3002","sidebar":"defaultSidebar"},"introduction/scene":{"id":"introduction/scene","title":"\u9002\u7528\u573a\u666f","description":"FeatureProbe\u6700\u5e38\u89c1\u7684\u5e94\u7528\u573a\u666f\u662f\u65b0\u529f\u80fd\u7684\u53d1\u5e03\u6216\u65b0\u7248\u672c\u7684\u53d1\u5e03\u3002\u5f53\u6211\u4eec\u53d1\u5e03\u4e00\u4e2a\u65b0\u529f\u80fd\u6216\u66f4\u65b0\u670d\u52a1\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u4e3a\u4e00\u5c0f\u90e8\u5206\u7528\u6237\u542f\u7528\u8fd9\u4e9b\u529f\u80fd\uff0c\u800c\u4e0d\u5f71\u54cd\u5927\u591a\u6570\u7528\u6237\uff0c\u786e\u4fdd\u964d\u4f4e\u53d1\u5e03\u7684\u98ce\u9669\u3002","sidebar":"defaultSidebar"},"introduction/structure":{"id":"introduction/structure","title":"FeatureProbe \u67b6\u6784","description":"\u4e0b\u56fe\u662f  FeatureProbe \u7684\u6574\u4f53\u67b6\u6784\u6a21\u5757\u7684\u6982\u89c8\uff1a","sidebar":"defaultSidebar"},"introduction/what":{"id":"introduction/what","title":"\u4ec0\u4e48\u662f\u529f\u80fd\u7ba1\u7406","description":"\u968f\u7740\u654f\u6377\u8fd0\u52a8\u3001\u6301\u7eed\u4ea4\u4ed8\u5b9e\u8df5\u5728\u8f6f\u4ef6\u7814\u53d1\u9886\u57df\u7684\u666e\u53ca\uff0c\u8f6f\u4ef6\u884c\u4e1a\u8d8a\u6765\u8d8a\u4f9d\u8d56\u4ea4\u4ed8\u5468\u671f\u7684\u7f29\u77ed\u6765\u63d0\u5347\u7ade\u4e89\u4f18\u52bf\uff0c\u83b7\u53d6\u4e1a\u52a1\u6210\u529f\u3002\u7136\u800c\u5bf9\u7814\u53d1\u56e2\u961f\u7684\u8d1f\u8d23\u4eba\u6765\u8bf4\uff0c\u9700\u8981\u610f\u8bc6\u5230\u6301\u7eed\u96c6\u6210\u3001\u6301\u7eed\u4ea4\u4ed8\u7ed9\u56e2\u961f\u7684\u7814\u53d1\u5de5\u4f5c\u5e26\u6765\u4e86\u8bb8\u591a\u6839\u672c\u6027\u7684\u6311\u6218\uff0c\u901f\u5ea6\u7684\u63d0\u5347\u5fc5\u7136\u7684\u589e\u52a0\u4e86\u4ea4\u4ed8\u7684\u98ce\u9669\u4e0e\u5f00\u53d1\u8fc7\u7a0b\u7684\u6df7\u4e71\u7a0b\u5ea6\u3002\u7814\u53d1\u4eba\u5458\u9700\u8981\u4e13\u4e3a\u6301\u7eed\u96c6\u6210\uff0c\u6301\u7eed\u4ea4\u4ed8\u65f6\u4ee3\u800c\u4e13\u95e8\u8bbe\u8ba1\u7684\u5de5\u5177\uff0c\u624d\u80fd\u5728\u63d0\u5347\u901f\u5ea6\u7684\u540c\u65f6\uff0c\u63a7\u5236\u98ce\u9669\u5e76\u52a0\u5f3a\u7ba1\u63a7\u3002","sidebar":"defaultSidebar"},"practices/degrade":{"id":"practices/degrade","title":"\u4f5c\u4e3a\u964d\u7ea7\u7684\u5f00\u5173","description":"","sidebar":"defaultSidebar"},"practices/governance":{"id":"practices/governance","title":"\u5f00\u5173\u6cbb\u7406","description":"","sidebar":"defaultSidebar"},"practices/unit-test":{"id":"practices/unit-test","title":"\u5355\u5143\u6d4b\u8bd5","description":"","sidebar":"defaultSidebar"},"sdk/client-sdk-android":{"id":"sdk/client-sdk-android","title":"\u5ba2\u6237\u7aef SDK Android","description":"Kotlin","sidebar":"defaultSidebar"},"sdk/client-sdk-ios":{"id":"sdk/client-sdk-ios","title":"\u5ba2\u6237\u7aef SDK iOS","description":"iOS Usage","sidebar":"defaultSidebar"},"sdk/client-sdk-javascript":{"id":"sdk/client-sdk-javascript","title":"\u5ba2\u6237\u7aef SDK JavaScript","description":"\u5feb\u901f\u5c1d\u8bd5 Demo Code","sidebar":"defaultSidebar"},"sdk/sdk-introduction":{"id":"sdk/sdk-introduction","title":"SDK \u4ecb\u7ecd","description":"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd SDK \u7684\u5206\u7c7b\uff0c\u5b9e\u73b0\u7684\u539f\u7406\uff0c\u76f8\u540c\u70b9\u548c\u4e0d\u540c\u70b9\u3002","sidebar":"defaultSidebar"},"sdk/Server-Side SDKs/golang-sdk":{"id":"sdk/Server-Side SDKs/golang-sdk","title":"Server SDK Golang","description":"Try Out Demo Code","sidebar":"defaultSidebar"},"sdk/Server-Side SDKs/java-sdk":{"id":"sdk/Server-Side SDKs/java-sdk","title":"Java SDK","description":"Feature Probe is an open source feature management service. This SDK is used to control features in java programs. This","sidebar":"defaultSidebar"},"sdk/Server-Side SDKs/rust-sdk":{"id":"sdk/Server-Side SDKs/rust-sdk","title":"Server SDK Rust","description":"Try Out Demo Code","sidebar":"defaultSidebar"}}}')}}]);