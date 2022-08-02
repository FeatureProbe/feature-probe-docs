"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="\u5ba2\u6237\u7aef SDK Android",l={unversionedId:"sdk/client-sdk-android",id:"sdk/client-sdk-android",title:"\u5ba2\u6237\u7aef SDK Android",description:"Kotlin",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/client-sdk-android.md",sourceDirName:"sdk",slug:"/sdk/client-sdk-android",permalink:"/feature-probe-docs/zh-CN/sdk/client-sdk-android",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/client-sdk-android.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"\u5ba2\u6237\u7aef SDK JavaScript",permalink:"/feature-probe-docs/zh-CN/sdk/client-sdk-javascript"},next:{title:"\u5ba2\u6237\u7aef SDK iOS",permalink:"/feature-probe-docs/zh-CN/sdk/client-sdk-ios"}},c={},u=[{value:"Kotlin",id:"kotlin",level:2},{value:"\u6b65\u9aa4 1. \u5b89\u88c5 SDK",id:"\u6b65\u9aa4-1-\u5b89\u88c5-sdk",level:3},{value:"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance",id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance",level:3},{value:"\u6b65\u9aa4 3.  \u4f7f\u7528 FeatureProbe \u5f00\u5173",id:"\u6b65\u9aa4-3--\u4f7f\u7528-featureprobe-\u5f00\u5173",level:3},{value:"\u6b65\u9aa4 4. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)",id:"\u6b65\u9aa4-4-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009",level:3}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5ba2\u6237\u7aef-sdk-android"},"\u5ba2\u6237\u7aef SDK Android"),(0,a.kt)("h2",{id:"kotlin"},"Kotlin"),(0,a.kt)("h3",{id:"\u6b65\u9aa4-1-\u5b89\u88c5-sdk"},"\u6b65\u9aa4 1. \u5b89\u88c5 SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"implementation 'com.featureprobe.mobile:android_sdk:1.0.1@aar'\nimplementation 'net.java.dev.jna:jna:5.7.0@aar'\n")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-2-\u521b\u5efa\u4e00\u4e2a-featureprobe-instance"},"\u6b65\u9aa4 2. \u521b\u5efa\u4e00\u4e2a FeatureProbe instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.featureprobe.mobile.*;\n\nval url = FpUrlBuilder("remote_url/").build();\nval user = FpUser("user@company.com")\nuser.setAttr("name", "bob")\nval config = FpConfig(url!!, "client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d", 10u, true)\nval fp = FeatureProbe(config, user)\n')),(0,a.kt)("h3",{id:"\u6b65\u9aa4-3--\u4f7f\u7528-featureprobe-\u5f00\u5173"},"\u6b65\u9aa4 3.  \u4f7f\u7528 FeatureProbe \u5f00\u5173"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val showFeature = fp.boolValue("your.toggle.key", false)\nif (showFeature) {\n    # application code to show the feature\n} else {\n    # the code to run if the feature is off\n}\n')),(0,a.kt)("h3",{id:"\u6b65\u9aa4-4-\u5355\u5143\u6d4b\u8bd5-\u53ef\u9009"},"\u6b65\u9aa4 4. \u5355\u5143\u6d4b\u8bd5 (\u53ef\u9009)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val fp_for_test = FeatureProbe.newForTest("{ \\"toggle_1\\": true }")\nval is_true = fp_for_test.boolValue("toggle_1", false)\nassert(is_true == true)\n')),(0,a.kt)("p",null,"Find the Demo code in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-android/app"},"example")))}d.isMDXComponent=!0}}]);