(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"862bc58f","chunk-343e6a78":"260a75d8"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-343e6a78":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-343e6a78":"91ba22b5"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("Template",[n("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu"),n("Content",[e._t("default")],2)],1)},c=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-img",{staticClass:"text-center",attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)",dark:""}},[r("v-list-item",[r("v-list-item-content",[r("v-avatar",{attrs:{size:"80"}},[r("img",{attrs:{src:n("e94e"),alt:"Husky"}})]),r("v-list-item-subtitle",{staticClass:"pt-3"},[e._v(" Organize-se :) ")])],1)],1)],1),r("v-divider"),r("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{to:t.to,link:""}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1)},u=[],l={data:function(){return{drawer:!0,items:[{title:"Tarefas",icon:"mdi-format-list-bulleted",to:"/"},{title:"Sobre",icon:"mdi-information-variant",to:"/sobre"}]}}},d=l,f=n("2877"),p=n("6544"),v=n.n(p),m=n("8212"),g=n("ce7e"),h=n("132d"),b=n("adda"),k=n("8860"),w=n("da13"),y=n("5d23"),_=n("34c3"),T=n("f774"),j=Object(f["a"])(d,s,u,!1,null,null,null),O=j.exports;v()(j,{VAvatar:m["a"],VDivider:g["a"],VIcon:h["a"],VImg:b["a"],VList:k["a"],VListItem:w["a"],VListItemContent:y["a"],VListItemIcon:_["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VNavigationDrawer:T["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[n("Header"),e._t("default")],2)},V=[],E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{staticClass:"app-bar__image",attrs:{app:"",prominent:"",height:"134",dark:"",src:n("ec3d")},scopedSlots:e._u([{key:"img",fn:function(t){var n=t.props;return[r("v-img",e._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",n,!1))]}}])},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-toolbar-title",[e._v("Lista de Tarefas")])],1)},S=[],C=n("40dc"),A=n("5bc1"),L=n("2a7f"),I={},N=Object(f["a"])(I,E,S,!1,null,null,null),P=N.exports;v()(N,{VAppBar:C["a"],VAppBarNavIcon:A["a"],VImg:b["a"],VToolbarTitle:L["a"]});var M={components:{Header:P}},B=M,$=n("f6c4"),D=Object(f["a"])(B,x,V,!1,null,null,null),H=D.exports;v()(D,{VMain:$["a"]});var q={components:{Menu:O,Content:H}},F=q,z=Object(f["a"])(F,i,c,!1,null,null,null),J=z.exports,R={components:{Template:J}},K=R,U=n("7496"),G=Object(f["a"])(K,a,o,!1,null,null,null),Q=G.exports;v()(G,{VApp:U["a"]});var W=n("9483");Object(W["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var X=n("8c4f");r["a"].use(X["a"]);var Y=[{path:"/",name:"Home",component:function(){return n.e("chunk-343e6a78").then(n.bind(null,"bb51"))}},{path:"/sobre",name:"Sobre",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],Z=new X["a"]({mode:"history",base:"/",routes:Y}),ee=Z,te=n("2f62"),ne={tasks:[]},re=n("af0d"),ae=new re["a"]("db"),oe=ae,ie={getTasks:function(e){oe.collection("tasks").get().then((function(t){return e.tasks=t}))}},ce=n("1da1"),se=(n("96cf"),{addTask:function(e,t){return Object(ce["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.title,o=t.date,n.next=4,oe.collection("tasks").add({id:(new Date).getTime(),title:a,date:o,done:!1});case 4:return n.next=6,r("getTasks");case 6:case"end":return n.stop()}}),n)})))()},editTask:function(e,t){var n=e.commit;oe.collection("tasks").doc({id:t.id}).update({title:t.title,date:t.date}).then((function(){return n("getTasks")}))},completeTask:function(e,t){var n=e.commit;console.log(t),oe.collection("tasks").doc({id:t.id}).update({done:!t.done}).then((function(){return n("getTasks")}))},removeTask:function(e,t){var n=e.commit;oe.collection("tasks").doc({id:t}).delete().then((function(){return n("getTasks")}))}});r["a"].use(te["a"]);var ue=new te["a"].Store({state:ne,mutations:ie,actions:se,modules:{}}),le=n("f309");r["a"].use(le["a"]);var de=new le["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ee,store:ue,vuetify:de,render:function(e){return e(Q)}}).$mount("#app")},e94e:function(e,t,n){e.exports=n.p+"img/avatar.4741c3c4.jpeg"},ec3d:function(e,t,n){e.exports=n.p+"img/bg.986fc175.jpeg"}});
//# sourceMappingURL=app.d71f7a2a.js.map