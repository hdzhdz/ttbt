(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{15:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(9),r=a.n(c),l=a(13),m=(a(83),a(10)),s=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],g=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,l=s.includes(c)?c:s[0],g=o.includes(r)?r:o[0];return i.a.createElement(m.b,{to:"/",className:"btn-mobile"},i.a.createElement("button",{className:"btn ".concat(l," ").concat(g),onClick:n,type:a},t))};a(88);var u=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(l.a)(r,2),o=s[0],u=s[1],h=function(){return c(!1)},p=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"navbar-container"},i.a.createElement(m.b,{to:"/",className:"navbar-logo",onClick:h},"TTBT",i.a.createElement("i",{class:"fas fa-heart"})),i.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!a)}},i.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),i.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.b,{to:"/",className:"nav-links",onClick:h},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.b,{to:"/Em",className:"nav-links",onClick:h},"Em Yeu")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(m.b,{to:"/Anh",className:"nav-links",onClick:h},"Anh Yeu"))),o&&i.a.createElement(g,{buttonStyle:"btn--outline"},"Dang Nhap Ne"))))},h=a(14),p=a(70),b=(a(89),a(22)),d=a(23),E=new(function(){function e(){Object(b.a)(this,e),this.authenticated=!1}return Object(d.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),v=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1],m=Object(n.useState)(""),s=Object(l.a)(m,2),o=s[0],g=s[1];return i.a.createElement("div",{className:"Login"},i.a.createElement(h.a,{onSubmit:function(e){e.preventDefault()}},i.a.createElement(h.a.Group,{size:"lg",controlId:"username"},i.a.createElement(h.a.Label,null,"Username :"),i.a.createElement(h.a.Control,{autoFocus:!0,type:"username",value:c,onChange:function(e){return r(e.target.value)}})),i.a.createElement(h.a.Group,{size:"lg",controlId:"password"},i.a.createElement(h.a.Label,null,"Password  :"),i.a.createElement(h.a.Control,{type:"password",value:o,onChange:function(e){return g(e.target.value)}})),i.a.createElement(p.a,{block:!0,size:"lg",type:"submit",disabled:!(c.length>0&&o.length>0),onClick:function(){("ttbt2808"===c&&"Superiors1212"===o||"a"===c&&"a"===o)&&E.login((function(){e.history.push("/")}))}},"Login")))};a(15),a(91);var f=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"cards__item"},i.a.createElement(m.b,{className:"cards__item__link",to:e.path},i.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},i.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),i.a.createElement("div",{className:"cards__item__info"},i.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var j=function(){return i.a.createElement("div",{className:"cards"},i.a.createElement("h1",{style:{color:"#fff"}},"Anh De Thuong ~"),i.a.createElement("div",{className:"cards__container"},i.a.createElement("div",{className:"cards__wrapper"},i.a.createElement("ul",{className:"cards__items"},i.a.createElement(f,{src:"images/img-9.jpg",text:"Hien ngang",label:"De thuong",path:"/em"}),i.a.createElement(f,{src:"images/img-2.jpg",text:"U Village",label:"De thuong",path:"/em"})),i.a.createElement("ul",{className:"cards__items"},i.a.createElement(f,{src:"images/img-3.jpg",text:"Di Mall",label:"De thuong",path:"/em"}),i.a.createElement(f,{src:"images/img-4.jpg",text:"Xau xi",label:"De thuong",path:"/em"}),i.a.createElement(f,{src:"images/img-8.jpg",text:"Garden",label:"De thuong",path:"/em"})))))};a(92);var N=function(){return i.a.createElement("div",{className:"hero-container"},i.a.createElement("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),i.a.createElement("h1",null,"Nguoi iu tui"),i.a.createElement("p",null),i.a.createElement("div",{className:"hero-btns"},i.a.createElement(g,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large"},"Mup Mup"),i.a.createElement(g,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"Dang Yeu ",i.a.createElement("i",{className:"far fa-play-circle"}))))};a(93);var w=function(){return i.a.createElement("div",{className:"footer-container"},i.a.createElement("section",{className:"footer-subscription"},i.a.createElement("p",{className:"footer-subscription-heading"},"I Love You")))};var y=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement(j,null),i.a.createElement(w,null))},_=a(7),O=a(41),S=a(63),k=a(25);function x(){var e=[{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042},{src:"images/img-1.jpg",width:2048,height:2042}],t=Object(n.useState)(0),a=Object(l.a)(t,2),c=a[0],r=a[1],m=Object(n.useState)(!1),s=Object(l.a)(m,2),o=s[0],g=s[1],u=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;r(a),g(!0)}),[]);return i.a.createElement("div",{className:"anh"},i.a.createElement(S.a,{photos:e,onClick:u}),i.a.createElement(k.b,null,o?i.a.createElement(k.a,{onClose:function(){r(0),g(!1)}},i.a.createElement(k.c,{currentIndex:c,views:e.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})):null))}var C=a(71),D=a(69),I=a(67),T=(a(172),["images/img-1.jpg","images/img-2.jpg","images/img-3.jpg","images/img-4.jpg","images/img-5.jpg","images/img-6.jpg","images/img-7.jpg","images/img-8.jpg","images/img-9.jpg","images/img-10.jpg","images/img-11.jpg","images/img-12.jpg","images/img-13.jpg","images/img-14.jpg","images/img-15.jpg","images/img-16.jpg","images/img-17.jpg"]),z=function(e){Object(C.a)(a,e);var t=Object(D.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={photoIndex:0,isOpen:!1},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen;return i.a.createElement("div",null,i.a.createElement("text",null,"An angle was born on August 28th, 1999.Tran Thuy Bao Tran is a very beautiful and cute person.",i.a.createElement("br",null),"She is very skinny and eat very little. She is very smart and super cute."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{type:"button",onClick:function(){return e.setState({isOpen:!0})}},"Open Pics of my bebi"),n&&i.a.createElement(I.a,{mainSrc:T[a],nextSrc:T[(a+1)%T.length],prevSrc:T[(a+T.length-1)%T.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+T.length-1)%T.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%T.length})}}))}}]),a}(n.Component);var A=a(72),L=function(e){var t=e.component,a=Object(A.a)(e,["component"]);return i.a.createElement(_.b,Object.assign({},a,{render:function(e){return E.isAuthenticated()?i.a.createElement(t,e):i.a.createElement(_.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var F=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null,i.a.createElement(u,null),i.a.createElement(_.d,null,i.a.createElement(L,{path:"/",exact:!0,component:y}),i.a.createElement(L,{path:"/em",component:z}),i.a.createElement(L,{path:"/anh",component:x}),i.a.createElement(_.b,{path:"/login",component:v}))))};r.a.render(i.a.createElement(F,null),document.getElementById("root"))},78:function(e,t,a){e.exports=a(173)},83:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.384bc46e.chunk.js.map