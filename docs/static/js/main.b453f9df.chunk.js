(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),l=a(8),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&t((function(e){return[i].concat(Object(l.a)(e))}))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}}))},s=a(4),m=a.n(s),p=a(7),d=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,r,c,i,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"lKp7RnkgdthwFEDeMOs1osadjsrNi3Zy",a=encodeURI(t),"10",n="https://api.giphy.com/v1/gifs/search?api_key=".concat("lKp7RnkgdthwFEDeMOs1osadjsrNi3Zy","&q=").concat(a,"&limit=").concat("10"),e.next=6,fetch(n);case 6:return r=e.sent,e.next=9,r.json();case 9:return c=e.sent,i=c.data,u=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.url,a=e.title;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("p",null,a))},g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){console.log(e),c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"},t),i&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)(["One punch"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};a(15);i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b453f9df.chunk.js.map