(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(177)),o={id:"expectations",title:"Expectations"},c={unversionedId:"talawa-api/expectations",id:"talawa-api/expectations",isDocsHomePage:!1,title:"Expectations",description:"API Primary Expectations",source:"@site/docs/talawa-api/expectations.md",slug:"/talawa-api/expectations",permalink:"/talawa-docs/docs/talawa-api/expectations",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/talawa-api/expectations.md",version:"current",sidebar:"someSidebar",previous:{title:"Functionality",permalink:"/talawa-docs/docs/talawa-api/functionality"},next:{title:"Introduction",permalink:"/talawa-docs/docs/talawa-admin/talawa-admin-introduction"}},l=[{value:"API Primary Expectations",id:"api-primary-expectations",children:[]},{value:"TypeScript Rewrite",id:"typescript-rewrite",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"api-primary-expectations"},"API Primary Expectations"),Object(i.b)("p",null,"The API is expected to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Centralize all functionality, meaning all applications must see the api as the source of truth."),Object(i.b)("li",{parentName:"ol"},"Allow a secure connection to both frontend interfaces ie: Admin console and Mobile application using industry standard API authorization."),Object(i.b)("li",{parentName:"ol"},"Allow support for multiple file systems via centralized configuration eg: server storage, AWS s3 etc.."),Object(i.b)("li",{parentName:"ol"},"Allow centralized configuration for all external service dependencies such as the email service and the database."),Object(i.b)("li",{parentName:"ol"},"Support multi tenancy at its core")),Object(i.b)("h2",{id:"typescript-rewrite"},"TypeScript Rewrite"),Object(i.b)("p",null,"The current code base for talawa api uses Node.js. This poses several problems with scalability and stability. Firstly the codebase is written in javascript, thus adding new features will make it unstable and more prone to breaks. Moving to Typescript will bring a level of stability and better developer experience that\u2019s not currently in the API. We recommend using NestJS ",Object(i.b)("a",{parentName:"p",href:"https://nestjs.com/"},"https://nestjs.com/"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Nest (NestJS) is a framework for building efficient, scalable Node.js server side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).")))}p.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);