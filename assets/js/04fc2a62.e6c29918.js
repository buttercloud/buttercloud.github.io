"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[898],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=c(a),u=n,f=y["".concat(s,".").concat(u)]||y[u]||p[u]||r;return a?o.createElement(f,l(l({ref:t},d),{},{components:a})):o.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9709:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>y,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=a(7462),n=a(7294),r=a(3905);const l={id:"join-loyalty-payload",title:"JoinLoyaltyPayload",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"objects/join-loyalty-payload",id:"objects/join-loyalty-payload",title:"JoinLoyaltyPayload",description:"Autogenerated return type of JoinLoyalty",source:"@site/docs/objects/join-loyalty-payload.mdx",sourceDirName:"objects",slug:"/objects/join-loyalty-payload",permalink:"/docs/objects/join-loyalty-payload",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/objects/join-loyalty-payload.mdx",tags:[],version:"current",frontMatter:{id:"join-loyalty-payload",title:"JoinLoyaltyPayload",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>JoinLoyaltyPayload.<b>errors</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-joinloyaltypayloadberrorsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>JoinLoyaltyPayload.<b>status</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-joinloyaltypayloadbstatusbcodeboolean--",level:4},{value:"Returned by",id:"returned-by",level:3}],y=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:y,SpecifiedBy:p,Badge:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated return type of JoinLoyalty"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type JoinLoyaltyPayload {\n  errors: [String!]\n  status: Boolean!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-joinloyaltypayloadberrorsbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"JoinLoyaltyPayload.",(0,r.kt)("b",null,"errors"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,r.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-joinloyaltypayloadbstatusbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"JoinLoyaltyPayload.",(0,r.kt)("b",null,"status"))),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mutations/join-loyalty"},(0,r.kt)("inlineCode",{parentName:"a"},"join_loyalty")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);