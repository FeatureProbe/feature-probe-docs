"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[182],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="General Scenes",s={unversionedId:"introduction/scene",id:"introduction/scene",title:"General Scenes",description:"Common usage scenarios",source:"@site/docs/introduction/scene.md",sourceDirName:"introduction",slug:"/introduction/scene",permalink:"/feature-probe-docs/introduction/scene",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/docs/introduction/scene.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"What is Feature Management",permalink:"/feature-probe-docs/"},next:{title:"Core Concepts",permalink:"/feature-probe-docs/introduction/concept"}},l={},c=[{value:"Common usage scenarios",id:"common-usage-scenarios",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"general-scenes"},"General Scenes"),(0,a.kt)("h3",{id:"common-usage-scenarios"},"Common usage scenarios"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"feature release (add new features or overall version upgrade, in the case of uncertain impact, can be opened to only a small number of users for a quick trial and error, and then gradually released in the case of good feedback, until the full amount of release."),(0,a.kt)("li",{parentName:"ol"},"operation activities (online operation activities in different periods, the pattern is basically fixed, and only a few variables need to be modified each time)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Example: Operators want to launch the "My First Project" project under the commodity spike activities, need to set different commodity prices according to different cities, in the past, it is necessary to write in the code through the development, once the price needs to change, the developers have to modify the online commodity prices in the code, after the audit deployment release and other operations, in order to take effect, use With FeatureProbe\'s feature toggle, you only need to modify the "price" by the operation staff, and then it can be released in one second.'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Process Description"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The operator adds a new project "My First Project" on FeatureProbe and creates a toggle named "Promotional Campaign" in the "online" environment of the project:\n',(0,a.kt)("img",{alt:"commodity spike activity screenshot",src:r(5817).Z,width:"2356",height:"1424"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The developer references the FeatureProbe sdk in the code, configures the "online" key, associates the key of the toggle (promotion_activity), and sets the number type variations (user price hierarchy) corresponding to the defined parameter city'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'FPUser user = new FPUser(user_id);\nuser.with("city", city_name);\ndouble discount = fpClient.numberValue("promotion_activity", user, 1.0);\ndiscountSetTo(discount);\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'When everything is ready, the operator directly "enables" the "Promotional Campaign" toggle and the configuration takes effect immediately')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the price needs to be changed, the operator just needs to change the price in the variations and distribute it to the corresponding people."))))))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"service degradation plan (such as dependent back-end service access failure can cut the service toggle to get the historical data version from the cache service)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Example: Generally when the dependent commodity inventory service finds a failure, the developer is required to downgrade by modifying the code, so using FeatureProbe, once the dependent commodity inventory service finds a failure, it can quickly downgrade to get the equivalent commodity inventory data from the cache."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Process Description"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The developer creates a toggle called "Service Degrade" in the "online" environment of the project "My First Project", and the toggle is configured as shown in the following figure:\n',(0,a.kt)("img",{alt:"storage service fallback screenshot",src:r(4161).Z,width:"2358",height:"840"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The developer associates the key of the toggle (service_degrade) in the code to set the boolean type variations (whether to turn on degrade)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'FPUser user = new FPUser(user_id);\nboolean fallback = fpClient.boolValue("service_degrade", user, false);\nif (fallback) {\n    // Do something.\n} else {\n    // Do normal process.\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When the dependent inventory service fails, the inventory service can be quickly downgraded to use cached non-real-time inventory data to avoid impact on users."))))))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"A/B experiments (for the same board, several different solutions were designed to see which one is more popular)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Example 1: The color of a platform's payment button wanted to change from red to green, and the product king did not lack to determine which color worked better, so he wanted to use FeatureProbe's feature toggle to do an experiment for the two colors on the users in Paris to see which color had a higher purchase rate in the end"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Process Description"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The operator created a toggle called "Button Color AB Test" in the "online" environment of the project "My First Project", and the toggle configuration is shown below:\n',(0,a.kt)("img",{alt:"AB test screenshot",src:r(6695).Z,width:"2356",height:"1264"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The developer associates the key of the toggle (color_ab_test) in the code and sets the variations of the string type (color classification) corresponding to the well-defined parameter city"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'FPUser user = new FPUser(user_id);\nuser.with("city", city_name);\nString color = fpClient.stringValue("color_ab_test", user, "red");\nsetButtonColor(color);\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'After everything is ready, the operator directly "enables" the "Button Color AB Test" toggle, and the configuration content takes effect immediately')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"By looking at the experimental data, the product king concluded that the purchase rate would be higher if the payment button was green, so the full amount of users opened to green"))))))))}d.isMDXComponent=!0},6695:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/en-Color_ab_test-4b40eeb1d491f13ab2688965064af7eb.png"},5817:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/en-Commodity_spike_activity-b07cd1e3f754045f3959bfa0bf1a1aef.png"},4161:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/en-Store_service_fallback-0f792e69134cbbeaf4f9eb3fb825d2a7.png"}}]);