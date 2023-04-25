"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[4980],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(r),p=a,b=u["".concat(c,".").concat(p)]||u[p]||d[p]||s;return r?n.createElement(b,o(o({ref:t},m),{},{components:r})):n.createElement(b,o({ref:t},m))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},59055:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>m,Details:()=>b,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(67294),s=r(3905);const o={id:"reject-membership-request",title:"rejectMembershipRequest",hide_table_of_contents:!1},i=void 0,c={unversionedId:"schema/mutations/reject-membership-request",id:"schema/mutations/reject-membership-request",title:"rejectMembershipRequest",description:"No description",source:"@site/docs/schema/mutations/reject-membership-request.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/reject-membership-request",permalink:"/docs/schema/mutations/reject-membership-request",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/reject-membership-request.mdx",tags:[],version:"current",frontMatter:{id:"reject-membership-request",title:"rejectMembershipRequest",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"rejectAdmin",permalink:"/docs/schema/mutations/reject-admin"},next:{title:"removeAdmin",permalink:"/docs/schema/mutations/remove-admin"}},l={},m=()=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(a.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>rejectMembershipRequest.<b>membershipRequestId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-rejectmembershiprequestbmembershiprequestidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MembershipRequest</code> <Badge class="secondary" text="object"/>',id:"membershiprequest-",level:4}],b=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:i=!1}=e;const[c,l]=(0,a.useState)(i);return(0,s.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&o)},h={Bullet:m,SpecifiedBy:u,Badge:d,toc:p,Details:b},f="wrapper";function y(e){let{components:t,...r}=e;return(0,s.kt)(f,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"rejectMembershipRequest(\n  membershipRequestId: ID!\n): MembershipRequest!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-rejectmembershiprequestbmembershiprequestidbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"rejectMembershipRequest.",(0,s.kt)("b",null,"membershipRequestId"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"membershiprequest-"},(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/membership-request"},(0,s.kt)("inlineCode",{parentName:"a"},"MembershipRequest"))," ",(0,s.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}y.isMDXComponent=!0}}]);