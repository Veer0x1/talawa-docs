"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[52803],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return a?n.createElement(g,r(r({ref:t},i),{},{components:a})):n.createElement(g,r({ref:t},i))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,r[1]=c;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67287:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),o=a(67294),s=a(3905);const r={id:"send-message-to-group-chat",title:"sendMessageToGroupChat",hide_table_of_contents:!1},c=void 0,l={unversionedId:"schema/mutations/send-message-to-group-chat",id:"schema/mutations/send-message-to-group-chat",title:"sendMessageToGroupChat",description:"No description",source:"@site/docs/schema/mutations/send-message-to-group-chat.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/send-message-to-group-chat",permalink:"/docs/schema/mutations/send-message-to-group-chat",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/send-message-to-group-chat.mdx",tags:[],version:"current",frontMatter:{id:"send-message-to-group-chat",title:"sendMessageToGroupChat",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"sendMessageToDirectChat",permalink:"/docs/schema/mutations/send-message-to-direct-chat"},next:{title:"setTaskVolunteers",permalink:"/docs/schema/mutations/set-task-volunteers"}},d={},i=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>sendMessageToGroupChat.<b>chatId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sendmessagetogroupchatbchatidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>sendMessageToGroupChat.<b>messageContent</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sendmessagetogroupchatbmessagecontentbcodestring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>GroupChatMessage</code> <Badge class="secondary" text="object"/>',id:"groupchatmessage-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:c=!1}=e;const[l,d]=(0,o.useState)(c);return(0,s.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&r)},h={Bullet:i,SpecifiedBy:u,Badge:p,toc:m,Details:g},y="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(y,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"sendMessageToGroupChat(\n  chatId: ID!\n  messageContent: String!\n): GroupChatMessage!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-sendmessagetogroupchatbchatidbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"sendMessageToGroupChat.",(0,s.kt)("b",null,"chatId"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-sendmessagetogroupchatbmessagecontentbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"sendMessageToGroupChat.",(0,s.kt)("b",null,"messageContent"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"groupchatmessage-"},(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/group-chat-message"},(0,s.kt)("inlineCode",{parentName:"a"},"GroupChatMessage"))," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}f.isMDXComponent=!0}}]);