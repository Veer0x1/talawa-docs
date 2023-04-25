"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[19448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},32553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="Using Git as you work",c={unversionedId:"git-guide/gitworkflow",id:"git-guide/gitworkflow",title:"Using Git as you work",description:"Know what branch you're currently working on",source:"@site/docs/git-guide/gitworkflow.md",sourceDirName:"git-guide",slug:"/git-guide/gitworkflow",permalink:"/docs/git-guide/gitworkflow",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/git-guide/gitworkflow.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Useful Git commands",permalink:"/docs/git-guide/Workingcopies/usefulgitcommands"},next:{title:"Keep your fork up to date",permalink:"/docs/git-guide/Git working/Fork"}},l={},u=[{value:"Know what branch you&#39;re currently working on",id:"know-what-branch-youre-currently-working-on",level:2}],s={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-git-as-you-work"},"Using Git as you work"),(0,o.kt)("h2",{id:"know-what-branch-youre-currently-working-on"},"Know what branch you're currently working on"),(0,o.kt)("p",null,"When working with Git, it's crucial to know which branch you have currently checked out, Most of the Git commands implicitly operate on the current branch. you can determine the currently checked out branch in several ways:"),(0,o.kt)("p",null,"One of the most common ways is with ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-status"},"git status")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git status\non branch git-demo\nnothing to commit, working directory clean\n")),(0,o.kt)("p",null,"Another is with ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-branch"},"git branch")," which will display all local branches, with a star icon next to the current branch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git branch\n* git-demo\n  main\n")),(0,o.kt)("p",null,"You can see more detailed information about your branches, including remote branches, to do the same use, ",(0,o.kt)("inlineCode",{parentName:"p"},"git branch -vva")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git branch -vva\n  develop                3ca006a [origin/develop] Updating talawa documentation as new PR merged into talawa:automated-docs\n* docs                   3ca006a Updating talawa documentation as new PR merged into talawa:automated-docs\n  remotes/origin/HEAD    -> origin/develop\n  remotes/origin/develop 3ca006a Updating talawa documentation as new PR merged into talawa:automated-docs\n")))}p.isMDXComponent=!0}}]);