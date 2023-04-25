"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[85205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),y=r,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},26767:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>y});var o=n(87462),r=n(67294),a=n(3905);const s={id:"posts-by-organization",title:"postsByOrganization",hide_table_of_contents:!1},i=void 0,l={unversionedId:"schema/queries/posts-by-organization",id:"schema/queries/posts-by-organization",title:"postsByOrganization",description:"No description",source:"@site/docs/schema/queries/posts-by-organization.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/posts-by-organization",permalink:"/docs/schema/queries/posts-by-organization",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/posts-by-organization.mdx",tags:[],version:"current",frontMatter:{id:"posts-by-organization",title:"postsByOrganization",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"postsByOrganizationConnection",permalink:"/docs/schema/queries/posts-by-organization-connection"},next:{title:"posts",permalink:"/docs/schema/queries/posts"}},c={},d=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>postsByOrganization.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-postsbyorganizationbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>postsByOrganization.<b>orderBy</b></code><Bullet /><code>PostOrderByInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-postsbyorganizationborderbybcodepostorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Post</code> <Badge class="secondary" text="object"/>',id:"post-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:i=!1}=e;const[l,c]=(0,r.useState)(i);return(0,a.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&s)},g={Bullet:d,SpecifiedBy:p,Badge:u,toc:y,Details:m},b="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"postsByOrganization(\n  id: ID!\n  orderBy: PostOrderByInput\n): [Post]\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-postsbyorganizationbidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"postsByOrganization.",(0,a.kt)("b",null,"id"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-postsbyorganizationborderbybcodepostorderbyinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"postsByOrganization.",(0,a.kt)("b",null,"orderBy"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/enums/post-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PostOrderByInput"))," ",(0,a.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"post-"},(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/post"},(0,a.kt)("inlineCode",{parentName:"a"},"Post"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}f.isMDXComponent=!0}}]);