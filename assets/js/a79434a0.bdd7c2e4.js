"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[48580],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>p});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),g=s(a),m=l,p=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return a?n.createElement(p,r(r({ref:t},i),{},{components:a})):n.createElement(p,r({ref:t},i))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[g]="string"==typeof e?e:l,r[1]=d;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10571:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>d,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var n=a(87462),l=a(67294),o=a(3905);const r={id:"language-model",title:"LanguageModel",hide_table_of_contents:!1},d=void 0,c={unversionedId:"schema/objects/language-model",id:"schema/objects/language-model",title:"LanguageModel",description:"No description",source:"@site/docs/schema/objects/language-model.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/language-model",permalink:"/docs/schema/objects/language-model",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/language-model.mdx",tags:[],version:"current",frontMatter:{id:"language-model",title:"LanguageModel",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"IOSFirebaseOptions",permalink:"/docs/schema/objects/iosfirebase-options"},next:{title:"Language",permalink:"/docs/schema/objects/language"}},s={},i=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LanguageModel.<b>_id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-languagemodelb_idbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LanguageModel.<b>lang_code</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-languagemodelblang_codebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LanguageModel.<b>value</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-languagemodelbvaluebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LanguageModel.<b>verified</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-languagemodelbverifiedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LanguageModel.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-languagemodelbcreatedatbcodedatetime--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[c,s]=(0,l.useState)(d);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&r)},f={Bullet:i,SpecifiedBy:g,Badge:u,toc:m,Details:p},y="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type LanguageModel {\n  _id: ID!\n  lang_code: String!\n  value: String!\n  verified: Boolean!\n  createdAt: DateTime!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-languagemodelb_idbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LanguageModel.",(0,o.kt)("b",null,"_","id"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-languagemodelblang_codebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LanguageModel.",(0,o.kt)("b",null,"lang_code"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-languagemodelbvaluebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LanguageModel.",(0,o.kt)("b",null,"value"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-languagemodelbverifiedbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LanguageModel.",(0,o.kt)("b",null,"verified"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-languagemodelbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LanguageModel.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/language"},(0,o.kt)("inlineCode",{parentName:"a"},"Language"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);