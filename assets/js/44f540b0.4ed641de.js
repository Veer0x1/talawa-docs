"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[74063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,m=u["".concat(i,".").concat(y)]||u[y]||p[y]||s;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},46961:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>y});var n=r(87462),a=r(67294),s=r(3905);const o={id:"registrants-by-event",title:"registrantsByEvent",hide_table_of_contents:!1},l=void 0,i={unversionedId:"schema/queries/registrants-by-event",id:"schema/queries/registrants-by-event",title:"registrantsByEvent",description:"No description",source:"@site/docs/schema/queries/registrants-by-event.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/registrants-by-event",permalink:"/docs/schema/queries/registrants-by-event",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/registrants-by-event.mdx",tags:[],version:"current",frontMatter:{id:"registrants-by-event",title:"registrantsByEvent",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"registeredEventsByUser",permalink:"/docs/schema/queries/registered-events-by-user"},next:{title:"tasksByEvent",permalink:"/docs/schema/queries/tasks-by-event"}},c={},d=()=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(a.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>registrantsByEvent.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registrantsbyeventbidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],m=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:l=!1}=e;const[i,c]=(0,a.useState)(l);return(0,s.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&o)},g={Bullet:d,SpecifiedBy:u,Badge:p,toc:y,Details:m},f="wrapper";function b(e){let{components:t,...r}=e;return(0,s.kt)(f,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"registrantsByEvent(\n  id: ID!\n): [User]\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-registrantsbyeventbidbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"registrantsByEvent.",(0,s.kt)("b",null,"id"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"user-"},(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}b.isMDXComponent=!0}}]);