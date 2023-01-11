"use strict";(self.webpackChunkupzaar_docs=self.webpackChunkupzaar_docs||[]).push([[5860],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),y=s(a),p=n,m=y["".concat(c,".").concat(p)]||y[p]||u[p]||l;return a?r.createElement(m,o(o({ref:t},i),{},{components:a})):r.createElement(m,o({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[y]="string"==typeof e?e:n,o[1]=d;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5693:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>y,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=a(7462),n=a(7294),l=a(3905);const o={id:"loyalty-reward",title:"LoyaltyReward",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},d=void 0,c={unversionedId:"objects/loyalty-reward",id:"objects/loyalty-reward",title:"LoyaltyReward",description:"No description",source:"@site/docs/objects/loyalty-reward.mdx",sourceDirName:"objects",slug:"/objects/loyalty-reward",permalink:"/docs/objects/loyalty-reward",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/objects/loyalty-reward.mdx",tags:[],version:"current",frontMatter:{id:"loyalty-reward",title:"LoyaltyReward",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyReward.<b>amount_off_currency</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardbamount_off_currencybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyReward.<b>amount_off_in_subunit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardbamount_off_in_subunitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyReward.<b>errors</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardberrorsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyReward.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyReward.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyReward.<b>percentage_off</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardbpercentage_offbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyReward.<b>points_redemption</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardbpoints_redemptionbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyReward.<b>reward_discount_type</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardbreward_discount_typebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoyaltyReward.<b>reward_id</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-loyaltyrewardbreward_idbcodeint--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],y=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:y,SpecifiedBy:u,Badge:p};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type LoyaltyReward {\n  amount_off_currency: String\n  amount_off_in_subunit: Int\n  errors: [String!]\n  id: ID!\n  name: String!\n  percentage_off: Float\n  points_redemption: Int\n  reward_discount_type: String\n  reward_id: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardbamount_off_currencybcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyReward.",(0,l.kt)("b",null,"amount_off_currency"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardbamount_off_in_subunitbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyReward.",(0,l.kt)("b",null,"amount_off_in_subunit"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardberrorsbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyReward.",(0,l.kt)("b",null,"errors"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,l.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyReward.",(0,l.kt)("b",null,"id"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardbnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyReward.",(0,l.kt)("b",null,"name"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardbpercentage_offbcodefloat-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyReward.",(0,l.kt)("b",null,"percentage_off"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardbpoints_redemptionbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyReward.",(0,l.kt)("b",null,"points_redemption"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardbreward_discount_typebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyReward.",(0,l.kt)("b",null,"reward_discount_type"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loyaltyrewardbreward_idbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoyaltyReward.",(0,l.kt)("b",null,"reward_id"))),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/queries/rewards"},(0,l.kt)("inlineCode",{parentName:"a"},"rewards")),"  ",(0,l.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/objects/brand"},(0,l.kt)("inlineCode",{parentName:"a"},"Brand")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/objects/create-reward-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateRewardPayload")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/objects/loyalty-info"},(0,l.kt)("inlineCode",{parentName:"a"},"LoyaltyInfo")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/objects/loyalty-transaction"},(0,l.kt)("inlineCode",{parentName:"a"},"LoyaltyTransaction")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);