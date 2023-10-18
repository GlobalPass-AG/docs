"use strict";(self.webpackChunkglobalpass_docs=self.webpackChunkglobalpass_docs||[]).push([[930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},s="Transaction Screening",o={unversionedId:"api-integration-guide/crypto-analyticis/transaction-screening",id:"api-integration-guide/crypto-analyticis/transaction-screening",title:"Transaction Screening",description:"To initiate a crypto transaction screening, make an HTTP POST request to:",source:"@site/docs/api-integration-guide/crypto-analyticis/transaction-screening.md",sourceDirName:"api-integration-guide/crypto-analyticis",slug:"/api-integration-guide/crypto-analyticis/transaction-screening",permalink:"/api-integration-guide/crypto-analyticis/transaction-screening",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apiIntegrationGuideSidebar",previous:{title:"Crypto Analytics",permalink:"/category/crypto-analytics"},next:{title:"Wallet Screening",permalink:"/api-integration-guide/crypto-analyticis/wallet-screening"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction-screening"},"Transaction Screening"),(0,r.kt)("p",null,"To initiate a crypto transaction screening, make an HTTP POST request to:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"/api/v2/crypto/transactions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example request"',title:'"Example','request"':!0},'curl -X \'POST\' \'https://screenings-api-test.globalpass.ch/api/v2/crypto/transactions\' -H \'accept: text/plain\' -H \'Authorization: Bearer {your_access_token}\' -H \'Content-Type: application/json\' -d \'{"blockchain": "string","ticker": "string","hash": "string","direction": "string","outputAddress": "string","outputIndices": [0]"logIndex": 0,"externalId": "string"}\n')),(0,r.kt)("p",null,"Note that crypto transaction request parameters depend on the asset of the screened transaction, which is explained below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockchain"),(0,r.kt)("td",{parentName:"tr",align:null},"Full name of the blockchain of the screened transaction. ",(0,r.kt)("em",{parentName:"td"},"Required value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ticker"),(0,r.kt)("td",{parentName:"tr",align:null},"Ticker of the asset of the screened transaction. ",(0,r.kt)("em",{parentName:"td"},"Required value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction hash. ",(0,r.kt)("em",{parentName:"td"},"Required value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"direction"),(0,r.kt)("td",{parentName:"tr",align:null},"Specification whether you will be running a source or destination of funds analysis. ",(0,r.kt)("em",{parentName:"td"},"Required value"),".")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Possible ",(0,r.kt)("strong",{parentName:"p"},"direction")," values:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"source_of_funds \u2013 gets details of the entities that have contributed funds to the transaction's source address and calculates a risk score based on this exposure"),(0,r.kt)("li",{parentName:"ul"},"destination_of_funds \u2013 gets details of the entities that funds have gone to from this transaction's destination address and calculate a risk score based on this exposure")),(0,r.kt)("p",null,"Additional properties may be required in some cases:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the output wallet of the transaction. ",(0,r.kt)("em",{parentName:"td"},"Required value only for Bitcoin and Tron blockchain transactions"),", as these assets can have multiple outputs. For example, if you are analyzing a deposit into your service then you might want to specify the output address that belongs to your service. Or for a withdrawal, it might be the output address that your customer wants to send funds to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputIndices"),(0,r.kt)("td",{parentName:"tr",align:null},"Zero-indexed output indices, an alternative method of specifying the relevant output of the transaction if output address is unknown. When specifying the output(s) by indices, if the provided indices reference multiple distinct addresses, the API will respond with an error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logIndex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://web3js.readthedocs.io/en/v1.2.9/web3-eth-contract.html?highlight=logindex#id37"},"log_index")," is a necessary parameter for Ethereum blockchain transactions (except from Ether) that contain multiple ERC20 token transfers. If a screened transaction contains transfers of than more than one token, the API will respond with an error requesting to specify the log",(0,r.kt)("em",{parentName:"td"},"index value. ","_","Optional value for all Ethereum blockchain assets except from Ether"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externalId"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the user in your system. ",(0,r.kt)("em",{parentName:"td"},"Required value"),".")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example Bitcoin Destination of Funds request body"',title:'"Example',Bitcoin:!0,Destination:!0,of:!0,Funds:!0,request:!0,'body"':!0},'{\n    "blockchain": "bitcoin",\n    "ticker": "BTC",\n    "hash": "166e2010fd6141b65ac6659ed93b832787ae6241a4998dd0db61189869d1f32e",\n    "direction": "destination_of_funds",\n    "outputAddress": "3FjSB2Db9KiJi1KLRwvctwZ23an2yV8vwF",\n    "externalId": "User123"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example Ether Destination of Funds request body"',title:'"Example',Ether:!0,Destination:!0,of:!0,Funds:!0,request:!0,'body"':!0},'{\n    "blockchain": "ethereum",\n    "ticker": "ETH",\n    "hash": "0x8f421010cb339e407a431712bb6f75921e80abc78a2f53e34dc51479ba87bb4d",\n    "direction": "destination_of_funds",\n    "externalId": "ABC001"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example USDT (Ethereum) Source of Funds request body"',title:'"Example',USDT:!0,"(Ethereum)":!0,Source:!0,of:!0,Funds:!0,request:!0,'body"':!0},'{\n    "blockchain": "ethereum",\n    "ticker": "USDT",\n    "hash": "0x8f421010cb339e407a431712bb6f75921e80abc78a2f53e34dc51479ba87bb4d",\n    "direction": "source_of_funds",\n    "logIndex": "125",\n    "externalId": "A0001"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example USDT (Tron) Source of Funds request body"',title:'"Example',USDT:!0,"(Tron)":!0,Source:!0,of:!0,Funds:!0,request:!0,'body"':!0},'{\n    "blockchain": "tron",\n    "ticker": "USDT",\n    "hash": "53a5ff1fc8c656deb96e51fe13efecb0770fe0ca0e911a25e75711a466079e6f",\n    "direction": "source_of_funds",\n    "outputAddress": "TVj43VT4UXej73FEcrPCs2Tcm6bcZfH92Q",\n    "externalId": "DEF501"\n}\n')),(0,r.kt)("p",null,"Responses will be unified in all request types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n    "id": "84a077e384697a97d69edd9i",\n    "screeningToken": "b101d8d6-de0f-45e9-9509-0d43258a416f",\n    "created": "2022-12-19T11:55:14.0377769+00:00",\n    "riskScore": 10\n}\n')),(0,r.kt)("p",null,"Where:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the specific screening of the transaction. If rescreening of the same transaction will be performed, the ID value will refer to the exact screening of the same transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"screeningToken"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the screened transaction in the GlobalPass system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp of when the specific screening of the transaction was performed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"riskScore"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction's risk value based on exposure in the screened direction, between 0 (no risk rules triggered) and 10 (highest possible risk level)")))),(0,r.kt)("p",null,"To get status of any given transaction screening, make an HTTP GET request to"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"/api/v2/crypto/transactions/{screeningToken}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example request"',title:'"Example','request"':!0},"curl -X 'GET' \\'https://screenings-api-test.globalpass.ch/api/v2/crypto/transactions/b101d8d6-de0f-45e9-9509-0d43258a416f' \\-H 'accept: text/plain' \\-H 'Authorization: Bearer {your_access_token}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example response"',title:'"Example','response"':!0},'{\n    "id": "84a077e384697a97d69edd9i",\n    "screeningToken": "b101d8d6-de0f-45e9-9509-0d43258a416f",\n    "created": "2022-12-19T11:55:14.0377769+00:00",\n    "riskScore": 10\n}\n')),(0,r.kt)("p",null,"To access any given latest transaction screening report, you can navigate to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://portal-test.globalpass.ch/crypto-screenings/transaction/%7BscreeningToken%7D"},"https://portal-test.globalpass.ch/crypto-screenings/transaction/{screeningToken}")," (",(0,r.kt)("em",{parentName:"li"},"sandbox"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://portal.globalpass.ch/crypto-screenings/transaction/%7BscreeningToken%7D"},"https://portal.globalpass.ch/crypto-screenings/transaction/{screeningToken}")," (",(0,r.kt)("em",{parentName:"li"},"production"),")")),(0,r.kt)("p",null,"To access a specific historical transaction screening report, you can navigate to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://portal-test.globalpass.ch/crypto-screenings/transaction/%7BscreeningToken%7D/%7Bid%7D"},"https://portal-test.globalpass.ch/crypto-screenings/transaction/{screeningToken}/{id}")," (",(0,r.kt)("em",{parentName:"li"},"sandbox"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://portal.globalpass.ch/crypto-screenings/transaction/%7BscreeningToken%7D/%7Bid%7D"},"https://portal.globalpass.ch/crypto-screenings/transaction/{screeningToken}/{id}")," (",(0,r.kt)("em",{parentName:"li"},"production"),")")))}u.isMDXComponent=!0}}]);