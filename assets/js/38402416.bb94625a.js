"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[29638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),y=a,g=u["".concat(s,".").concat(y)]||u[y]||c[y]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},61980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"talawa-api/modules/resolvers_Query_getDonationByOrgId",id:"talawa-api/modules/resolvers_Query_getDonationByOrgId",title:"resolvers_Query_getDonationByOrgId",description:"talawa-api / Exports / resolvers/Query/getDonationByOrgId",source:"@site/docs/talawa-api/modules/resolvers_Query_getDonationByOrgId.md",sourceDirName:"talawa-api/modules",slug:"/talawa-api/modules/resolvers_Query_getDonationByOrgId",permalink:"/docs/talawa-api/modules/resolvers_Query_getDonationByOrgId",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api/modules/resolvers_Query_getDonationByOrgId.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"getDonationByOrgId",id:"getdonationbyorgid",level:3},{value:"Defined in",id:"defined-in",level:4}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/"},"talawa-api")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules"},"Exports")," / resolvers/Query/getDonationByOrgId"),(0,a.kt)("h1",{id:"module-resolversquerygetdonationbyorgid"},"Module: resolvers/Query/getDonationByOrgId"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/talawa-api/modules/resolvers_Query_getDonationByOrgId#getdonationbyorgid"},"getDonationByOrgId"))),(0,a.kt)("h2",{id:"variables-1"},"Variables"),(0,a.kt)("h3",{id:"getdonationbyorgid"},"getDonationByOrgId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"getDonationByOrgId"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules/types_generatedGraphQLTypes#queryresolvers"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryResolvers")),"[",(0,a.kt)("inlineCode",{parentName:"p"},'"getDonationByOrgId"'),"]"),(0,a.kt)("p",null,"This query fetch the donation as a transaction for an organization from database."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,"An object that contains ",(0,a.kt)("inlineCode",{parentName:"p"},"orgId")," of the Organization."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"src/resolvers/Query/getDonationByOrgId.ts:10"))}c.isMDXComponent=!0}}]);