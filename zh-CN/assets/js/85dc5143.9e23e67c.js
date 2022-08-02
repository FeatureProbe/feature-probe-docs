"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(r),k=i,f=p["".concat(l,".").concat(k)]||p[k]||c[k]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},s="SDK \u4ecb\u7ecd",a={unversionedId:"sdk/sdk-introduction",id:"sdk/sdk-introduction",title:"SDK \u4ecb\u7ecd",description:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd SDK \u7684\u5206\u7c7b\uff0c\u5b9e\u73b0\u7684\u539f\u7406\uff0c\u76f8\u540c\u70b9\u548c\u4e0d\u540c\u70b9\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/sdk-introduction.md",sourceDirName:"sdk",slug:"/sdk/sdk-introduction",permalink:"/feature-probe-docs/zh-CN/sdk/sdk-introduction",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/sdk-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"SDK",permalink:"/feature-probe-docs/zh-CN/category/sdk"},next:{title:"Client SDK JavaScript",permalink:"/feature-probe-docs/zh-CN/sdk/client-sdk-javascript"}},l={},d=[{value:"SDK \u539f\u7406",id:"sdk-\u539f\u7406",level:2},{value:"SDK \u533a\u522b",id:"sdk-\u533a\u522b",level:2},{value:"Client-side SDK",id:"client-side-sdk",level:3},{value:"Server-side SDK",id:"server-side-sdk",level:3},{value:"SDK Key",id:"sdk-key",level:2},{value:"\u9690\u79c1",id:"\u9690\u79c1",level:2}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sdk-\u4ecb\u7ecd"},"SDK \u4ecb\u7ecd"),(0,i.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd SDK \u7684\u5206\u7c7b\uff0c\u5b9e\u73b0\u7684\u539f\u7406\uff0c\u76f8\u540c\u70b9\u548c\u4e0d\u540c\u70b9\u3002"),(0,i.kt)("h2",{id:"sdk-\u539f\u7406"},"SDK \u539f\u7406"),(0,i.kt)("p",null,"SDK \u901a\u8fc7 User \u5bf9\u8c61\u5b58\u50a8\u7528\u6237\u7684\u7279\u6709\u5c5e\u6027\uff0c\u6839\u636e\u5728 FeatureProbe \u7684 UI \u5e73\u53f0\u4e2d\u914d\u7f6e\u7684\u5f00\u5173\u89c4\u5219\uff0c\u5339\u914d\u5c5e\u6027\uff0c\u8fd4\u56de\u5bf9\u5e94\u8bbe\u7f6e\u7684\u503c\u3002\n\u6bd4\u5982 APP \u4e2d\u67d0\u4e2a\u529f\u80fd\uff0c\u63d0\u524d\u9884\u57cb\u4e86\u529f\u80fd\u5f00\u5173\uff0c\u63a7\u5236\u529f\u80fd\u7684\u6253\u5f00\u548c\u5173\u95ed\uff0c\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\uff0c\u53d1\u73b0\u67d0\u79cd\u60c5\u51b5\u4e0b\u4f1a\u89e6\u53d1 BUG\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u6709\u4e00\u6761\u89c4\u5219\u662f\u4f4e\u4e8e\u6307\u5b9a\u7248\u672c\uff0c\u8fd9\u4e2a feature \u8fd4\u56de false\u3002\u90a3\u5c31\u9700\u8981\u6211\u4eec\u7684 User \u5bf9\u8c61\u4e2d\uff0c\u52a0\u5165\u4e86 app_version \u8fd9\u4e2a\u5c5e\u6027\uff0c\u8fd9\u6837\u5c5e\u6027\u4f20\u7ed9 FeatureProbe \u670d\u52a1\u7aef\u65f6\uff0c\u5bf9\u5e94\u89c4\u5219\u5c31\u4f1a\u5bf9\u4f4e\u7248\u672c\u8fd4\u56de false\uff0c\u5173\u95ed\u5bf9\u5e94\u529f\u80fd\u3002"),(0,i.kt)("h2",{id:"sdk-\u533a\u522b"},"SDK \u533a\u522b"),(0,i.kt)("p",null,"\u76ee\u524d SDK \u5206\u4e3a Client-side SDK \u548c Server-side SDK \u4e24\u79cd"),(0,i.kt)("h3",{id:"client-side-sdk"},"Client-side SDK"),(0,i.kt)("p",null,"\u76ee\u524d\u4e3b\u8981\u9488\u5bf9\u6d4f\u89c8\u5668\uff0c\u79fb\u52a8\u7aef\u7b49 APP \u7528\u6237\u7684\u8bbe\u5907\u73af\u5883\uff0c\u5305\u62ec JavaScript\uff0cAndroid \u548c iOS \u4e09\u79cd\u7c7b\u522b\u3002\u76f8\u6bd4 Server-side SDK\uff0c\u8bbe\u5907\u7684\u6027\u80fd\u548c\u5b89\u5168\u7684\u7ea7\u522b\u4e0d\u5982\u5728 IDC \u4e2d\u7684\u670d\u52a1\u5668\u66f4\u597d\uff0c\u6240\u4ee5 Client-side SDK \u9009\u62e9\u628a\u89c4\u5219\u8ba1\u7b97\u4ea4\u7ed9 FeatureProbe \u670d\u52a1\u7aef\uff0c\u7b49\u670d\u52a1\u7aef\u8ba1\u7b97\u5b8c\u6210\u6240\u6709\u5f00\u5173\u7684\u8fd4\u56de\u503c\uff0c\u4e00\u8d77\u8fd4\u56de\u7ed9 Client-side SDK\u3002\u540e\u7eed\u7684 APP \u83b7\u53d6\u5bf9\u5e94\u7684\u5f00\u5173\u503c\uff0c\u90fd\u4ece\u5185\u5b58\u4e2d\u7684\u7ed3\u679c\u96c6\u8fd4\u56de\u3002"),(0,i.kt)("h3",{id:"server-side-sdk"},"Server-side SDK"),(0,i.kt)("p",null,"\u76ee\u524d\u4e3b\u8981\u9488\u5bf9\u5728 \u5f00\u53d1\u8005\u7684 IDC \u6216\u8005 FeatureProbe \u7684 IDC \u4e2d\u90e8\u7f72\u7684\u540e\u7aef\u670d\u52a1\uff0c\u5305\u62ec Golang\uff0cJava\uff0cRust\uff0cPython \u7b49\u3002\u56e0\u4e3a\u670d\u52a1\u7aef\u6027\u80fd\u66f4\u597d\uff0c\u5e76\u53d1\u91cf\u66f4\u5927\uff0c\u5b89\u5168\u7b49\u7ea7\u66f4\u9ad8\uff0c\u4e14 User \u7684\u5c5e\u6027\u6839\u636e\u7528\u6237\u6570\u53d8\u5316\uff0c\u6240\u4ee5\u89c4\u5219\u7684\u8ba1\u7b97\u662f\u5728 Server-side SDK \u4e2d\u5b9e\u65f6\u8ba1\u7b97\u7684\u3002"),(0,i.kt)("h2",{id:"sdk-key"},"SDK Key"),(0,i.kt)("p",null,"Client SDK Key \u53ea\u80fd\u7528\u5728 Client-side SDK \u4e2d\uff0c\u53ea\u80fd\u62c9\u53d6\u8ba1\u7b97\u7ed3\u679c\u3002"),(0,i.kt)("p",null,"Server SDK Key \u53ea\u80fd\u7528\u5728 Server-side SDK \u4e2d\uff0c\u53ea\u80fd\u62c9\u53d6\u8ba1\u7b97\u89c4\u5219\uff0c\u5e76\u5728 SDK \u4e2d\u5b9e\u65f6\u6c42\u503c\u3002"),(0,i.kt)("h2",{id:"\u9690\u79c1"},"\u9690\u79c1"),(0,i.kt)("p",null,"User \u4e2d\u7684\u5c5e\u6027\u76ee\u524d FeatureProbe \u4e0d\u4f1a\u6301\u4e45\u5316\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Server-side SDK \u7684 User \u5bf9\u8c61\u662f\u5728\u5f00\u53d1\u8005\u81ea\u5df1\u7684\u5e94\u7528\u4e2d\uff0c\u4e0d\u4f1a\u53d1\u7ed9 FeatureProbe \u7684\u670d\u52a1\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},"Client-side SDK \u7684 User \u4f1a\u53d1\u7ed9 FeatureProbe \u7684\u670d\u52a1\u5668\uff0c\u4f46\u662f\u4e0d\u4f1a\u5b58\u50a8\uff0c\u4ec5\u7528\u4f5c\u5f53\u65f6\u7684\u89c4\u5219\u6c42\u503c\uff0c\u8ba1\u7b97\u5b8c\u5373\u91ca\u653e\u3002")))}c.isMDXComponent=!0}}]);