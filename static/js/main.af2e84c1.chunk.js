(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,n){e.exports={isFetching:"Preloader_isFetching__1YnSQ",overlay:"Preloader_overlay__aas09"}},15:function(e,t,n){e.exports={table:"TableList_table__2S6uz",table__block:"TableList_table__block__RpYvw",table__modal:"TableList_table__modal__22_yt",col1:"TableList_col1__2BP1D",col2:"TableList_col2__1JgUs",col3:"TableList_col3__tyS4A",col4:"TableList_col4__3JQkE",col5:"TableList_col5__3jJEC",col6:"TableList_col6__1T71h",table__blockCoin:"TableList_table__blockCoin__3rjeB"}},178:function(e,t,n){e.exports={title:"Headings_title__YiEEf",subtitle:"Headings_subtitle__3PmS0"}},211:function(e,t,n){},23:function(e,t,n){e.exports={paginationWrapperContainer:"Pagination_paginationWrapperContainer__1M7j2",paginationContainer:"Pagination_paginationContainer__2U9GD",paginationItem:"Pagination_paginationItem__2XWnZ",dots:"Pagination_dots__24Lax",selected:"Pagination_selected__1n5rH",arrow:"Pagination_arrow__1tMhC",left:"Pagination_left__3st8r",right:"Pagination_right__2VMKs",disabled:"Pagination_disabled__qrB1G",paginationSelectContainer:"Pagination_paginationSelectContainer__1rkNu",paginationSpan:"Pagination_paginationSpan__14UGc",pagginationSelect:"Pagination_pagginationSelect__33oub"}},35:function(e,t,n){e.exports={header:"Header_header__3jnAd",header__container:"Header_header__container__2ZuHU",header__list:"Header_header__list__WwpJU",activeLink:"Header_activeLink__2-Pbo",header2__list:"Header_header2__list__GaSVc"}},368:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(64),o=n.n(r),i=(n(211),n(22)),l=n(18),s=n(10),u=n(30),j=n.n(u),b=n(54),d=n(8),O=n(177),h=n.n(O).a.create({baseURL:"https://api.coincap.io/v2/assets/"}),_=function(e,t){return h.get("?limit=".concat(e,"&offset=").concat(t),{})},p=function(e){return h.get("".concat(e),{})},f=function(e){var t="";return e.forEach((function(e,n){0==n?t="?ids=".concat(e):t+=",".concat(e)})),h.get(t,{})},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"d1";return h.get("".concat(e,"/history?interval=").concat(t),{})},m={allCoin:[],mainCoins:[],threeMainCoins:["bitcoin","ethereum","monero"],error:null,errorMainCoins:null,loader:null},g=function(e){return{type:"MAIN/ALL-CRYPTO",data:e}},v=function(e){return{type:"MAIN/MAIN-COIN",data:e}},C=function(e){return{type:"MAIN/ERROR",error:e}},N=function(e){return{type:"MAIN/ERROR-MAIN-COINS",error:e}},y=function(e){return{type:"MAIN/LOADER",loader:e}},E=n(23),I=n.n(E),T=n(59),A="",w=function(e,t){var n=t-e+1;return Array.from({length:n},(function(t,n){return n+e}))},k=n(36),L=n(1),P=function(e){var t=e.currentPage,n=e.totalCount,a=e.pageSize,r=e.siblingCount,o=e.setPackPage,i=function(e){var t=e.currentPage,n=e.totalCount,a=e.siblingCount,r=e.pageSize;return Object(c.useMemo)((function(){var e=Math.ceil(n/r);if(a+5>=e)return w(1,e);var c=Math.max(t-a,1),o=Math.min(t+a,e),i=c>2,l=o<e-2,s=1,u=e;if(!i&&l){var j=w(1,3+2*a);return[].concat(Object(T.a)(j),[A,e])}if(i&&!l){var b=w(e-(3+2*a)+1,e);return[s,A].concat(Object(T.a)(b))}if(i&&l){var d=w(c,o);return[s,A].concat(Object(T.a)(d),[A,u])}}),[n,r,a,t])}({currentPage:t,totalCount:n,siblingCount:r,pageSize:a});if(i&&(0===t||i.length<2))return null;var l=i[i.length-1];return Object(L.jsxs)("ul",{className:I.a.paginationContainer,children:[Object(L.jsx)("li",{className:"".concat(I.a.paginationItem," ").concat(1===t&&I.a.disabled),onClick:function(){o(t-1)},children:Object(L.jsx)("div",{className:"".concat(I.a.arrow," ").concat(I.a.left)})}),i&&i.map((function(e){return e===A?Object(L.jsx)("li",{className:"".concat(I.a.paginationItem," ").concat(I.a.dots),children:"\u2026"},Object(k.a)()):Object(L.jsx)("li",{className:"".concat(I.a.paginationItem," ").concat(e===t&&I.a.selected),onClick:function(){return o(+e)},children:e},Object(k.a)())})),Object(L.jsx)("li",{className:"".concat(I.a.paginationItem," ").concat(t===l&&I.a.disabled),onClick:function(){o(t+1)},children:Object(L.jsx)("div",{className:"".concat(I.a.arrow," ").concat(I.a.right)})})]})},S=function(e){var t=e.cardPacksTotalCount,n=e.currentPage,c=e.pageCount,a=e.setPackPageCount,r=e.setPackPage;return Object(L.jsxs)("div",{className:I.a.paginationWrapperContainer,children:[Object(L.jsx)(P,{className:"",currentPage:n,totalCount:t,pageSize:c,siblingCount:1,setPackPage:r}),Object(L.jsxs)("div",{className:I.a.paginationSelectContainer,children:[Object(L.jsx)("span",{className:I.a.paginationSpan,children:"Show"}),Object(L.jsxs)("select",{defaultValue:c,className:I.a.pagginationSelect,onChange:function(e){return a(+e.currentTarget.value)},children:[Object(L.jsx)("option",{value:3,children:"3"}),Object(L.jsx)("option",{value:5,children:"5"}),Object(L.jsx)("option",{value:10,children:"10"})]}),Object(L.jsx)("span",{className:I.a.paginationSpan,children:"Coins per Page"})]})]})},M={pageCount:5,page:1,pageTotalCount:2e3},D=function(e){return{type:"PAGINATION/SET-PAGE",pack:e}},R=function(e){return{type:"PAGINATION/SET-PAGE-COUNT",pack:e}},F=n(87),W=n.n(F),U=function(e){var t=e.errorMessage,n=t?W.a.error_block__visible:W.a.error_block__hidden;return Object(L.jsxs)("div",{className:n,children:[Object(L.jsx)("span",{className:W.a.error_icon,children:"!"}),Object(L.jsx)("span",{className:W.a.error_message,children:t||null})]})},H=n(127),B=n.n(H),z=n.p+"static/media/loader.67c2c9a0.svg",G=a.a.memo((function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{className:B.a.isFetching,children:[Object(L.jsx)("img",{src:z,alt:"loading spinner"}),Object(L.jsx)("div",{className:B.a.overlay})]})})})),V=n(15),J=n.n(V),Y=n(32),K=n(104),q=n(60),Z=n.n(q),Q=function(e){var t=e.color,n=(e.className,e.children),c=e.rounded,a=e.width,r=Object(K.a)(e,["color","className","children","rounded","width"]),o={width:a},i=" ".concat(Z.a.button," ").concat(c?Z.a.button__rounded:Z.a.button__default," \n    ").concat("dark-blue"===t?Z.a.button__blue:"light-blue"===t?Z.a.button__light_blue:Z.a.button__red);return Object(L.jsx)("button",Object(d.a)(Object(d.a)({className:i,style:o},r),{},{children:Object(L.jsx)("span",{children:n})}))},X=n(61),$=n.n(X),ee=function(e){var t=e.modalActive,n=e.setModalActive,c=e.children;return Object(L.jsx)("div",{className:t?"".concat($.a.modal," ").concat($.a.modal__active):$.a.modal,onClick:function(){return n(!1)},children:Object(L.jsx)("div",{className:t?"".concat($.a.modal__content," ").concat($.a.modal__content_active):$.a.modal__content,onClick:function(e){return e.stopPropagation()},children:c})})},te={coinInWallet:[],startCoastUSD:0,difference:0,differencePercent:0,error:null},ne=function(e,t,n){return{type:"WALLET/ADD-COIN",name:e,symbol:t,priceUsd:n}},ce=function(e,t){return{type:"WALLET/EDIT-SUM",sum:e,id:t}},ae=function(e){return{type:"WALLET/DELETE-COIN",id:e}},re=function(e){return{type:"WALLET/ADD-START-COAST",num:e}},oe=function(e){return{type:"WALLET/ADD-DIFFERENCE",num:e}},ie=function(e){return{type:"WALLET/ADD-DIFFERENCE-PERCENT",num:e}},le=function(e){return{type:"WALLET/ERROR",error:e}},se=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t,n){var c,a,r,o,i,l,s,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==(c=n().wallet.coinInWallet).length){e.next=7;break}t(oe(0)),t(ie(0)),e.next=23;break;case 7:return a=n().wallet.startCoastUSD,r=[],c.forEach((function(e){r.push(e.name)})),t(y(!0)),e.next=13,f(r);case 13:o=e.sent,t(le(null)),i=o.data.data,l=0,s=0;do{l+=+i[s].priceUsd*+c[s].sum,s++}while(s<i.length);u=(a-l)/a*100,t(oe(a-l)),t(ie(u));case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(0),t(le(e.t0.message));case 28:return e.prev=28,t(y(!1)),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[0,25,28,31]])})));return function(t,n){return e.apply(this,arguments)}}()},ue={oneMainCoin:"",coin:null,history:null,error:null},je=function(e){return{type:"COIN/ONE-MAIN-COIN",data:e}},be=function(e){return{type:"COIN/ONE",data:e}},de=function(e){return{type:"COIN/HISTORY-COIN",history:e}},Oe=function(e){return{type:"COIN/ERROR",error:e}},he=function(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return e.allCrypto.allCoin})),a=Object(c.useState)(!1),r=Object(l.a)(a,2),o=r[0],i=r[1];return Object(L.jsxs)("div",{className:J.a.table,children:[Object(L.jsxs)("table",{className:J.a.table__block,children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:J.a.col1,children:"Rank"}),Object(L.jsx)("th",{className:J.a.col2,children:"Name"}),Object(L.jsx)("th",{className:J.a.col3,children:"Price (Usd)"}),Object(L.jsx)("th",{className:J.a.col4,children:"Change Percent 24hr"}),Object(L.jsx)("th",{className:J.a.col5,children:"Symbol"}),Object(L.jsx)("th",{className:J.a.col6,children:"Actions"})]})}),Object(L.jsx)("tbody",{children:n.map((function(e){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:J.a.col1,children:(+e.rank).toFixed(0)}),Object(L.jsx)("th",{className:J.a.col2,onClick:function(){return n=e.id,void t(je(n));var n},children:e.name}),Object(L.jsx)("th",{className:J.a.col3,children:(+e.priceUsd).toFixed(3)}),Object(L.jsx)("th",{className:J.a.col4,children:(+e.changePercent24Hr).toFixed(3)}),Object(L.jsx)("th",{className:J.a.col5,children:e.symbol}),Object(L.jsx)("th",{className:"".concat(J.a.col6," ").concat(J.a.btn),children:Object(L.jsx)(Q,{onClick:function(){var n,c,a;i(!0),n=e.id,c=e.symbol,a=e.priceUsd,t(ne(n,c,a))},rounded:!1,color:"light-blue",children:"Add to wallet"})})]},Object(k.a)())}))})]}),Object(L.jsxs)(ee,{modalActive:o,setModalActive:i,children:["The coin has been successfully added to the wallet. To edit, go to the ",Object(L.jsx)(Y.b,{to:"/Crypto_wallet",children:"Wallet"})," or add more"]})]})},_e=n(58),pe=n.n(_e),fe=n(178),xe=n.n(fe),me=function(e){var t=e.children;return Object(L.jsx)("h2",{className:xe.a.subtitle,children:t})},ge=a.a.memo((function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.allCrypto.loader})),n=Object(c.useState)(""),a=Object(l.a)(n,2),r=(a[0],a[1],Object(s.c)((function(e){return e.pagination.pageTotalCount}))),o=Object(s.c)((function(e){return e.pagination.page})),u=Object(s.c)((function(e){return e.pagination.pageCount})),d=Object(s.c)((function(e){return e.allCrypto.error})),O=Object(s.c)((function(e){return e.coinCrypto.oneMainCoin})),h=Object(c.useState)(0),p=Object(l.a)(h,2),f=p[0],x=p[1];return Object(c.useEffect)((function(){var t=setTimeout((function(){e(C(null))}),3e3);return function(){return clearTimeout(t)}}),[d]),Object(c.useEffect)((function(){e(function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(c){var a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(y(!0)),n.next=4,_(e,t);case 4:a=n.sent,c(g(a.data.data)),c(C(null)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.dir(n.t0),c(C(n.t0.message));case 13:return n.prev=13,c(y(!1)),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})));return function(e){return n.apply(this,arguments)}}()}(u,f))}),[u,f]),t?Object(L.jsx)(G,{}):""!==O?Object(L.jsx)(i.a,{to:"/Crypto_coin"}):Object(L.jsxs)("div",{className:pe.a.container,children:[Object(L.jsx)(me,{children:"All coins"}),Object(L.jsxs)("div",{className:pe.a.wrapper,children:[Object(L.jsx)(he,{}),d&&Object(L.jsx)(U,{errorMessage:d}),Object(L.jsx)(S,{cardPacksTotalCount:r,currentPage:o,pageCount:u,setPackPageCount:function(t){e(R(t))},setPackPage:function(t){e(D(t)),x((t-1)*u)}})]})]})})),ve=n(179),Ce=n(180),Ne=n(181),ye=n(201),Ee=n(370),Ie=n(374),Te=n(197),Ae=n(198),we=n(90),ke=n(86),Le=n(202),Pe=function(e){Object(Ne.a)(n,e);var t=Object(ye.a)(n);function n(){return Object(ve.a)(this,n),t.apply(this,arguments)}return Object(Ce.a)(n,[{key:"render",value:function(){return null}}]),n}(a.a.Component),Se=function(){var e=Object(s.c)((function(e){return e.coinCrypto.history})),t=[],n=e;return console.log(n),n&&n.forEach((function(e){t.push({name:new Date(e.time),interval:+e.priceUsd})})),Object(L.jsxs)(Ee.a,{width:800,height:400,data:t,margin:{top:5,right:30,left:20,bottom:5},children:[Object(L.jsx)(Ie.a,{strokeDasharray:"3 3"}),Object(L.jsx)(Te.a,{dataKey:"",children:Object(L.jsx)(Pe,{value:"Date from ".concat(new Date(t[0])," to ").concat(new Date(t[t.length-1])),offset:0,position:"bottom"})}),Object(L.jsx)(Ae.a,{}),Object(L.jsx)(we.a,{}),Object(L.jsx)(ke.a,{}),Object(L.jsx)(Le.a,{name:"Coast",type:"monotone",dataKey:"interval",stroke:"#8884d8",activeDot:{r:8}})]})},Me=function(e){var t=Object(s.b)(),n=Object(c.useState)(!1),a=Object(l.a)(n,2),r=a[0],o=a[1],i=Object(s.c)((function(e){return e.coinCrypto.coin}));return Object(L.jsxs)("div",{className:J.a.table,children:[Object(L.jsxs)("table",{className:J.a.table__blockCoin,children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:J.a.col1,children:"Rank"}),Object(L.jsx)("th",{className:J.a.col2,children:"Name"}),Object(L.jsx)("th",{className:J.a.col3,children:"Price (Usd)"}),Object(L.jsx)("th",{className:J.a.col4,children:"Change Percent 24hr"}),Object(L.jsx)("th",{className:J.a.col5,children:"Symbol"}),Object(L.jsx)("th",{className:J.a.col6,children:"Actions"})]})}),Object(L.jsx)("tbody",{children:i&&Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:J.a.col1,children:(+i.rank).toFixed(0)}),Object(L.jsx)("th",{className:J.a.col2,children:i.name}),Object(L.jsx)("th",{className:J.a.col3,children:(+i.priceUsd).toFixed(3)}),Object(L.jsx)("th",{className:J.a.col4,children:(+i.changePercent24Hr).toFixed(3)}),Object(L.jsx)("th",{className:J.a.col5,children:i.symbol}),Object(L.jsx)("th",{className:"".concat(J.a.col6," ").concat(J.a.btn),children:Object(L.jsx)(Q,{onClick:function(){var e,n,c;o(!0),i&&(e=i.id,n=i.symbol,c=i.priceUsd,t(ne(e,n,c)))},rounded:!1,color:"light-blue",children:"Add to wallet"})})]})})]}),Object(L.jsxs)(ee,{modalActive:r,setModalActive:o,children:["The coin has been successfully added to the wallet. To edit, go to the ",Object(L.jsx)(Y.b,{to:"/Crypto_wallet",children:"Wallet"})," or add more"]})]})},De=a.a.memo((function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.coinCrypto.oneMainCoin})),n=Object(s.c)((function(e){return e.coinCrypto.error})),a=Object(s.c)((function(e){return e.allCrypto.loader}));return Object(c.useEffect)((function(){var t=setTimeout((function(){e(Oe(null))}),3e3);return function(){return clearTimeout(t)}}),[n]),Object(c.useEffect)((function(){var n,c;e((n=t,function(){var e=Object(b.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(y(!0)),e.next=4,x(n,c);case 4:return a=e.sent,t(de(a.data.data)),e.next=8,p(n);case 8:r=e.sent,t(be(r.data.data)),t(Oe(null)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t(Oe(e.t0.message));case 16:return e.prev=16,t(y(!1)),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(t){return e.apply(this,arguments)}}()))}),[t]),a?Object(L.jsx)(G,{}):""===t?Object(L.jsxs)("div",{children:[Object(L.jsx)("h5",{children:"There is not some coin"}),Object(L.jsx)(Y.b,{to:"/Crypto_list",children:"Chose coin"})]}):Object(L.jsx)("div",{className:pe.a.container,children:Object(L.jsxs)("div",{className:pe.a.wrapper,children:[n&&Object(L.jsx)(U,{errorMessage:n}),Object(L.jsx)(me,{children:t}),Object(L.jsx)(Me,{}),Object(L.jsx)("div",{className:pe.a.chart,children:Object(L.jsx)(Se,{})})]})})})),Re=n(35),Fe=n.n(Re),We=function(){return Object(L.jsx)("svg",{style:{width:"25px",height:"25px"},version:"1.2",baseProfile:"tiny",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 256 238",children:Object(L.jsx)("path",{d:"M122.7,109.9l0.1-30.1c8.5,0,35.2-2.6,35.2,15.2C157.9,112,131.2,109.9,122.7,109.9z M164.8,141.8L164.8,141.8\r c0.1-19.5-32-16.7-42.2-16.7l-0.1,33.2C132.7,158.3,164.8,160.5,164.8,141.8z M10.6,119.9C10.6,54.9,62.8,2,127.8,2\r c65,0,117.5,52.5,117.5,117.5c0,65-52.9,117.5-117.5,117.5S10.6,184.6,10.6,119.9z M98.1,113.5c-0.5,0-1,0-1.6,0L96.3,153\r c-0.3,1.9-1.4,5-5.7,5c0.2,0.2-11,0-11,0l-3.1,18l19.6,0.1c3.7,0,7.2,0.1,10.8,0.1l-0.1,25l15.1,0.1l0.1-24.8\r c4.1,0.1,8.1,0.1,12,0.2l-0.1,24.7l15.1,0.1l0.1-25c25.3-1.4,43.1-7.7,45.4-31.5c1.8-19.2-7.1-27.7-21.5-31.2\r c8.8-4.4,14.2-12.2,13-25.3h0c-1.7-17.9-17-23.9-36.5-25.7l0.1-24.8l-15.1-0.1L134.5,62c-4,0-8,0.1-12,0.1l0.1-24.3l-15.1-0.1\r l-0.1,24.8c-3.3,0.1-6.5,0.1-9.6,0.1l0-0.1l-20.8-0.1L77,78.5c0,0,11.1-0.2,10.9,0c6.1,0,8.1,3.6,8.6,6.6l-0.1,28.2\r C96.9,113.4,97.5,113.4,98.1,113.5z"})})},Ue=function(){return Object(L.jsx)("svg",{style:{width:"25px",height:"25px"},version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 76.304 76.304",children:Object(L.jsx)("g",{children:Object(L.jsx)("path",{d:"M72.325,33.234v-2.947c0-5.389-3.698-9.919-8.686-11.217l-0.009-4.859c0-4.742-3.859-8.601-8.603-8.601h-0.455L14.31,18.1 c-0.917,0.053-1.787,0.265-2.604,0.584h-0.105C5.205,18.684,0,23.889,0,30.287v28.804c0,6.397,5.204,11.603,11.601,11.603h49.123 c6.396,0,11.601-5.205,11.601-11.603V55.26c2.323-0.899,3.979-3.151,3.979-5.789v-10.45C76.303,36.385,74.648,34.133,72.325,33.234 z M70.303,49.47c0,0.118-0.093,0.211-0.211,0.211H53.851c-0.118,0-0.21-0.093-0.21-0.211V39.021c0-0.115,0.094-0.209,0.21-0.209 h16.241c0.116,0,0.211,0.094,0.211,0.209V49.47z M55.398,11.637c1.261,0.18,2.232,1.266,2.232,2.579l0.008,4.469H32.679 L55.398,11.637z M60.724,64.693H11.602c-3.093,0-5.601-2.509-5.601-5.603V30.287c0-3.095,2.508-5.603,5.601-5.603h49.122 c3.094,0,5.601,2.508,5.601,5.603v2.525H53.851c-3.424,0-6.21,2.785-6.21,6.209V49.47c0,3.425,2.786,6.211,6.21,6.211h12.474v3.41 C66.325,62.184,63.818,64.693,60.724,64.693z"})})})},He=a.a.memo((function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.allCrypto.mainCoins})),n=Object(s.c)((function(e){return e.allCrypto.threeMainCoins})),a=Object(s.c)((function(e){return e.wallet.startCoastUSD})),r=Object(s.c)((function(e){return e.wallet.difference})),o=Object(s.c)((function(e){return e.wallet.differencePercent})),i=Object(s.c)((function(e){return e.wallet.error})),l=Object(s.c)((function(e){return e.allCrypto.errorMainCoins})),u=Object(s.c)((function(e){return e.allCrypto.loader}));Object(c.useEffect)((function(){var t=setTimeout((function(){l&&e(N(null)),i&&e(le(null))}),3e3);return function(){return clearTimeout(t)}}),[i,l]),Object(c.useEffect)((function(){e(function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(y(!0)),t.next=4,f(e);case 4:c=t.sent,n(v(c.data.data)),n(N(null)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(N(t.t0.message));case 12:return t.prev=12,n(y(!1)),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[]);var d=Object(c.useCallback)((function(){e(se())}),[]);return u?Object(L.jsx)(G,{}):Object(L.jsxs)("header",{className:Fe.a.header,children:[Object(L.jsxs)("div",{className:Fe.a.header__container,children:[Object(L.jsx)("h2",{children:"Cryptocurrency rates"}),Object(L.jsx)("nav",{className:Fe.a.header__nav,children:Object(L.jsxs)("ul",{className:Fe.a.header__list,children:[Object(L.jsx)("li",{children:Object(L.jsxs)(Y.c,{to:"/Crypto_list",activeClassName:Fe.a.activeLink,children:[Object(L.jsx)("div",{style:{color:"red"},children:Object(L.jsx)(We,{})}),"Main"]})}),Object(L.jsx)("li",{children:Object(L.jsxs)(Y.c,{to:"/Crypto_wallet",activeClassName:Fe.a.activeLink,children:[Object(L.jsx)(Ue,{}),"Wallet"]})})]})})]}),Object(L.jsx)("div",{className:Fe.a.header__container,children:t&&t.map((function(e){return Object(L.jsxs)("ul",{className:"".concat(Fe.a.activeLink," ").concat(Fe.a.header2__list),children:[Object(L.jsx)("li",{children:e.name}),Object(L.jsx)("li",{children:(+e.priceUsd).toFixed(3)}),Object(L.jsx)("li",{children:e.symbol})]},Object(k.a)())}))}),Object(L.jsxs)("div",{className:Fe.a.header__container,children:[Object(L.jsxs)("ul",{className:"".concat(Fe.a.activeLink," ").concat(Fe.a.header2__list),children:[Object(L.jsxs)("li",{style:{color:"green"},children:["Wallet balance: ",a.toFixed(3)]}),Object(L.jsxs)("li",{style:{color:"red"},children:["Delta: ",r.toFixed(3)]}),Object(L.jsxs)("li",{style:{color:"blue"},children:["Delta percentage: ",o.toFixed(3)," %"]})]}),Object(L.jsx)(Q,{width:80,color:"red",rounded:!0,onClick:d,children:"Refresh"})]}),i&&Object(L.jsx)(U,{errorMessage:i}),l&&Object(L.jsx)(U,{errorMessage:l})]})})),Be=n(74),ze=n.n(Be),Ge=function(e){var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,o=(e.className,e.spanClassName),i=e.label,l=Object(K.a)(e,["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","label"]),s="".concat(ze.a.error," ").concat(o||""),u="".concat(ze.a.input," ").concat(r&&ze.a.input__error);return Object(L.jsxs)("div",{className:ze.a.inputField,children:[Object(L.jsx)("label",{"aria-required":!0,children:i}),Object(L.jsx)("input",Object(d.a)({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:u},l)),Object(L.jsx)("div",{className:ze.a.inputField__error,children:r&&Object(L.jsx)("span",{className:s,children:r})})]})},Ve=function(e){var t=e.name,n=e.id,a=e.sum,r=e.symbol,o=Object(s.b)(),i=Object(c.useState)(!0),u=Object(l.a)(i,2),j=u[0],b=u[1],d=Object(c.useState)(a),O=Object(l.a)(d,2),h=O[0],_=O[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),x=f[0],m=f[1],g=Object(c.useState)(!1),v=Object(l.a)(g,2),C=v[0],N=v[1];return Object(L.jsxs)("div",{children:["\u0412\u0430\u043b\u044e\u0442\u0430 ",t,j?Object(L.jsxs)("div",{children:[Object(L.jsx)("span",{style:{width:"20px",height:"10px",borderBottom:"1px solid red"},children:a})," ",r,Object(L.jsx)("button",{onClick:function(){b(!1)},children:"Edit"})]}):Object(L.jsxs)("div",{children:[Object(L.jsx)(Ge,{label:"Coin",type:"coin",value:h,onBlur:function(e){return function(e){e.currentTarget.value?/^0/.test(e.currentTarget.value)?(m("enter any value"),N(!0)):/^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/i.test(e.currentTarget.value)?N(!1):(_(a),m("Invalid value"),N(!0)):(m("enter any value"),N(!0))}(e)},onChange:function(e){return _(e.currentTarget.value)},error:""!==x?x:null}),r,Object(L.jsx)("button",{disabled:C,onClick:function(){return function(e,t){o(ce(e,t)),b(!0)}(h,n)},children:"Save"})]})]})},Je=a.a.memo((function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.wallet.coinInWallet})),n=Object(s.c)((function(e){return e.allCrypto.loader})),a=Object(c.useCallback)((function(){e((function(e,t){var n=t().wallet.coinInWallet;e(re(function(){var e=0;return n.forEach((function(t){e+=+t.priceUsd*+t.sum})),e}()))})),e(se())}),[]),r=Object(c.useCallback)((function(t){e(ae(t))}),[]);return n?Object(L.jsx)(G,{}):Object(L.jsxs)("div",{style:{width:"200px",height:"400px",border:"1px solid red"},children:[Object(L.jsx)(me,{children:"Wallet"}),t&&t.map((function(e){return Object(L.jsxs)("div",{children:[Object(L.jsx)(Ve,{name:e.name,id:e.id,sum:e.sum,symbol:e.symbol}),Object(L.jsx)(Q,{width:80,color:"red",rounded:!0,onClick:function(){return r(e.id)},children:"Delete"})]},Object(k.a)())})),Object(L.jsx)("button",{onClick:a,children:"Submit"})]})}));var Ye=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(He,{}),Object(L.jsxs)(i.d,{children:[Object(L.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(L.jsx)(ge,{})}}),Object(L.jsx)(i.b,{exact:!0,path:"/Crypto_list",render:function(){return Object(L.jsx)(ge,{})}}),Object(L.jsx)(i.b,{exact:!0,path:"/Crypto_coin",render:function(){return Object(L.jsx)(De,{})}}),Object(L.jsx)(i.b,{exact:!0,path:"/Crypto_wallet",render:function(){return Object(L.jsx)(Je,{})}}),Object(L.jsx)(i.b,{path:"*",render:function(){return Object(L.jsx)("h1",{children:"404: PAGE NOT FOUND"})}})]})]})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,376)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))},qe=n(107),Ze=n(199),Qe=Object(qe.b)({allCrypto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN/ALL-CRYPTO":return Object(d.a)(Object(d.a)({},e),{},{allCoin:t.data});case"MAIN/MAIN-COIN":return Object(d.a)(Object(d.a)({},e),{},{mainCoins:t.data});case"MAIN/ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.error});case"MAIN/ERROR-MAIN-COINS":return Object(d.a)(Object(d.a)({},e),{},{errorMainCoins:t.error});case"MAIN/LOADER":return Object(d.a)(Object(d.a)({},e),{},{loader:t.loader});default:return e}},coinCrypto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COIN/ONE-MAIN-COIN":return Object(d.a)(Object(d.a)({},e),{},{oneMainCoin:t.data});case"COIN/ONE":return Object(d.a)(Object(d.a)({},e),{},{coin:t.data});case"COIN/HISTORY-COIN":return Object(d.a)(Object(d.a)({},e),{},{history:t.history});case"COIN/ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.error});default:return e}},wallet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WALLET/ADD-COIN":var n=e.coinInWallet;return console.log(n),0===n.length||0===n.filter((function(e){return e.name==t.name})).length?Object(d.a)(Object(d.a)({},e),{},{coinInWallet:[].concat(Object(T.a)(e.coinInWallet),[{id:Object(k.a)(),sum:0,name:t.name,symbol:t.symbol,priceUsd:t.priceUsd}])}):e;case"WALLET/EDIT-SUM":return Object(d.a)(Object(d.a)({},e),{},{coinInWallet:e.coinInWallet.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{sum:t.sum}):e}))});case"WALLET/DELETE-COIN":return Object(d.a)(Object(d.a)({},e),{},{coinInWallet:e.coinInWallet.filter((function(e){return e.id!==t.id}))});case"WALLET/ADD-START-COAST":return Object(d.a)(Object(d.a)({},e),{},{startCoastUSD:t.num});case"WALLET/ADD-DIFFERENCE":return Object(d.a)(Object(d.a)({},e),{},{difference:t.num});case"WALLET/ADD-DIFFERENCE-PERCENT":return Object(d.a)(Object(d.a)({},e),{},{differencePercent:t.num});case"WALLET/ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.error});default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PAGINATION/SET-PAGE":return Object(d.a)(Object(d.a)({},e),{},{page:t.pack});case"PAGINATION/SET-PAGE-COUNT":return Object(d.a)(Object(d.a)({},e),{},{pageCount:t.pack});default:return e}}}),Xe=Object(qe.c)(Qe,function(){try{var e=localStorage.getItem("walletState");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Object(qe.a)(Ze.a));Xe.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("walletState",t)}catch(n){}}({wallet:Xe.getState().wallet})})),o.a.render(Object(L.jsx)(Y.a,{children:Object(L.jsx)(s.a,{store:Xe,children:Object(L.jsx)(Ye,{})})}),document.getElementById("root")),Ke()},58:function(e,t,n){e.exports={container:"AllCrypto_container__ZjLo5",wrapper:"AllCrypto_wrapper__3V804",chart:"AllCrypto_chart__1QUe_"}},60:function(e,t,n){e.exports={button:"Button_button__10yZn",button__rounded:"Button_button__rounded__-NmRb",button__default:"Button_button__default__13sOw",button__blue:"Button_button__blue__dY-yF",button__light_blue:"Button_button__light_blue__2_WSb",button__red:"Button_button__red__5xCJa"}},61:function(e,t,n){e.exports={modal:"Modal_modal__2B_cx",modal__active:"Modal_modal__active__33r-H",modal__content:"Modal_modal__content__1VUuF",modal__content_active:"Modal_modal__content_active__ocfNA"}},74:function(e,t,n){e.exports={inputField:"InputField_inputField__1wI4M",inputField__error:"InputField_inputField__error__1yqh9",input:"InputField_input__3Dh1H",input__error:"InputField_input__error__1H9Am"}},87:function(e,t,n){e.exports={error_block__visible:"Error_error_block__visible__JV0Ra",moveInLeft:"Error_moveInLeft__kscTH",error_block__hidden:"Error_error_block__hidden__DTqgV",error_icon:"Error_error_icon__1bLOJ",error_message:"Error_error_message__1m8eo"}}},[[368,1,2]]]);
//# sourceMappingURL=main.af2e84c1.chunk.js.map