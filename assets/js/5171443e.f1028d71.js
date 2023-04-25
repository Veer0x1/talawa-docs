"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[82170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"talawa-api/modules/resolvers_Query_postsByOrganizationConnection",id:"talawa-api/modules/resolvers_Query_postsByOrganizationConnection",title:"resolvers_Query_postsByOrganizationConnection",description:"talawa-api / Exports / resolvers/Query/postsByOrganizationConnection",source:"@site/docs/talawa-api/modules/resolvers_Query_postsByOrganizationConnection.md",sourceDirName:"talawa-api/modules",slug:"/talawa-api/modules/resolvers_Query_postsByOrganizationConnection",permalink:"/docs/talawa-api/modules/resolvers_Query_postsByOrganizationConnection",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api/modules/resolvers_Query_postsByOrganizationConnection.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"postsByOrganizationConnection",id:"postsbyorganizationconnection",level:3},{value:"Defined in",id:"defined-in",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/"},"talawa-api")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules"},"Exports")," / resolvers/Query/postsByOrganizationConnection"),(0,a.kt)("h1",{id:"module-resolversquerypostsbyorganizationconnection"},"Module: resolvers/Query/postsByOrganizationConnection"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/talawa-api/modules/resolvers_Query_postsByOrganizationConnection#postsbyorganizationconnection"},"postsByOrganizationConnection"))),(0,a.kt)("h2",{id:"variables-1"},"Variables"),(0,a.kt)("h3",{id:"postsbyorganizationconnection"},"postsByOrganizationConnection"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"postsByOrganizationConnection"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules/types_generatedGraphQLTypes#queryresolvers"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryResolvers")),"[",(0,a.kt)("inlineCode",{parentName:"p"},'"postsByOrganizationConnection"'),"]"),(0,a.kt)("p",null,"This query will retrieve from the database a list of posts\nin the organisation under the specified limit for the specified page in the pagination."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,"An object holds the data required to execute the query.\n",(0,a.kt)("inlineCode",{parentName:"p"},"args.first")," specifies the number of members to retrieve, and ",(0,a.kt)("inlineCode",{parentName:"p"},"args.after")," specifies\nthe unique identification for each item in the returned list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Connection in graphQL means pagination,\nlearn more about Connection ",(0,a.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"here"),"."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"src/resolvers/Query/postsByOrganizationConnection.ts:21"))}d.isMDXComponent=!0}}]);