"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[24539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,b=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return n?o.createElement(b,i(i({ref:t},d),{},{components:n})):o.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26986:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=n(67294),a=n(3905);const i={id:"organizations-member-connection",title:"organizationsMemberConnection",hide_table_of_contents:!1},c=void 0,s={unversionedId:"schema/queries/organizations-member-connection",id:"schema/queries/organizations-member-connection",title:"organizationsMemberConnection",description:"No description",source:"@site/docs/schema/queries/organizations-member-connection.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/organizations-member-connection",permalink:"/docs/schema/queries/organizations-member-connection",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/organizations-member-connection.mdx",tags:[],version:"current",frontMatter:{id:"organizations-member-connection",title:"organizationsMemberConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"organizationsConnection",permalink:"/docs/schema/queries/organizations-connection"},next:{title:"organizations",permalink:"/docs/schema/queries/organizations"}},l={},d=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>organizationsMemberConnection.<b>orgId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsmemberconnectionborgidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>organizationsMemberConnection.<b>where</b></code><Bullet /><code>UserWhereInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-organizationsmemberconnectionbwherebcodeuserwhereinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>organizationsMemberConnection.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsmemberconnectionbfirstbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>organizationsMemberConnection.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsmemberconnectionbskipbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>organizationsMemberConnection.<b>orderBy</b></code><Bullet /><code>UserOrderByInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-organizationsmemberconnectionborderbybcodeuserorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>UserConnection</code> <Badge class="secondary" text="object"/>',id:"userconnection-",level:4}],b=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:c=!1}=e;const[s,l]=(0,r.useState)(c);return(0,a.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},g={Bullet:d,SpecifiedBy:m,Badge:u,toc:p,Details:b},y="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"organizationsMemberConnection(\n  orgId: ID!\n  where: UserWhereInput\n  first: Int\n  skip: Int\n  orderBy: UserOrderByInput\n): UserConnection!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-organizationsmemberconnectionborgidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"organizationsMemberConnection.",(0,a.kt)("b",null,"orgId"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-organizationsmemberconnectionbwherebcodeuserwhereinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"organizationsMemberConnection.",(0,a.kt)("b",null,"where"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/inputs/user-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UserWhereInput"))," ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-organizationsmemberconnectionbfirstbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"organizationsMemberConnection.",(0,a.kt)("b",null,"first"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-organizationsmemberconnectionbskipbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"organizationsMemberConnection.",(0,a.kt)("b",null,"skip"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-organizationsmemberconnectionborderbybcodeuserorderbyinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"organizationsMemberConnection.",(0,a.kt)("b",null,"orderBy"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/enums/user-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UserOrderByInput"))," ",(0,a.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"userconnection-"},(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/user-connection"},(0,a.kt)("inlineCode",{parentName:"a"},"UserConnection"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}h.isMDXComponent=!0}}]);