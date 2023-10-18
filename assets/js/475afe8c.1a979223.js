"use strict";(self.webpackChunkglobalpass_docs=self.webpackChunkglobalpass_docs||[]).push([[218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="AML For Address integration",l={unversionedId:"api-integration-guide/aml-screenings/aml-for-address-integration/aml-for-address-integration",id:"api-integration-guide/aml-screenings/aml-for-address-integration/aml-for-address-integration",title:"AML For Address integration",description:"To intiate an address aml screening, make HTTP POST request to:",source:"@site/docs/api-integration-guide/aml-screenings/aml-for-address-integration/aml-for-address-integration.md",sourceDirName:"api-integration-guide/aml-screenings/aml-for-address-integration",slug:"/api-integration-guide/aml-screenings/aml-for-address-integration/",permalink:"/api-integration-guide/aml-screenings/aml-for-address-integration/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiIntegrationGuideSidebar",previous:{title:"Retrieving Business AML PDF Report",permalink:"/api-integration-guide/aml-screenings/aml-for-business-integration/retrieving-business-aml-pdf-report"},next:{title:"Retrieving Screening Data",permalink:"/api-integration-guide/aml-screenings/aml-for-address-integration/retrieving-screening-data"}},s={},p=[],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aml-for-address-integration"},"AML For Address integration"),(0,a.kt)("p",null,"To intiate an address aml screening, make HTTP POST request to:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"/api/v2/address")),(0,a.kt)("p",null,"Request headers:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Content-Type: application/json")),(0,a.kt)("p",null,"Request body:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"Main address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"city"),(0,a.kt)("td",{parentName:"tr",align:null},"City of the address (optional)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"postalCode"),(0,a.kt)("td",{parentName:"tr",align:null},"Address postal code (optional)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"state"),(0,a.kt)("td",{parentName:"tr",align:null},"Address state (optional) (applicable for US)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"countryCode"),(0,a.kt)("td",{parentName:"tr",align:null},"ISO 3166-1 alpha-3 compliant country code (optional)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"externalId"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify your internal identifier to be set on the screening. (optional)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example request"',title:'"Example','request"':!0},'curl -X \'POST\' \'https://screenings-api-test.globalpass.ch/api/v2/address\' -H \'accept: text/plain\' -H \'Authorization: Bearer {your_access_token}\'-H \'Content-Type: application/json\' -d \'{ "address": "Gran Subida Mario, 7", "city": "M\xe1laga", "countryCode": "ESP", "postalCode": "37764", "externalId": "AAA111" }\'\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n    "token": "f4564d3d-69de-4093-971d-796699c0e8c5"\n}\n')))}u.isMDXComponent=!0}}]);