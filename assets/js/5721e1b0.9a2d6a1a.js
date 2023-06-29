"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[1094],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>y});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),r=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=r(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),m=r(a),k=o,y=m["".concat(c,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(y,s(s({ref:t},i),{},{components:a})):n.createElement(y,s({ref:t},i))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,s=new Array(l);s[0]=k;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[m]="string"==typeof e?e:o,s[1]=d;for(var r=2;r<l;r++)s[r]=a[r];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},12427:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>k});var n=a(87462),o=a(67294),l=a(3905);const s={id:"event",title:"Event",hide_table_of_contents:!1},d=void 0,c={unversionedId:"schema/objects/event",id:"schema/objects/event",title:"Event",description:"No description",source:"@site/docs/schema/objects/event.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/event",permalink:"/docs/schema/objects/event",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/event.mdx",tags:[],version:"current",frontMatter:{id:"event",title:"Event",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"EventRegistrants",permalink:"/docs/schema/objects/event-registrants"},next:{title:"ExtendSession",permalink:"/docs/schema/objects/extend-session"}},r={},i=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>_id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventb_idbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>title</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventbtitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>description</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventbdescriptionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>startDate</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventbstartdatebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>endDate</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventbenddatebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>startTime</b></code><Bullet /><code>Time</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventbstarttimebcodetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>endTime</b></code><Bullet /><code>Time</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventbendtimebcodetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>allDay</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventballdaybcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>recurring</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventbrecurringbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>recurrance</b></code><Bullet /><code>Recurrance</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-eventbrecurrancebcoderecurrance-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>isPublic</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventbispublicbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>isRegisterable</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventbisregisterablebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>location</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventblocationbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>latitude</b></code><Bullet /><code>Latitude</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventblatitudebcodelatitude-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>longitude</b></code><Bullet /><code>Longitude</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventblongitudebcodelongitude-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>organization</b></code><Bullet /><code>Organization</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-eventborganizationbcodeorganization-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>creator</b></code><Bullet /><code>User!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-eventbcreatorbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>attendees</b></code><Bullet /><code>[User!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-eventbattendeesbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>attendeesCheckInStatus</b></code><Bullet /><code>[CheckInStatus!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-eventbattendeescheckinstatusbcodecheckinstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>admins</b></code><Bullet /><code>[User]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-eventbadminsbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>status</b></code><Bullet /><code>Status!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-eventbstatusbcodestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Event.<b>projects</b></code><Bullet /><code>[EventProject]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-eventbprojectsbcodeeventproject--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:d=!1}=e;const[c,r]=(0,o.useState)(d);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&s)},h={Bullet:i,SpecifiedBy:m,Badge:u,toc:k,Details:y},p="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Event {\n  _id: ID!\n  title: String!\n  description: String!\n  startDate: Date!\n  endDate: Date!\n  startTime: Time\n  endTime: Time\n  allDay: Boolean!\n  recurring: Boolean!\n  recurrance: Recurrance\n  isPublic: Boolean!\n  isRegisterable: Boolean!\n  location: String\n  latitude: Latitude\n  longitude: Longitude\n  organization: Organization\n  creator: User!\n  attendees: [User!]!\n  attendeesCheckInStatus: [CheckInStatus!]!\n  admins(adminId: ID): [User]\n  status: Status!\n  projects: [EventProject]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventb_idbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"_","id"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbtitlebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"title"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbdescriptionbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"description"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbstartdatebcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"startDate"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbenddatebcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"endDate"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbstarttimebcodetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"startTime"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/time"},(0,l.kt)("inlineCode",{parentName:"a"},"Time"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbendtimebcodetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"endTime"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/time"},(0,l.kt)("inlineCode",{parentName:"a"},"Time"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventballdaybcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"allDay"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbrecurringbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"recurring"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbrecurrancebcoderecurrance-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"recurrance"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/enums/recurrance"},(0,l.kt)("inlineCode",{parentName:"a"},"Recurrance"))," ",(0,l.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbispublicbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"isPublic"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbisregisterablebcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"isRegisterable"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventblocationbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"location"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventblatitudebcodelatitude-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"latitude"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/latitude"},(0,l.kt)("inlineCode",{parentName:"a"},"Latitude"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventblongitudebcodelongitude-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"longitude"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/longitude"},(0,l.kt)("inlineCode",{parentName:"a"},"Longitude"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventborganizationbcodeorganization-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"organization"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/organization"},(0,l.kt)("inlineCode",{parentName:"a"},"Organization"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbcreatorbcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"creator"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbattendeesbcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"attendees"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"[User!]!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbattendeescheckinstatusbcodecheckinstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"attendeesCheckInStatus"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/check-in-status"},(0,l.kt)("inlineCode",{parentName:"a"},"[CheckInStatus!]!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbadminsbcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"admins"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"[User]"))," ",(0,l.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-eventadminsbadminidbcodeid-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.admins.",(0,l.kt)("b",null,"adminId"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"../../../docs/schema/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbstatusbcodestatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"status"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/enums/status"},(0,l.kt)("inlineCode",{parentName:"a"},"Status!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-eventbprojectsbcodeeventproject--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Event.",(0,l.kt)("b",null,"projects"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/event-project"},(0,l.kt)("inlineCode",{parentName:"a"},"[EventProject]"))," ",(0,l.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/admin-remove-event"},(0,l.kt)("inlineCode",{parentName:"a"},"adminRemoveEvent"))," ",(0,l.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-event"},(0,l.kt)("inlineCode",{parentName:"a"},"createEvent"))," ",(0,l.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/event"},(0,l.kt)("inlineCode",{parentName:"a"},"event"))," ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/events-by-organization"},(0,l.kt)("inlineCode",{parentName:"a"},"eventsByOrganization"))," ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/events-by-organization-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"eventsByOrganizationConnection"))," ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/registered-events-by-user"},(0,l.kt)("inlineCode",{parentName:"a"},"registeredEventsByUser"))," ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/register-for-event"},(0,l.kt)("inlineCode",{parentName:"a"},"registerForEvent"))," ",(0,l.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-event"},(0,l.kt)("inlineCode",{parentName:"a"},"removeEvent"))," ",(0,l.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/unregister-for-event-by-user"},(0,l.kt)("inlineCode",{parentName:"a"},"unregisterForEventByUser"))," ",(0,l.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-event"},(0,l.kt)("inlineCode",{parentName:"a"},"updateEvent"))," ",(0,l.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/check-in"},(0,l.kt)("inlineCode",{parentName:"a"},"CheckIn"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/event-project"},(0,l.kt)("inlineCode",{parentName:"a"},"EventProject"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/task"},(0,l.kt)("inlineCode",{parentName:"a"},"Task"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);