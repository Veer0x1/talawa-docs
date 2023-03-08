"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"admin-messaging",title:"Global Messaging"},i=void 0,s={unversionedId:"features/admin-role/admin-messaging",id:"features/admin-role/admin-messaging",title:"Global Messaging",description:"This section is a work in progress.",source:"@site/docs/features/admin-role/global-messaging.md",sourceDirName:"features/admin-role",slug:"/features/admin-role/admin-messaging",permalink:"/docs/features/admin-role/admin-messaging",draft:!1,tags:[],version:"current",frontMatter:{id:"admin-messaging",title:"Global Messaging"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/features/admin-role/admin-role-overview"},next:{title:"Manage Members",permalink:"/docs/features/admin-role/admin-manage-members"}},l={},p=[{value:"Code: ADM-001",id:"code-adm-001",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,r.kt)("h2",{id:"code-adm-001"},"Code: ADM-001"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Authored by",(0,r.kt)("strong",{parentName:"em"}," ",(0,r.kt)("strong",{parentName:"strong"},"Shannika Jackson")," "),". Last updated on")," ",(0,r.kt)("em",{parentName:"p"}," ",(0,r.kt)("strong",{parentName:"em"},"May 18,2021")," ")),(0,r.kt)("p",null,"This feature aims to ",(0,r.kt)("em",{parentName:"p"}," ",(0,r.kt)("strong",{parentName:"em"},"enhance the admin role")," ")," by ",(0,r.kt)("em",{parentName:"p"}," ",(0,r.kt)("strong",{parentName:"em"},"allowing admin users to send messages to an entire organization")," "),"."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"problem"},"Problem"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Messages can now be sent only directly from one user to another :"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The admins in an organization can only send direct messages"),(0,r.kt)("li",{parentName:"ol"},"The need exists to communicate instantly with all members of an organisation")))),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Administrators for an organization must be able to send messages to all members in the organization:")," This is to facilitate organizational notices and updates.")),(0,r.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,r.kt)("p",null,"The following are aspects of this feature which have been considered but are outside of the scope for the current project:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Group messaging for roles within an event :")," This feature is detailed under the Admin Portal requirement features."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Message history for organization wide messages :")," This is the ability to see from the admin portal the history of organization-wide messages sent for a period."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Scheduled sending of organization wide messages :")," This is the ability to send organization wide messages automatically based on a scheduled date. This will be useful as reminders for upcoming events and other notices")),(0,r.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,r.kt)("p",null,"The following are the primary roles foreseen in the development of this feature"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Feature Lead")," : will review proposed solutions, acceptance and close feature")),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"NA"),(0,r.kt)("h3",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"NA"),(0,r.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,r.kt)("h3",{id:"user-experience"},"User Experience"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An organization","'","s administrator should be presented with a create message button from the organisation","'","s admin portal."),(0,r.kt)("li",{parentName:"ol"},"When clicked, (s)he is presented with the option to message the organization."),(0,r.kt)("li",{parentName:"ol"},"The message to the organization then appears in the admin portals chat screen."),(0,r.kt)("li",{parentName:"ol"},"In the admin portal","'","s chat screen a button should be presented to resend organization wide message")),(0,r.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,r.kt)("p",null,"NA"),(0,r.kt)("h3",{id:"future-work"},"Future Work"),(0,r.kt)("p",null,"Items mentioned in the Out of Scope section will form the basis for future work to be done on this feature"),(0,r.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,r.kt)("p",null,"TBD"))}d.isMDXComponent=!0}}]);