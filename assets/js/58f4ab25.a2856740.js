"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=i(n),k=a,b=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(b,u(u({ref:t},s),{},{components:n})):r.createElement(b,u({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={slug:"FeatureProbe",title:"FeatureProbe\uff1a\u5982\u4f55\u5feb\u901f\u3001\u5b89\u5168\u5730\u8fdb\u884c\u529f\u80fd\u53d1\u5e03"},u=void 0,o={permalink:"/feature-probe-docs/blog/FeatureProbe",editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/blog/2022-07-29-featureprobe.md",source:"@site/blog/2022-07-29-featureprobe.md",title:"FeatureProbe\uff1a\u5982\u4f55\u5feb\u901f\u3001\u5b89\u5168\u5730\u8fdb\u884c\u529f\u80fd\u53d1\u5e03",description:"\u5728\u4ea7\u54c1\u5feb\u901f\u8fed\u4ee3\u4e2d\uff0c\u8981\u505a\u5230\u9ad8\u6548\u7684\u529f\u80fd\u53d1\u5e03\u540c\u65f6\u8fd8\u8981\u964d\u4f4e\u4e0a\u7ebf\u98ce\u9669\uff0c\u9700\u8981\u91c7\u7528\u5408\u9002\u7684\u6280\u672f\u5bf9\u529f\u80fd\u53d1\u5e03\u8fdb\u884c\u7cbe\u7ec6\u5316\u7684\u7ba1\u63a7\u3002FeatureProbe \u5c31\u662f\u4e00\u4e2a\u9ad8\u6548\u7684\u529f\u80fd\u7ba1\u7406\uff08Feature management\uff09\u5f00\u6e90\u670d\u52a1\uff0c\u5b83\u63d0\u4f9b\u4e86\u7070\u5ea6\u653e\u91cf\u3001AB\u5b9e\u9a8c\u3001\u5b9e\u65f6\u914d\u7f6e\u53d8\u66f4\u7b49\u9488\u5bf9\u529f\u80fd\u7c92\u5ea6\u7684\u4e00\u7cfb\u5217\u7ba1\u7406\u80fd\u529b\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 FeatureProbe \u8fdb\u884c\u5feb\u901f\u3001\u5b89\u5168\u5730\u505a\u529f\u80fd\u53d1\u5e03\u548c\u8fed\u4ee3\u3002",date:"2022-07-29T00:00:00.000Z",formattedDate:"July 29, 2022",tags:[],readingTime:10.34,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"FeatureProbe",title:"FeatureProbe\uff1a\u5982\u4f55\u5feb\u901f\u3001\u5b89\u5168\u5730\u8fdb\u884c\u529f\u80fd\u53d1\u5e03"},prevItem:{title:"\u4e3a\u4ec0\u4e48 FeatureProbe \u7528 Rust \u548c uniffi-rs \u5f00\u53d1\u8de8\u5e73\u53f0\u79fb\u52a8\u7aef SDK\uff1f",permalink:"/feature-probe-docs/blog/Rust"}},p={authorsImageUrls:[]},i=[{value:"\u4e00\u3001\u52a8\u6001\u914d\u7f6e",id:"\u4e00\u52a8\u6001\u914d\u7f6e",level:3},{value:"\u4e8c\u3001\u6e10\u8fdb\u5f0f\u53d1\u5e03",id:"\u4e8c\u6e10\u8fdb\u5f0f\u53d1\u5e03",level:3},{value:"\u4e09\u3001\u5feb\u901f\u8bd5\u7528",id:"\u4e09\u5feb\u901f\u8bd5\u7528",level:3},{value:"\u56db\u3001\u603b\u7ed3",id:"\u56db\u603b\u7ed3",level:3}],s={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4ea7\u54c1\u5feb\u901f\u8fed\u4ee3\u4e2d\uff0c\u8981\u505a\u5230\u9ad8\u6548\u7684\u529f\u80fd\u53d1\u5e03\u540c\u65f6\u8fd8\u8981\u964d\u4f4e\u4e0a\u7ebf\u98ce\u9669\uff0c\u9700\u8981\u91c7\u7528\u5408\u9002\u7684\u6280\u672f\u5bf9\u529f\u80fd\u53d1\u5e03\u8fdb\u884c\u7cbe\u7ec6\u5316\u7684\u7ba1\u63a7\u3002FeatureProbe \u5c31\u662f\u4e00\u4e2a\u9ad8\u6548\u7684\u529f\u80fd\u7ba1\u7406\uff08Feature management\uff09\u5f00\u6e90\u670d\u52a1\uff0c\u5b83\u63d0\u4f9b\u4e86\u7070\u5ea6\u653e\u91cf\u3001AB\u5b9e\u9a8c\u3001\u5b9e\u65f6\u914d\u7f6e\u53d8\u66f4\u7b49\u9488\u5bf9\u529f\u80fd\u7c92\u5ea6\u7684\u4e00\u7cfb\u5217\u7ba1\u7406\u80fd\u529b\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 FeatureProbe \u8fdb\u884c\u5feb\u901f\u3001\u5b89\u5168\u5730\u505a\u529f\u80fd\u53d1\u5e03\u548c\u8fed\u4ee3\u3002"),(0,a.kt)("h3",{id:"\u4e00\u52a8\u6001\u914d\u7f6e"},"\u4e00\u3001\u52a8\u6001\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u63a5\u89e6\u8fc7\u529f\u80fd\u7ba1\u7406\u670d\u52a1\uff0c\u90a3\u76f8\u4fe1\u4f60\u5bf9\u914d\u7f6e\u4e2d\u5fc3\u4e0d\u4f1a\u964c\u751f\u3002\u4ece\u5206\u5e03\u5f0f\u7cfb\u7edf\u5174\u8d77\u4e4b\u540e\uff0c\u914d\u7f6e\u4e2d\u5fc3\u5df2\u7ecf\u662f\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\u3002\u4ece\u6280\u672f\u4e0a\u6765\u8bf4\uff0c\u529f\u80fd\u7ba1\u7406\u6216\u914d\u7f6e\u4e2d\u5fc3\u672c\u8d28\u4e0a\u90fd\u662f\u901a\u8fc7\u914d\u7f6e\u89c4\u5219\u52a8\u6001\u63a7\u5236\u5e94\u7528\u7a0b\u5e8f\u884c\u4e3a\uff0c\u6240\u5e26\u6765\u7684\u597d\u5904\u662f\u7701\u53bb\u4e86\u4fee\u6539\u4ee3\u7801\u3001\u7f16\u8bd1\u3001\u6253\u5305\u3001\u90e8\u7f72\u6d41\u7a0b\u3002\u5728\u52a8\u6001\u914d\u7f6e\u7684\u5b9e\u8df5\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4f1a\u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"Key-Value")," \u7684\u5f62\u5f0f\u5c06\u914d\u7f6e\u89c4\u5219\u5b58\u50a8\u5728\u67d0\u4e2a\u670d\u52a1\u4e2d\u7edf\u4e00\u7ba1\u7406\uff0c\u5e76\u901a\u8fc7\u6570\u636e\u5206\u53d1\u5c06\u914d\u7f6e\u4f20\u8f93\u81f3\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u540c\u65f6\u8fd8\u6709\u4e00\u4e2a\u53ef\u4ee5\u7ed9\u5e94\u7528\u7a0b\u5e8f\u83b7\u53d6\u914d\u7f6e\u7684\u5ba2\u6237\u7aef\u5e93(SDK)\u3002\n\u4e0b\u9762\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6f14\u793a ",(0,a.kt)("strong",{parentName:"p"},"Key-Value")," \u914d\u7f6e\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u4ee3\u7801\u83b7\u53d6\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// key-value config:\n{ "enable_feature_124": true }\n\n// sdk code: \nsdkClient.BooleanValue("enable_feature_124") => true\n')),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u7b80\u5355\u914d\u7f6e\u9700\u6c42\u90fd\u53ef\u4ee5\u7528\u8fd9\u79cd ",(0,a.kt)("strong",{parentName:"p"},"Key-Value")," \u65b9\u5f0f\u7ec4\u7ec7\u548c\u83b7\u53d6\u914d\u7f6e\uff0c\u4f8b\u5982\uff1a "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u201c\u63a7\u5236\u529f\u80fd #124 \u5173\u95ed\u6216\u5f00\u542f\u201d"),"    "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u201c\u5c06 'name' \u6587\u672c\u6846\u7684\u5b57\u7b26\u5927\u5c0f\u9650\u5236\u4e3a 256 \u4e2a\u5b57\u7b26\u201d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u201credis \u7684\u8fde\u63a5\u5730\u5740\u662f '172.48.1.4:6379' \u201d"))),(0,a.kt)("p",null,"\u4e0e\u4e0a\u8ff0\u7c7b\u4f3c\u7684\u4f7f\u7528\u65b9\u5f0f\u5df2\u7ecf\u5728\u529f\u80fd\u5f00\u5173\u3001\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u3001\u5feb\u901f\u9650\u6d41\u964d\u7ea7\u7b49\u9886\u57df\u88ab\u5e7f\u6cdb\u5e94\u7528\u3002\n\u4e0a\u8ff0\u57fa\u4e8e\u4e00\u5bf9\u4e00\u7684 Key-Value \u6620\u5c04\u914d\u7f6e\u867d\u7136\u5df2\u7ecf\u8db3\u591f\u7075\u6d3b\u901a\u7528\uff0c\u4f46\u4ecd\u7136\u96be\u4ee5\u652f\u6301\u4e00\u4e9b\u8f83\u590d\u6742\u7684\u529f\u80fd\u573a\u666f\u3002\u6bd4\u5982\u6211\u4eec\u5f88\u96be\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Key-Value")," \u914d\u7f6e\u4e2d\u4f53\u73b0\u5982\u4e0b\u573a\u666f\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u573a\u666f1\uff1a\u201c\u53ea\u6709\u4ece\u5317\u4eac\u8bbf\u95ee\u7684\u4e14'\u7ea7\u522b'\u662f VIP \u7684\u7528\u6237\u542f\u7528\u529f\u80fd #124\u201d"),"              "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u573a\u666f2\uff1a\u201c\u53ea\u6709\u7528\u6237 APP \u7248\u672c\u5927\u4e8e 1.0.1 \u4e14\u5728\u6bcf\u5929 18:00~20:00 \u65f6\u5f00\u542f\u8fd0\u8425\u6d3b\u52a8\uff0c\u5426\u5219\u5173\u95ed\u6d3b\u52a8\u5e76\u663e\u793a\u2018\u6d3b\u52a8\u5df2\u7ed3\u675f\u2019\u7684\u63d0\u793a\u4fe1\u606f\u201d"),"                             ")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u573a\u666f\u7684\u7279\u70b9\u662f\u5e94\u7528\u7a0b\u5e8f\u5728\u8fd0\u884c\u65f6\u9700\u8981\u6839\u636e\u4e0a\u4e0b\u6587\u4fe1\u606f\u8ba1\u7b97\u51fa\u76f8\u5e94\u7684\u503c\uff0c\u5e76\u4e14\u5f53\u4e0a\u4e0b\u6587\uff08\u9700\u6c42\uff09\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4f8b\u5982\u8c03\u6574\u573a\u666f\u4e00\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u201c\u53ea\u6709\u5317\u4eac10%\u7684\u7528\u6237\u542f\u7528\u529f\u80fd  #124 \u201d")," \uff0c\u5728\u4e0d\u66f4\u6539\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u5f88\u96be\u505a\u5230\u5feb\u901f\u652f\u6301\u3002\u8fd9\u4e5f\u662f FeatureProbe \u4f5c\u4e3a\u529f\u80fd\u7ba1\u7406\u670d\u52a1\u4e0e\u4f20\u7edf ",(0,a.kt)("strong",{parentName:"p"},"Key-Value")," \u914d\u7f6e\u4e2d\u5fc3\u6700\u5927\u7684\u533a\u522b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u5b9a\u4e49"),(0,a.kt)("th",{parentName:"tr",align:null},"SDK"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7279\u70b9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u4e2d\u5fc3"),(0,a.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6839\u636e key \u83b7\u53d6 value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null," ",(0,a.kt)("li",null,"\u96be\u4ee5\u5728\u914d\u7f6e\u4e2d\u4f53\u73b0\u4e1a\u52a1\u903b\u8f91 ")," ",(0,a.kt)("br",null)," ",(0,a.kt)("li",null,"\u96be\u4ee5\u901a\u8fc7\u53d8\u66f4\u914d\u7f6e\u6765\u5feb\u901f\u8c03\u4e1a\u52a1\u903b\u8f91 ")," "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u7ba1\u7406\u670d\u52a1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7531\u4e00\u7ec4\u8868\u8fbe\u4e1a\u52a1\u8bed\u4e49\u7684 if / else \u903b\u8f91\u7ec4\u6210"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6839\u636e key + user \u5c5e\u6027\uff08\u4e0a\u4e0b\u6587\uff09\u6765\u6267\u884c\u914d\u7f6e\u4e2d\u5b9a\u4e49\u7684\u903b\u8f91\u5e76\u5224\u5b9a\u51fa\u8fd4\u56de\u7684 value"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null," ",(0,a.kt)("li",null,"\u914d\u7f6e\u4e2d\u4f53\u73b0\u4e1a\u52a1\u903b\u8f91")," ",(0,a.kt)("br",null)," ",(0,a.kt)("li",null," \u53d8\u66f4\u914d\u7f6e\u89c4\u5219\u5feb\u901f\u8c03\u6574\u4e1a\u52a1\u903b\u8f91 ")," "))))),(0,a.kt)("p",null,"\u4e0b\u9762\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\u6f14\u793a\u529f\u80fd\u7ba1\u7406\u670d\u52a1\u7684\u914d\u7f6e\u5b9a\u4e49\u4ee5\u53ca\u5982\u4f55\u7528\u4ee3\u7801\u83b7\u53d6\u76f8\u5e94\u7684\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// feature management config:\n"enable_feature_124" : {\n  if user ("city" equals "beijing" and "level" equals "vip") : true,\n  else                                                       : false\n}\n\n// sdk code:\nsdkClient.BoolValue("enable_feature_124", {city: "beijing", level: "vip"}) => true\nsdkClient.BoolValue("enable_feature_124", {city: "shanghai", level: "vip"}) => false\n')),(0,a.kt)("h3",{id:"\u4e8c\u6e10\u8fdb\u5f0f\u53d1\u5e03"},"\u4e8c\u3001\u6e10\u8fdb\u5f0f\u53d1\u5e03"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u793a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 FeatureProbe\uff0c\u6bd4\u5982\u5f53\u6211\u4eec\u9700\u8981\u53d1\u5e03\u4e00\u4e2a\u65b0\u529f\u80fd\u65f6\uff0c\u4e3a\u4e86\u907f\u514d\u65b0\u529f\u80fd\u7684\u4ee3\u7801\u5bf9\u7ebf\u4e0a\u4ea7\u751f\u5f71\u54cd\uff0c\u6211\u4eec\u4f1a\u4f7f\u7528\u529f\u80fd\u5f00\u5173 ",(0,a.kt)("strong",{parentName:"p"},"\uff08Feature toggles\uff09")," \u6765\u63a7\u5236\u65b0\u529f\u80fd\u7684\u4ee3\u7801\u53ea\u80fd\u88ab\u67d0\u4e2a\u57ce\u5e02\u7684\u67d0\u4e9b\u7528\u6237\u8bbf\u95ee\u5230\u3002\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'user := featureprobe.NewUser(reuqest.userid)\n                    .With("city", request.city)\n                    .With("username": request.username)\n\nenableFeature123 := fpClient.BoolValue("enable_feature_123", user, false)\nif enableFeature123 {\n  // new code: use the feature\n} else {\n  // old code: don\'t use the feature\n}\n')),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u5c06\u65b0\u529f\u80fd\u4ee3\u7801\u90e8\u7f72\u540e\uff0c\u5bf9\u5e94\u7528\u7a0b\u5e8f\u51e0\u4e4e\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\uff0c\u56e0\u4e3a\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u65b0\u529f\u80fd\u7684\u4ee3\u7801\u90fd\u88ab\u529f\u80fd\u5f00\u5173\u63a7\u5236\uff0c\u540c\u65f6\u662f\u5426\u542f\u7528\u65b0\u529f\u80fd\u7684\u5f00\u5173\u521d\u59cb\u9ed8\u8ba4\u503c\u4e3a false\u3002\u4e0b\u9762\u4e3a\u8be5\u529f\u80fd\u5f00\u5173\u914d\u7f6e\u89c4\u5219\uff1a\n",(0,a.kt)("strong",{parentName:"p"},"FeatuteProbe toggle rules")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"enable_feature_123": {\n      "defaultServe": {\n        "select": 1   // Return "variations[1]" by default => false\n      },\n      "variations": [\n        true,\n        false\n      ]\n}\n')),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u8981\u5bf9\u65b0\u529f\u80fd\u4ee3\u7801\u7ebf\u4e0a\u9a8c\u8bc1\u65f6\uff0c\u8fd9\u65f6\u5019\u5e0c\u671b ",(0,a.kt)("strong",{parentName:"p"},"\u201c\u57ce\u5e02\u4e3a \u5317\u4eac\uff0c\u4e14\u7528\u6237\u540d\u4e3a 'test' \u6216 'admin' \u7684\u7279\u5b9a\u6d4b\u8bd5\u7528\u6237\u624d\u80fd\u4f7f\u7528\u8be5\u529f\u80fd\u201d"),",\u4ee5\u4fbf\u4e8e\u8fd9\u4e9b\u7528\u6237\u8fdb\u884c\u529f\u80fd\u9a8c\u8bc1\u3002\u6b64\u65f6\u6211\u4eec\u4f1a\u5bf9\u529f\u80fd\u5f00\u5173\u914d\u7f6e\u8fdb\u884c\u4fee\u6539\uff0c\u6700\u7ec8\u751f\u6210\u7684\u89c4\u5219\u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff08\u5bf9\u5e94\u89c4\u5219\u6267\u884c\u903b\u8f91\u4e3a\u53f3\u8fb9\u6ce8\u91ca\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "enable_feature_123":{ \n        "rules":[\n            {\n                "conditions":[ // if city in ["beijing"] \n                    {\n                        "type":"string",\n                        "subject":"city",\n                        "predicate":"is one of",\n                        "objects":[\n                            "beijing"\n                        ]\n                    }, // AND\n                    {\n                        "type":"string", // username in ["test", "admin"]\n                        "subject":"username",\n                        "predicate":"is one of",\n                        "objects":[\n                            "test", "admin"\n                        ]\n                    }\n                ]\n                "serve":{\n                    "select":0 // return "variations[0]"  => true\n                },\n            }\n        ]\n         "defaultServe":{ // else\n            "select":1 // return "variations[1]"  => false\n        }, \n    },\n    "variations": [\n        true,\n        false\n      ]\n}\n')),(0,a.kt)("p",null,"\u8be5\u914d\u7f6e\u66f4\u65b0\u540e\uff0c\u4f1a\u901a\u8fc7\u6211\u4eec\u7684\u6570\u636e\u5206\u53d1\u670d\u52a1 ",(0,a.kt)("strong",{parentName:"p"},"\uff08FeatureProbe Server\uff09")," \u5c06\u914d\u7f6e\u4e0b\u53d1\u5230\u6240\u6709\u9700\u8981\u4f7f\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\u5f53\u5e94\u7528\u7a0b\u5e8f\u6bcf\u6b21\u901a\u8fc7 SDK \u83b7\u53d6\u8fd4\u56de\u503c\u65f6\uff0c\u5b83\u5c06\u6839\u636e ",(0,a.kt)("strong",{parentName:"p"},"key + user")," \u5c5e\u6027\u4ee5\u53ca\u6700\u65b0\u914d\u7f6e\u89c4\u5219\u6240\u5b9a\u4e49\u7684\u903b\u8f91\u6765\u8ba1\u7b97\u76f8\u5e94\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u5f53\u6d4b\u8bd5\u7528\u6237 ",(0,a.kt)("strong",{parentName:"p"},'"test" \u5728 \u201c\u5317\u4eac\u201d')," \u6d4b\u8bd5\u8be5\u65b0\u529f\u80fd\u53d1\u73b0\u95ee\u9898\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5c06\u5f00\u5173\u8fd4\u56de\u503c\u66f4\u65b0\u56de ",(0,a.kt)("strong",{parentName:"p"},"false")," \u5feb\u901f\u5173\u95ed\u65b0\u529f\u80fd\u7684\u4f7f\u7528\u3002\u6574\u4e2a\u8fc7\u7a0b\u4e0d\u6d89\u53ca\u5230\u4efb\u4f55\u4ee3\u7801\u7684\u53d8\u66f4\uff0c\u5373\u4fbf\u5c06\u9700\u6c42\u8c03\u6574\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u201c\u53ea\u6709\u5317\u4eac10%\u7684\u7528\u6237\u80fd\u8bbf\u95ee\u8be5\u529f\u80fd\u201d"),"\uff0c\u4e5f\u4ec5\u9700\u5728\u9875\u9762\u5c31\u80fd\u5b8c\u6210\u903b\u8f91\u7684\u53d8\u66f4\u64cd\u4f5c\uff0c\u7136\u540e\u5c06\u65b0\u7684\u914d\u7f6e\u89c4\u5219\u53d1\u5e03\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5373\u53ef\uff0c\u901a\u5e38\u6574\u4e2a\u8fc7\u7a0b\u53ea\u9700\u8981\u51e0\u79d2\u949f\u3002"),(0,a.kt)("p",null,"\u5f53\u529f\u80fd\u5f00\u5173\u88ab\u5f00\u542f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6570\u636e\u76d1\u63a7\u6216\u96c6\u6210\u6d4b\u8bd5\u6765\u89c2\u5bdf\u65b0\u529f\u80fd\u5bf9\u5e94\u7528\u7a0b\u5e8f\u9020\u6210\u5f71\u54cd\u3002\u5f53\u9a8c\u8bc1\u7b26\u5408\u9884\u671f\u7684\u60c5\u51b5\u540e\uff0c\u53ef\u5c31\u518d\u8fdb\u4e00\u6b65\u4fee\u6539\u89c4\u5219\u914d\u7f6e\u6765\u8ba9\u66f4\u591a\u7684\u7528\u6237\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u5148\u8ba9\u67d0\u4e2a\u57ce\u5e02\u6240\u6709\u4eba\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u63a5\u7740\u7ee7\u7eed\u5c06\u7528\u6237\u6269\u5c55\u5230\u591a\u4e2a\u57ce\u5e02\uff0c\u5e76\u6700\u7ec8\u6269\u5c55\u6240\u6709\u7528\u6237\u3002\u5728\u6574\u4e2a\u653e\u91cf\u8fc7\u7a0b\u4e2d\uff0c\u68c0\u6d4b\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u90fd\u53ef\u4ee5\u7acb\u5373\u66f4\u65b0\u89c4\u5219\u6216\u5173\u95ed\u5f00\u5173\u6765\u505a\u5230\u5feb\u901f\u56de\u6eda\u3002\u901a\u8fc7\u8fd9\u79cd\u6e10\u8fdb\u5f0f\u529f\u80fd\u53d1\u5e03 ",(0,a.kt)("strong",{parentName:"p"},"\uff08Progressive Delivery\uff09")," \u7684\u65b9\u5f0f\uff0c\u80fd\u591f\u5e2e\u52a9\u6211\u4eec\u5b9e\u73b0\u5feb\u901f\u3001\u5b89\u5168\u5730\u8fdb\u884c\u7ebf\u4e0a\u53d8\u66f4\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u6e10\u8fdb\u5f0f\u529f\u80fd\u53d1\u5e03\u53ea\u662f FeatureProbe \u7684\u4f7f\u7528\u573a\u666f\u4e4b\u4e00\uff0c\u5176\u5b83\u57fa\u4e8e\u89c4\u5219\u7684\u914d\u7f6e\u7684\u573a\u666f\u4e5f\u90fd\u80fd\u5f88\u597d\u5730\u652f\u6301\uff0c\u5982\u6309\u8bbf\u95ee\u6d41\u91cf\u653e\u91cf\u3001\u57fa\u4e8e\u65f6\u95f4\u89c4\u5219\u7684\u8fd0\u8425\u6d3b\u52a8\u63a7\u5236\u3001A/B\u5b9e\u9a8c\u53ca\u914d\u7f6e\u4e2d\u5fc3\u7b49\u573a\u666f\u3002"),(0,a.kt)("h3",{id:"\u4e09\u5feb\u901f\u8bd5\u7528"},"\u4e09\u3001\u5feb\u901f\u8bd5\u7528"),(0,a.kt)("p",null,"\u76ee\u524d FeatureProbe \u4f7f\u7528 Apache 2.0 License \u534f\u8bae\u5df2\u7ecf\u5b8c\u5168\u5f00\u6e90\u3002\u4f60\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FeatureProbe"},"GitHub")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/featureprobe"},"Gitee")," \u4e0a\u641c\u7d22 FeatureProbe \u83b7\u53d6\u5230\u6240\u6709\u4ee3\u7801\uff0c\u4e3a\u4e86\u80fd\u591f\u8ba9\u5927\u5bb6\u5feb\u901f\u4f53\u9a8c\u5b8c\u6574\u7684\u529f\u80fd\u670d\u52a1\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://featureprobe.io/demo"},"\u5728\u7ebf\u4f53\u9a8c\u73af\u5883"),"\u3002"),(0,a.kt)("h3",{id:"\u56db\u603b\u7ed3"},"\u56db\u3001\u603b\u7ed3"),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 FeatureProbe \u5feb\u901f\u66f4\u65b0\u8fed\u4ee3\u4ea7\u54c1\u529f\u80fd\uff0c\u5e76\u4e14\u901a\u8fc7\u4e00\u4e2a\u5b9e\u9645\u6848\u4f8b\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u5b83\u8fdb\u884c\u6e10\u8fdb\u5f0f\u7684\u529f\u80fd\u53d1\u5e03\uff0c\u4ee5\u964d\u4f4e\u7ebf\u4e0a\u53d8\u66f4\u7684\u98ce\u9669\u3002\u5728\u4e0b\u4e00\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd ",(0,a.kt)("strong",{parentName:"p"},"\u201cFeatureProbe\u7684\u67b6\u6784\u8bbe\u8ba1\u548c\u4e3b\u8981\u7279\u70b9\u201d"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u529f\u80fd\u5f00\u5173\u7ba1\u7406\u611f\u5174\u8da3\uff0c\u6b22\u8fce\u52a0\u5165\u5230\u6211\u4eec\u7684\u5f00\u6e90\u9879\u76ee\u4e2d\u6765\uff0c\u5171\u540c\u6765\u63a8\u52a8\u8f6f\u4ef6\u5f00\u53d1\u884c\u4e1a\u7684\u6548\u80fd\u3002\u540c\u65f6\u4e5f\u53ef\u4ee5\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\u52a0\u5165\u6211\u4eec\u7684\u5f00\u6e90\u6c9f\u901a\u7fa4\u5927\u5bb6\u4e00\u8d77\u6765\u6c9f\u901a\u63a2\u8ba8\u3002"),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/20610466/184835902-4a466b69-6f53-4898-850e-ea6e5548d015.png",width:"200",height:"300"}),(0,a.kt)("p",null,"\u5982\u4ee5\u4e0a\u4e8c\u7ef4\u7801\u5931\u6548\uff0c\u53ef\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\uff0c\u6dfb\u52a0\u6211\u4eec\u7684\u5de5\u4f5c\u4eba\u5458\u3002"),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/20610466/184836044-fc5396aa-8ac9-4a95-b8eb-70050caa686f.png",width:"220",height:"200"}))}c.isMDXComponent=!0}}]);