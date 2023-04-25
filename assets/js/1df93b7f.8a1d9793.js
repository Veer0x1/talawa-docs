"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[53237],{96558:(e,t,n)=>{n.r(t),n.d(t,{Section:()=>h,default:()=>x});var a=n(67294),o=n(35742),r=n(44996),i=n(7961),l=n(90814);function s(){const e=document.querySelector(".NativeDevelopment"),t=document.querySelector(".NativeDevelopment .dissection").children,n=t.length,a=40,o=60;function r(e,t,n){return Math.min(n,Math.max(t,e))}function i(){const i=1-r((e.getBoundingClientRect().top-o)/window.innerHeight,0,1),l=r((i-(s=.2))/(.9-s),0,1);var s;for(let e=0;e<n;e++){const o=r((l-e/n)*n,0,1);t[e].style.opacity=o;const i=a*(1-o);t[e].style.left=`${i}px`}}return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)}const c={intro:"\n  <ul>\n<li>Talawa is an open-source software project to help manage organizations like yours </li>\n<li>Your community becomes closer using our mobile app with social media features </li>\n<li>The Admin Web Portal makes member, event and volunteer management simpler.</li>\n</ul>\n  ",nativeCode:"\n  <ul>\n<li>Easily schedule events and track attendance. Reports show who\u2019s coming, and how often </li>\n<li>Stay in contact with your membership with individual or group emails, now and in the future </li>\n<li>Track your volunteer time and their activity tasks. Make your planning a success </li>\n<li>Our intuitive design helps streamline work processes and increases adoption so everyone can benefit </li>\n</ul>\n  ",codeExample:"\nimport React from 'react';\nimport {Header} from './Header';\n\nconst WelcomeScreen = () => (\n  <View>\n    <Header title=\"Welcome to Talawa\"/>\n    <Text style={heading}>Step One</Text>\n    <Text>\n    Talawa is powerful, yet intuitive community management software made for religious\n    organizations, clubs, charities and other non-profits\n    </Text>\n    <Text>\n    Designed to help you save time, reduce frustration, and accomplish your goals.\n    </Text>\n    <Text>\n    Giving, event management, social media features, plus more.\n    </Text>\n    <Text>\n      Read the docs to discover what to do next:\n    </Text>\n\n   </View>\n);\n  ",forEveryone:"\n  <ul>\n  <li>Simple to use member dashboards</li>\n  <li>Member notifications</li>\n  <li>Event and volunteer calendars</li>\n  <li>Donation management </li>\n  <li>Advertising from local companies </li>\n  <li>Multi-organization support </li>\n  <li>Plugin support for cloud service providers</li>\n  </ul>\n ",crossPlatform:"\n  <ul>\n<li>View the social media news feed </li>\n<li>Share posts, images and videos </li>\n<li>Create events for your groups </li>\n<li>Group chat with other members </li>\n<li>Receive the latest community news </li>\n<li>Get reminders and notifications </li>\n<li>Make your community stronger </li>\n</ul>\n  ",sixthPanel:"Talawa is an open-source project. Our active community of volunteers is constantly adding features to make administration easier.</br></br>Their varied perspectives has created a product that is easily adaptable to the cultures and languages of their countries. Contributions from 19 different timezones.\n  ",seventhPanel:"Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students.<br/><br/>\n  In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded  the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts.<br/><br/>\n  Palisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open-source internship program.\n  ",eightPanel:'<p>Our developer community members are talented, passionate, and amazing. They are always suggesting, coding and documenting new ideas for our software.</p>\n  <p>They span across the globe. Explore this space to learn something new from the community.</p>\n  <br/>\n  <ul>\n    <li><a href="/docs/">Explore this site</a></li>\n    <li><a href="https://github.com/PalisadoesFoundation" target="_self">Visit our GitHub pages</a></li>\n    <li><a href="https://github.com/PalisadoesFoundation/talawa#readme" target="_self">Join our Slack channel</a></li>\n  </ul>\n  <br/>\n  <strong>Jump in and get started!</strong>\n  \n  ',fastRefresh:"\nTalawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students.<br/><br/>In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded  the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts. <br/><br/>4.\tPalisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open source internship program.\n\n  ",talks:"\n  Get to know our Talawa community by visiting our YouTube channel. There you will find interviews, technical talks, feature reviews with volunteers and much more\n<br/><br/>\nYou can follow the latest news from the Palisadoes team on Twitter.\n  "};function m(e){let{text:t}=e;return a.createElement("h2",{className:"Heading"},t)}function u(e){let{href:t,type:n="primary",target:o,children:r,buttonClassName:i}=e;return a.createElement("a",{className:`ActionButton ${n} ${i}`,href:t,target:o},r)}function d(e){let{title:t,text:n,moreContent:o}=e;return a.createElement(a.Fragment,null,a.createElement(m,{text:t}),a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),o)}function p(){return a.createElement(a.Fragment,null,a.createElement(u,{type:"primary",href:"https://github.com/PalisadoesFoundation",target:"_self",buttonClassName:"custom-button"},"Learn More"),a.createElement(u,{type:"secondary",href:"/docs/",target:"_self"},"Developers"))}function h(e){let{element:t="section",children:n,className:o,background:r="light"}=e;const i=t;return a.createElement(i,{className:o?`Section ${o} ${r}`:`Section ${r}`},n)}function g(e){let{columnOne:t,columnTwo:n,reverse:o}=e;return a.createElement("div",{className:"TwoColumns "+(o?"reverse":"")},a.createElement("div",{className:"column first "+(o?"right":"left")},t),a.createElement("div",{className:"column last "+(o?"left":"right")},n))}function f(){return a.createElement(h,{background:"light",className:"HeaderHero"},a.createElement("div",{className:"socialLinks"}),a.createElement(g,{reverse:!0,columnOne:a.createElement("img",{className:"custom-image bounce-animation",src:(0,r.Z)("img/image-01.png"),alt:"HeaderHero Image"}),columnTwo:a.createElement(a.Fragment,null,a.createElement("h1",{className:"title"},"Talawa"),a.createElement("h2",{className:"tagline"},"Powering Closer Communities"),a.createElement("p",{className:"description"},"For religious organizations, charities and other non-profits"),a.createElement("div",{className:"buttons"},a.createElement(p,null)))}))}function w(){return a.createElement(h,{className:"NativeApps",background:"tint"},a.createElement(g,{reverse:!0,columnOne:a.createElement(d,{title:"Easy Community Organization Management",text:c.intro}),columnTwo:a.createElement("img",{alt:"",src:(0,r.Z)("img/Second-Panel-Image.png"),className:"native-apps-image"})}))}function v(){return a.createElement(h,{className:"NativeCode",background:"light"},a.createElement(g,{columnOne:a.createElement(d,{title:"More Effective Management",text:c.nativeCode}),columnTwo:a.createElement("img",{alt:"",src:(0,r.Z)("img/Third-Panel-Image.png"),className:"native-code-image"})}))}function E(){return a.createElement(h,{className:"NativeDevelopment",background:"tint"},a.createElement(g,{reverse:!0,columnOne:a.createElement(d,{title:"Many Useful Admin Features",text:c.forEveryone}),columnTwo:a.createElement("div",{className:"dissection"},a.createElement("img",{alt:"talawa",src:"img/Fourth-Panel-Image.png",className:"native-development-image"}))}))}function b(){return a.createElement(h,{className:"CrossPlatform"},a.createElement("div",{className:"custom-panel"},a.createElement(g,{columnOne:a.createElement("div",{className:"text-column-offset"}," ",a.createElement(d,{title:"Powerful, Fun Mobile Application",text:c.crossPlatform})),columnTwo:a.createElement("div",{className:"dissection"},a.createElement("img",{alt:"talawa",src:"img/image-07.jpg",className:"crossplatform-image"}))})))}function y(){return a.createElement(h,{className:"SixthPanel",background:"tint"},a.createElement(g,{columnOne:a.createElement(d,{title:"Free Software: Created by a global volunteer team",text:c.sixthPanel}),columnTwo:a.createElement(l.Z,{language:"jsx"},c.codeExample)}))}function T(){return a.createElement(h,{className:"Community",background:"light"},a.createElement("div",{className:"content"},a.createElement(m,{text:"Globally Recognized, International Participation"}),a.createElement(g,{columnOne:a.createElement(a.Fragment,null,a.createElement("p",{className:"firstP"},a.createElement("img",{src:(0,r.Z)("img/talawa-logo-svg.svg"),alt:""}),a.createElement("span",null,"Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students.")),a.createElement("p",null,"In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded  the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts.")),columnTwo:a.createElement(a.Fragment,null,a.createElement("p",null,"Palisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open-source internship program."),a.createElement("img",{alt:"talawa",src:"img/Seventh-Panel-Image.png",className:"seventh-panel-image"}))})))}function P(){return a.createElement(h,{className:"EightPanel",background:"tint"},a.createElement(g,{reverse:!0,columnOne:a.createElement(d,{title:"Join Our Developer Community",text:c.eightPanel}),columnTwo:a.createElement("div",{className:"dissection"},a.createElement("img",{alt:"talawa",src:"img/people-devices.png",className:"eigth-panel-image"}))}))}const N=()=>{(0,a.useEffect)((()=>function(){const e=["full","mobile","desktop","laptop","mobile2","full2"],t=[1250,1500,1500,1500,1500,1250];let n=0;const a=[],o=document.querySelector(".LogoAnimation");function r(){const i=e[n];o.classList.remove(i),n=(n+1)%e.length;const l=e[n],s=t[n];o.classList.add(l),a.push(setTimeout(r,s))}function i(){document.hidden?(a.forEach((e=>{clearTimeout(e)})),a.length=0):r()}return document.hidden||a.push(setTimeout((()=>{o.classList.remove("init"),r()}),2e3)),document.addEventListener("visibilitychange",i,!1),()=>document.removeEventListener("visibilitychange",i)}()),[]),(0,a.useEffect)((()=>s()),[])},x=()=>(N(),a.createElement(i.Z,{description:"Powering Closer Communities",wrapperClassName:"homepage"},a.createElement(o.Z,null,a.createElement("title",null,"Talawa-Docs: Powered by The Palisadoes"),a.createElement("meta",{property:"og:title",content:"Talawa-Docs: Powered by The Palisadoes"}),a.createElement("meta",{property:"twitter:title",content:"Talawa-Docs: Powered by The Palisadoes"})),a.createElement(f,null),a.createElement(w,null),a.createElement(v,null),a.createElement(E,null),a.createElement(b,null),a.createElement(y,null),a.createElement(T,null),a.createElement(P,null)))}}]);