(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/RANGO.b80953d2.png"},26:function(e,t,a){e.exports=a.p+"static/media/makeupbrush.be3e430a.png"},39:function(e,t,a){e.exports=a.p+"static/media/model.c55e9c85.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/eye-shadow.0e4ceae7.png"},41:function(e,t,a){e.exports=a.p+"static/media/lipgloss.40d45dd5.png"},42:function(e,t,a){e.exports=a.p+"static/media/makeupkit.852e0210.png"},43:function(e,t,a){e.exports=a.p+"static/media/nailpolish.ed9d8f0c.png"},44:function(e,t,a){e.exports=a.p+"static/media/ring light.fe29f478.png"},45:function(e,t,a){e.exports=a.p+"static/media/nikead.343741e1.jpg"},48:function(e,t,a){e.exports=a(73)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(36),l=a.n(r),i=(a(53),a(8)),o=(a(54),a(16)),s=a(7),m=(a(55),a(22)),u=a.n(m),d=a(37),p=a.n(d),E=a(38),h=a.n(E),g=Object(n.createContext)(),_=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(g.Provider,{value:Object(n.useReducer)(t,a)},r)},f=function(){return Object(n.useContext)(g)},v=a(30),b=(v.a.initializeApp({apiKey:"AIzaSyDhz8NNi5lb8Fhxcq_kk-tZDvkakdc2iy8",authDomain:"clone-e05a4.firebaseapp.com",databaseURL:"https://clone-e05a4.firebaseio.com",projectId:"clone-e05a4",storageBucket:"clone-e05a4.appspot.com",messagingSenderId:"457130121481",appId:"1:457130121481:web:33344232375e91af52dbd8",measurementId:"G-D68XS4HEBB"}),v.a.auth());var k=function(){var e=f(),t=Object(i.a)(e,1)[0],a=t.basket,n=t.user;return console.log(a,n),c.a.createElement("nav",{className:"header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:u.a,alt:""})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(p.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(o.b,{to:!n&&"/login",className:"header__link"},c.a.createElement("div",{onClick:function(){n&&b.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__option1"},"Hello ",null===n||void 0===n?void 0:n.email),c.a.createElement("span",{className:"header__option2"},n?"Sign Out":"Sign In"))),c.a.createElement(o.b,{className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__option1"},"Returns"),c.a.createElement("span",{className:"header__option2"},"& Orders"))),c.a.createElement(o.b,{className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__option1"},"Your"),c.a.createElement("span",{className:"header__option2"},"Prime")))),c.a.createElement(o.b,{to:"/checkout",className:"header__link"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(h.a,null),c.a.createElement("span",{className:"header__option2 header__basketCount"},null===a||void 0===a?void 0:a.length))))},N=(a(65),a(39)),S=a.n(N),O=a(26),y=a.n(O),j=a(40),C=a.n(j),x=a(41),w=a.n(x),A=a(42),B=a.n(A),I=a(43),P=a.n(I),R=a(44),T=a.n(R);a(66);var D=function(e){var t=e.id,a=e.title,n=e.price,r=e.rating,l=e.image,o=f(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{class:"product__info"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"GHC"),c.a.createElement("strong",null,n)),c.a.createElement("div",{className:"product__rating"},Array(r).fill().map((function(){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:l,alt:""}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:t,title:a,price:n,image:l,rating:r}})}},"Add to basket"))};var U=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home__cover",src:S.a,alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(D,{id:"12345",title:"Single MakeUp Blush Brush",price:8,rating:3,image:y.a}),c.a.createElement(D,{id:"163953",title:"Nine Eye-shadows (Different Colors)",price:35,rating:4,image:C.a})),c.a.createElement("div",{className:"home__row"},c.a.createElement(D,{id:"183874",title:"CRUNCHI Lipgloss",price:7,rating:3,image:w.a}),c.a.createElement(D,{id:"338243",title:"Full MakeUp Kit",price:45,rating:5,image:B.a}),c.a.createElement(D,{id:"377288",title:"Six Sets of Nail Polish",price:50,rating:4,image:P.a})),c.a.createElement("div",{className:"home__row"},c.a.createElement(D,{id:"123454",title:"Ring Light/Studio Light",price:25,rating:5,image:T.a})))},z=(a(67),a(45)),M=a.n(z);a(68);var H=function(e){var t=e.id,a=e.title,n=e.price,r=e.rating,l=e.image,o=f(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{class:"checkoutProduct__image",src:l,alt:""}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},a),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"GHC"),c.a.createElement("strong",null,n)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(r).fill().map((function(){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from basket")))},K=(a(69),a(46)),F=a.n(K),G=a(31),L=a(24),W=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)};var Y=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(L.a)({},e,{user:t.user});case"ADD_TO_BASKET":return Object(L.a)({},e,{basket:[].concat(Object(G.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=Object(G.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===t.id}));return n>=0?a.splice(n,1):console.warn("Cant remove product (id: ${action.id}) as its not in basket"),Object(L.a)({},e,{basket:a});default:return e}};var J=function(){var e=f(),t=Object(i.a)(e,2),a=t[0].basket;return t[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(F.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",a.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:W(a),displayType:"text",thousandSeparator:!0,prefix:"GHC"}),c.a.createElement("button",null,"Proceed to Checkout"))};var V=function(){var e=f(),t=Object(i.a)(e,1)[0].basket;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:M.a,alt:""}),0===(null===t||void 0===t?void 0:t.length)?c.a.createElement("div",null,c.a.createElement("h2",null,"Your Shopping Basket is empty."),c.a.createElement("p",null,'You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.')):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket."),t.map((function(e){return c.a.createElement(H,{id:e.id,title:e.title,price:e.price,rating:e.rating,image:e.image})})))),t.length>0&&c.a.createElement("div",{className:"checkout__right"},c.a.createElement(J,null)))};a(71);var $=function(){var e=Object(s.f)(),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),p=d[0],E=d[1];return c.a.createElement("div",{className:"login"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:u.a,alt:""})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{value:r,onChange:function(e){return l(e.target.value)},type:"email"}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{value:p,onChange:function(e){return E(e.target.value)},type:"password"}),c.a.createElement("button",{onClick:function(t){t.preventDefault(),b.signInWithEmailAndPassword(r,p).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton"},"Sign In"),c.a.createElement("p",null,"By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(t){t.preventDefault(),b.createUserWithEmailAndPassword(r,p).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account"))))};var q=function(){var e=f(),t=Object(i.a)(e,2),a=t[0].user,r=t[1];return Object(n.useEffect)((function(){var e=b.onAuthStateChanged((function(e){r(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return console.log("USER IS  >> ",a),function(){e()}}),[]),c.a.createElement(o.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/checkout"},c.a.createElement(k,null),c.a.createElement(V,null)),c.a.createElement(s.a,{path:"/login"},c.a.createElement($,null)),c.a.createElement(s.a,{path:"/"},c.a.createElement(k,null),c.a.createElement(U,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{basket:[],user:null},reducer:Y},c.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.686d119b.chunk.js.map