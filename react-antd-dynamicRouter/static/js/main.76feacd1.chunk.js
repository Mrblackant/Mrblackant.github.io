(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{124:function(e,t,n){var c={"./extension/queryParams.tsx":[133,5],"./index/index.tsx":[134,6],"./login/index.tsx":[135,3,4],"./notFound/index.tsx":[136,7],"./pages/detail.tsx":[137,8],"./pages/listMore.tsx":[138,9],"./pages/listSigel.tsx":[139,10]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(c)},r.id=124,e.exports=r},125:function(e,t,n){},129:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(19),i=n.n(r),a=(n(99),n(26)),o=n(67),s=n(142),l=n(14),u=(n(100),n(81)),j=n.n(u),d=n(82),h=n.n(d),f=n(141),b=n(62),O=n.n(b),p=n(4);function x(e){e.error,e.pastDelay;return Object(p.jsx)("div",{className:O.a.loadingWapper,children:Object(p.jsx)(f.a,{className:O.a.loadingSpinWapper})})}var m=function(e){return h()({loading:x,loader:function(){return n(124)("./".concat(e,".tsx"))},delay:400})},g=m("notFound/index"),v=m("login/index"),y=[{title:"\u9996\u9875",key:"/",component:m("index/index"),exact:!0},{title:"\u9875\u9762",key:"/pages",children:[{title:"\u5217\u8868\u9875",key:"/pagesList",children:[{title:"\u5355\u4e2a\u7b5b\u9009\u6761\u4ef6\u5217\u8868\u9875",key:"/listSigel",component:m("pages/listSigel")},{title:"\u591a\u4e2a\u7b5b\u9009\u6761\u4ef6\u5217\u8868\u9875",key:"/listMore",component:m("pages/listMore")}]},{title:"\u8be6\u60c5\u9875",key:"/pagesDetail",component:m("pages/detail")}]},{title:"\u529f\u80fd\u62d3\u5c55",key:"/extension",children:[{title:"\u94fe\u63a5\u53c2\u6570",key:"/queryParams",component:m("extension/queryParams")}]}];!function e(t,n,c){t.forEach((function(t){t.fullPath=n?n+t.key:t.key,t.fullTitle=c?"".concat(c,"/").concat(t.title):t.title,t.children&&t.children.forEach((function(n){n.fullPath=t.key+n.key,n.fullTitle="".concat(t.title,"/").concat(n.title),n.children&&e(n.children,n.fullPath,n.fullTitle)}))}))}(y,"","");var k=[],S=function e(t){t.map((function(t){t.component&&k.push(t),t.children&&e(t.children)}))},N=function(e){return y=function e(t,n){return t.filter((function(e){return!n.includes(e.key)})).map((function(t){return(t=Object.assign({},t)).children&&(t.children=e(t.children,n)),t}))}(y,e),S(y),{navMeuns:y,routersArr:k}},C=(n(125),n(66)),P=n(143),T=n(145),w=n(146),A=n(147),M=s.a.Header;var E=function(e){var t=Object(c.useState)({username:""}),n=Object(a.a)(t,2),r=n[0],i=n[1],o=Object(p.jsx)(C.a,{children:Object(p.jsxs)(C.a.ItemGroup,{title:"\u7528\u6237\u8bbe\u7f6e",children:[Object(p.jsx)(C.a.Divider,{}),Object(p.jsxs)(C.a.Item,{onClick:function(){window.location.href="/login"},children:[" ",Object(p.jsx)(T.a,{})," \u9000\u51fa\u767b\u5f55"]})]})});return Object(c.useEffect)((function(){try{i(JSON.parse(localStorage.getItem("userInfo"))||{})}catch(e){console.log(e)}}),[]),Object(p.jsx)("div",{className:"Head",children:Object(p.jsx)(B.Consumer,{children:function(e){var t=e.menuToggle,n=e.setMenuToggle;return Object(p.jsx)(M,{className:"header",children:Object(p.jsxs)("div",{className:"logo-line",style:{color:"#fff"},children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"\u52a8\u6001\u8def\u7531-DEMO"}),Object(p.jsx)("span",{className:"top-toggle-icon",children:t?Object(p.jsx)(w.a,{onClick:function(){n(!t)}}):Object(p.jsx)(A.a,{onClick:function(){n(!t)}})})]}),Object(p.jsx)(P.a,{overlay:o,overlayStyle:{width:"10rem"},children:Object(p.jsx)("span",{className:"meun-top",children:(null===r||void 0===r?void 0:r.username)||"\u7528\u6237\u540d"})})]})})}})})},I=s.a.Sider,D=C.a.SubMenu;var F=Object(l.g)((function(e){var t=e.history,n=t.location,r=Object(c.useState)([]),i=Object(a.a)(r,2),o=i[0],s=i[1];Object(c.useEffect)((function(){j()}),[]);var l=function(e){return Object(p.jsx)(C.a.Item,{onClick:function(){return n=e,void t.push(n.key);var n},children:e.title},e.key)},u=function e(t){return t.map((function(t){return t.hideMeun?null:t.component&&!t.children?l(t):Object(p.jsx)(D,{title:t.title,children:t.children&&t.children.map((function(t){return t.children?e([t]):l(t)}))},t.key)}))},j=function(){var e=[];!function t(c){c.forEach((function(c){n.pathname===c.key&&(e=c.fullPath&&c.fullPath.split("/")),c.children&&t(c.children)}))}(y),e=e.filter((function(e){return e})).map((function(e){return"/"+e})),s(Array.isArray(e)?e:[])};return Object(p.jsx)(B.Consumer,{children:function(e){var t=e.menuToggle;return Object(p.jsx)(I,{width:200,className:"site-layout-background",collapsed:t,children:Object(p.jsx)(C.a,{mode:"inline",selectedKeys:[n.pathname],openKeys:o,style:{height:"100%",borderRight:0},onOpenChange:function(e){return function(e){s(e)}(e)},children:u(y)})})}})})),J=s.a.Content;var L=function(){var e=Object(c.useContext)(W).routersArrAuth,t=void 0===e?[]:e;return Object(p.jsx)("div",{children:Object(p.jsx)(J,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:G(t)})})},_=n(144),q=n(39);var H=Object(l.g)((function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],i=n[1],o=Object(c.useContext)(W).routersArrAuth,s=void 0===o?[]:o,l=e.history.location;Object(c.useEffect)((function(){u(l.pathname)}),[l.pathname]);var u=function(e){var t=s.find((function(t){return t.key===e}));t&&t.fullTitle&&i(t.fullTitle.split("/"))};return Object(p.jsx)("div",{className:"bread-wapper",children:Object(p.jsxs)(_.a,{className:"top-meun",children:[Object(p.jsx)(_.a.Item,{children:Object(p.jsx)(q.b,{to:"/",children:"\u9996\u9875"})}),r.map((function(e){return"\u9996\u9875"!==e&&Object(p.jsx)(_.a.Item,{children:e},e)}))]})})})),B=Object(c.createContext)({});var K=function(e){var t=e.history,n=Object(c.useState)(!1),r=Object(a.a)(n,2),i=r[0],o=r[1];return Object(p.jsx)(B.Provider,{value:{menuToggle:i,setMenuToggle:o},children:Object(p.jsxs)("div",{className:"layout-content-wapper",style:{height:"100%"},children:[Object(p.jsx)(E,{}),Object(p.jsxs)(s.a,{style:{height:"100%"},children:[Object(p.jsx)(F,{history:t}),Object(p.jsxs)(s.a,{style:{padding:"0 24px 24px",overflow:"auto"},children:[Object(p.jsx)(H,{}),Object(p.jsx)(L,{})]})]})]})})},U={pages:"admin_auth",extension:"admin_auth"},W=(n(129),Object(c.createContext)(null)),G=function(e){return Object(p.jsxs)(l.d,{children:[e.map((function(e){return Object(p.jsx)(l.b,{path:e.key,exact:e.exact,render:function(t){var n=j.a.parse(t.location.search);return Object(p.jsx)(e.component,Object(o.a)(Object(o.a)({},t),n))}},e.key)})),Object(p.jsx)(l.a,{to:"/404"})]})},R=function(){return Object(p.jsx)(s.a,{style:{height:"100%"},children:Object(p.jsx)(K,{})})};var z=function(e){var t,n=Object(c.useState)([]),r=Object(a.a)(n,2),i=r[0],o=r[1],s=Object(c.useState)([]),u=Object(a.a)(s,2),j=u[0],d=u[1],h=localStorage.getItem("userInfo");try{t=h?JSON.parse(h):{}}catch(b){console.log(b)}Object(c.useEffect)((function(){f()}),[]);var f=function(){var e=t.userauth;e=e?e.split(","):[e];var n=Object.keys(U).map((function(t){return e.includes(U[t])?null:"/".concat(t)}));n=n.filter((function(e){return e}));var c=N(n),r=c.routersArr,i=c.navMeuns;o(i),d(r)};return Object(p.jsx)("div",{className:"App-layout-wapper",children:j.length?Object(p.jsx)(W.Provider,{value:{navMeunsAuth:i,routersArrAuth:j},children:Object(p.jsx)(q.a,{children:Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/login",component:v}),Object(p.jsx)(l.b,{path:"/404",component:g}),Object(p.jsx)(l.b,{component:R})]})})}):null})},Q=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,238)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};n(130);i.a.render(Object(p.jsx)(z,{}),document.getElementById("root")),Q()},62:function(e,t,n){},99:function(e,t,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.76feacd1.chunk.js.map