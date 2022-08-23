"use strict";(self.webpackChunkfeature_probe_docs=self.webpackChunkfeature_probe_docs||[]).push([[814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),g=a,f=d["".concat(u,".").concat(g)]||d[g]||c[g]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},s="Server SDK Rust",l={unversionedId:"sdk/Server-Side SDKs/rust-sdk",id:"sdk/Server-Side SDKs/rust-sdk",title:"Server SDK Rust",description:"Try Out Demo Code",source:"@site/docs/sdk/Server-Side SDKs/rust-sdk.md",sourceDirName:"sdk/Server-Side SDKs",slug:"/sdk/Server-Side SDKs/rust-sdk",permalink:"/sdk/Server-Side SDKs/rust-sdk",draft:!1,editUrl:"https://github.com/FeatureProbe/feature-probe-docs/tree/main/docs/sdk/Server-Side SDKs/rust-sdk.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Server SDK Golang",permalink:"/sdk/Server-Side SDKs/golang-sdk"},next:{title:"Best Practices",permalink:"/category/best-practices"}},u={},i=[{value:"Try Out Demo Code",id:"try-out-demo-code",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Step 1. Install the Rust SDK",id:"step-1-install-the-rust-sdk",level:3},{value:"Step 2. Create a FeatureProbe instance",id:"step-2-create-a-featureprobe-instance",level:3},{value:"Step 3. Use the feature toggle",id:"step-3-use-the-feature-toggle",level:3},{value:"Step 4. Unit Testing (Optional)",id:"step-4-unit-testing-optional",level:3},{value:"Testing SDK",id:"testing-sdk",level:2}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-sdk-rust"},"Server SDK Rust"),(0,a.kt)("h2",{id:"try-out-demo-code"},"Try Out Demo Code"),(0,a.kt)("p",null,"We provide a runnable demo code for you to understand how FeatureProbe SDK is used."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start FeatureProbe Service with docker composer. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/FeatureProbe#1-starting-featureprobe-service-with-docker-compose"},"How to")),(0,a.kt)("li",{parentName:"ol"},"Download this repo and run the demo program:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/FeatureProbe/server-sdk-rust.git\ncd server-sdk-rust\ncargo run --example demo\n"))),(0,a.kt)("li",{parentName:"ol"},"Find the Demo code in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/FeatureProbe/server-sdk-rust/tree/main/examples"},"examples"),",\ndo some change and run the program again.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example demo\n")))),(0,a.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,a.kt)("p",null,"In this guide we explain how to use feature toggles in a Rust application using FeatureProbe."),(0,a.kt)("h3",{id:"step-1-install-the-rust-sdk"},"Step 1. Install the Rust SDK"),(0,a.kt)("p",null,"First, install the FeatureProbe SDK as a dependency in your application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cargo install cargo-edit\ncargo add feature-probe-server-sdk-rs --allow-prerelease\n")),(0,a.kt)("p",null,"Next, import the FeatureProbe SDK in your application code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use feature_probe_server_sdk::{FPConfig, FPUser, FeatureProbe};\n")),(0,a.kt)("h3",{id:"step-2-create-a-featureprobe-instance"},"Step 2. Create a FeatureProbe instance"),(0,a.kt)("p",null,"After you install and import the SDK, create a single, shared instance of the FeatureProbe sdk."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let remote_url = "http://localhost:4007";\n\n    let config = FPConfig {\n        remote_url: remote_url.to_owned(),\n        server_sdk_key: args.server_sdk_key.to_owned(),\n        refresh_interval: Duration::from_secs(5),\n        wait_first_resp: true,\n    };\n\n    let fp = match FeatureProbe::new(config) {\n        Ok(fp) => fp,\n        Err(e) => {\n            tracing::error!("{:?}", e);\n            return;\n        }\n    };\n}\n')),(0,a.kt)("h3",{id:"step-3-use-the-feature-toggle"},"Step 3. Use the feature toggle"),(0,a.kt)("p",null,"You can use sdk to check which variation a particular user will receive for a given feature flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let user = FPUser::new("user@company.com").with("name", "bob");\nlet show_feature = fp.bool_value("your.toggle.key", &user, false);\n\nif show_feature {\n    # application code to show the feature\n} else {\n    # the code to run if the feature is off\n}\n')),(0,a.kt)("h3",{id:"step-4-unit-testing-optional"},"Step 4. Unit Testing (Optional)"),(0,a.kt)("p",null,"You could do unit testing for each variation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let fp = FeatureProbe::new_for_test("toggle_1", Value::Bool(false));\nlet u = FPUser::new("key");\nassert_eq!(fp.bool_value("toggle_1", &u, true), false);\n\nlet mut toggles: HashMap<String, Value> = HashMap::new();\ntoggles.insert("toggle_2".to_owned(), json!(12.5));\ntoggles.insert("toggle_3".to_owned(), json!("value"));\nlet fp = FeatureProbe::new_for_tests(toggles);\nassert_eq!(fp.number_value("toggle_2", &u, 20.0), 12.5);\nassert_eq!(fp.string_value("toggle_3", &u, "val".to_owned()), "value");\n')),(0,a.kt)("h2",{id:"testing-sdk"},"Testing SDK"),(0,a.kt)("p",null,"We have unified integration tests for all our SDKs. Integration test cases are added as submodules for each SDK repo. So\nbe sure to pull submodules first to get the latest integration tests before running tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git pull --recurse-submodules\ncargo test\n")))}c.isMDXComponent=!0}}]);