(function(){"use strict";var n={5466:function(n,t,e){var i=e(144),r=e(998),o=e(2928),a=function(){var n=this,t=n._self._c;return t(r.Z,[t(o.Z,[t("HelloWorld")],1)],1)},s=[],u=e(8762),l=e(9582),c=e(2765),d=e(9202),f=e(6252),h=e(6746),v=function(){var n=this,t=n._self._c;return t(c.Z,{directives:[{def:h.Z,name:"resize",rawName:"v-resize",value:n.onResize,expression:"onResize"}],staticClass:"pa-0",attrs:{fluid:""}},[t("div",{staticClass:"outer",style:n.OUTER_STYLE},[t("div",{staticClass:"inner",style:n.INNER_STYLE},[t("div",[t("ul",[t("li",[n._v("innerCardHeight: "+n._s(n.innerCardHeight))]),t("li",[n._v("innerCardMaxHeight: "+n._s(n.innerCardMaxHeight))])])]),t("div",[t("ul",[t("li",[n._v("outer: "+n._s(n.outer))]),t("li",[n._v("inner: "+n._s(n.inner))])])]),t(f.Z,{attrs:{solo:""},model:{value:n.ratio,callback:function(t){n.ratio=t},expression:"ratio"}}),t("div",{staticClass:"aspect-test",style:n.AS_STYLE}),t("div",{staticClass:"dialog-area"},[t(u.Z,{on:{click:n.dialogOpen}},[n._v("Dialog")]),t(d.Z,{attrs:{transition:"fade-transition",width:"auto","max-width":"80%"},model:{value:n.dialog,callback:function(t){n.dialog=t},expression:"dialog"}},[t(l.Z,{staticClass:"dialog-card",attrs:{height:n.innerCardHeight,"max-height":n.innerCardMaxHeight}})],1)],1)],1)])])},p=[],g={name:"HelloWorld",data:()=>({inner:{x:0,y:0},outer:{x:0,y:0},ratio:"1/1",dialog:!1}),mounted(){this.onResize()},computed:{OUTER_STYLE(){const n=this.outer.x+"px",t=this.outer.y+"px";return console.log(n,t),{width:n,height:t}},INNER_STYLE(){const n=this.inner.x+"px",t=this.inner.y+"px";return console.log(n,t),{width:n,height:t}},AS_STYLE(){const n=this.inner.y/5+"px",t=this.ratio;return console.log(n,t),{height:n,aspectRatio:t}},innerCardHeight:function(){const n=4/3;let t=this.inner.x;const e=t/n;return e},innerCardMaxHeight:function(){return Math.floor(.9*this.inner.y)}},methods:{onResize:function(){this.inner={x:window.innerWidth,y:window.innerHeight},this.outer={x:window.outerWidth,y:window.outerHeight}},dialogOpen:function(){this.dialog=!0}}},x=g,y=e(1001),_=(0,y.Z)(x,v,p,!1,null,"412ca160",null),w=_.exports,b={name:"App",components:{HelloWorld:w},data:()=>({})},m=b,O=(0,y.Z)(m,a,s,!1,null,null,null),C=O.exports,Z=e(8864);i.ZP.use(Z.Z);var H=new Z.Z({});i.ZP.config.productionTip=!1,new i.ZP({vuetify:H,render:n=>n(C)}).$mount("#app")}},t={};function e(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return n[i](o,o.exports,e),o.exports}e.m=n,function(){var n=[];e.O=function(t,i,r,o){if(!i){var a=1/0;for(c=0;c<n.length;c++){i=n[c][0],r=n[c][1],o=n[c][2];for(var s=!0,u=0;u<i.length;u++)(!1&o||a>=o)&&Object.keys(e.O).every((function(n){return e.O[n](i[u])}))?i.splice(u--,1):(s=!1,o<a&&(a=o));if(s){n.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=n.length;c>0&&n[c-1][2]>o;c--)n[c]=n[c-1];n[c]=[i,r,o]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,i){var r,o,a=i[0],s=i[1],u=i[2],l=0;if(a.some((function(t){return 0!==n[t]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(u)var c=u(e)}for(t&&t(i);l<a.length;l++)o=a[l],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(c)},i=self["webpackChunkvuetify_resize_sandbox"]=self["webpackChunkvuetify_resize_sandbox"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(5466)}));i=e.O(i)})();
//# sourceMappingURL=app.62ca9283.js.map