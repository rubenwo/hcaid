(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],f=0,d=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),u={},s=Object(i["a"])(u,o,a,!1,null,null,null),c=s.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},["questions"===e.state?n("div",e._l(this.questions,(function(t){return n("div",{key:t.idx},[n("p",[e._v(e._s(t.question))]),n("b-form-rating",{staticClass:"mb-2",attrs:{variant:"warning"},model:{value:t.answer,callback:function(n){e.$set(t,"answer",n)},expression:"question.answer"}})],1)})),0):n("div",[e._v("Hello")]),n("b-button",{attrs:{variant:"success"},on:{click:function(t){return e.submitQuestionnaire()}}},[e._v("Button")])],1)},d=[],p=(n("96cf"),n("1da1")),v=n("bc3a"),h=n.n(v),b={name:"Home",data:function(){return{state:"questions",questions:[{idx:0,question:"How easily is the information about your city services reachable?",answer:1},{idx:1,question:"How would you rate the average cost of housing?",answer:1},{idx:2,question:"What is the overall quality of public schools in your area?",answer:1},{idx:3,question:"Do you have trust in your local police?",answer:1},{idx:4,question:"How well are the streets and sidewalks maintained in your area?",answer:1},{idx:5,question:"Are there often social community events in your area?",answer:1}]}},methods:{submitQuestionnaire:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("submitting..."),t.next=3,h.a.get("http://192.168.2.135/api/v1/devices");case 3:n=t.sent,console.log(n),console.log(e.questions);case 6:case"end":return t.stop()}}),t)})))()}},components:{}},m=b,w=Object(i["a"])(m,f,d,!1,null,null,null),y=w.exports;r["default"].use(l["a"]);var g=[{path:"/",name:"Home",component:y}],x=new l["a"]({routes:g}),_=x,q=n("2f62");r["default"].use(q["a"]);var O=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),j=n("5f5b");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(j["a"]),new r["default"]({router:_,store:O,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.63bd4090.js.map