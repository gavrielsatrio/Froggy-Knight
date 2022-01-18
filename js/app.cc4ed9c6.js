(function(e){function t(t){for(var o,i,l=t[0],n=t[1],f=t[2],c=0,v=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,f||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,l=1;l<r.length;l++){var n=r[l];0!==a[n]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},a={app:0},s=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var u=n;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-fluid vh-100"},[r("div",{staticClass:"row",attrs:{id:"appContainer"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-3"},[e._m(0),r("div",{staticClass:"controllingPanel"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[e._v(" Start Place : ")]),e._m(1),r("div",{staticClass:"col-lg-12 d-flex justify-content-end mt-3"},[r("button",{staticClass:"btn btn-success",attrs:{id:"btnPlaceFrog"},on:{click:function(t){return e.PlaceFrog()}}},[e._v("Place Frog 🐸")])])])]),r("div",{staticClass:"controllingPanel"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[e._v(" End Place : ")]),e._m(2),r("div",{staticClass:"col-lg-12 d-flex justify-content-end mt-3"},[r("button",{staticClass:"btn btn-primary",attrs:{id:"btnPlaceFrog"},on:{click:function(t){return e.StartTravel()}}},[e._v("Start Travel ✈")])])])])]),e._m(3)])])])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"header"}},[r("h1",[e._v("Froggy Knight")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-lg-12"},[r("input",{staticClass:"form-control",attrs:{type:"text",id:"txtStartPlace",maxlength:"2",value:"A1",autocomplete:"off"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-lg-12"},[r("input",{staticClass:"form-control",attrs:{type:"text",id:"txtEndPlace",maxlength:"2",value:"B3",autocomplete:"off"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-lg-9"},[r("div",{staticClass:"m-5 m-lg-0",attrs:{id:"mainContent"}})])}],i=(r("d3b7"),r("159b"),r("4de4"),r("c740"),r("7be8")),l=r.n(i),n=r("5755"),f=r.n(n),u={name:"App",data:function(){return{frogXStart:1,frogYStart:1,frogXEnd:2,frogYEnd:3,minimumMovesCount:100,isAlreadyArrive:!1,allMoves:[]}},mounted:function(){this.LoadBoard(),this.LoadFrogPosition(this.frogXStart,this.frogYStart)},methods:{LoadBoard:function(){var e=document.querySelector("#mainContent");e.innerHTML="";for(var t=0;t<9;t++){var r=document.createElement("div");r.className="d-flex justify-content-center";for(var o=0;o<9;o++){var a=document.createElement("div");if(a.className="chessBoardPlates d-flex align-items-center justify-content-center",0==o&&8!=t)a.innerHTML=8-t;else if(8==t)0!=o&&(a.innerHTML=String.fromCharCode(o+64));else{var s=document.createElement("img");if(s.id="chessBoardPlateImage-"+o+(8-t),s.src=l.a,s.className="chessBoardPlatesImage",a.appendChild(s),1==o&&8-t==1){var i=document.createElement("img");i.src=f.a,i.id="frogImage",a.appendChild(i)}}r.appendChild(a)}e.appendChild(r)}},LoadFrogPosition:function(e,t){var r=document.querySelector("#frogImage");r.style.transform="translate("+69*(e-1)+"px, "+-69*(t-1)+"px)",r.style.animation="frogJump 1.5s ease-in-out",setTimeout((function(){r.style.animation=""}),1400)},PlaceFrog:function(){var e=document.querySelector("#txtStartPlace");if(""!=e.value&&2==e.value.length){var t=e.value[0].charCodeAt(0)-64,r=parseInt(e.value[1]);t>=1&&t<=8&&r>=1&&r<=8?(this.frogXStart=t,this.frogYStart=r,this.LoadFrogPosition(this.frogXStart,this.frogYStart)):(alert("Start place invalid ..."),e.focus())}else alert("Start place invalid ..."),e.focus()},StartTravel:function(){var e=this;this.isAlreadyArrive=!1,this.minimumMovesCount=100,this.allMoves=[];var t=document.querySelector("#txtStartPlace");if(""!=t.value&&2==t.value.length){var r=t.value[0].charCodeAt(0)-64,o=parseInt(t.value[1]);if(r>=1&&r<=8&&o>=1&&o<=8){var a=document.querySelector("#txtEndPlace");if(""!=a.value&&2==a.value.length){var s=a.value[0].charCodeAt(0)-64,i=parseInt(a.value[1]);s>=1&&s<=8&&i>=1&&i<=8?function(){e.frogXStart=r,e.frogYStart=o,e.frogXEnd=s,e.frogYEnd=i;var t=document.querySelectorAll(".chessBoardPlatesImage");t.forEach((function(e){e.style.filter="brightness(70%)"})),e.LoadFrogPosition(e.frogXStart,e.frogYStart),e.Travel(e.frogXStart,e.frogYStart,0);var a=[],l=e.allMoves[e.allMoves.findIndex((function(t){return t.afterX==e.frogXEnd&&t.afterY==e.frogYEnd&&t.count==e.minimumMovesCount}))];a.unshift(l);var n=l.beforeX,f=l.beforeY,u=l.count;while(u>1){u--;var c=e.allMoves[e.allMoves.findIndex((function(e){return e.afterX==n&&e.afterY==f&&e.count==u}))];n=c.beforeX,f=c.beforeY,a.unshift(c)}a.forEach((function(t,r){var o=document.querySelector("#chessBoardPlateImage-"+t.beforeX+t.beforeY);o.style.filter="brightness(100%)";var a=document.querySelector("#chessBoardPlateImage-"+t.afterX+t.afterY);a.style.filter="brightness(100%)",setTimeout((function(){e.LoadFrogPosition(t.afterX,t.afterY)}),1500*(r+1))}))}():(alert("End place invalid ..."),a.focus())}else alert("End place invalid ..."),a.focus()}else alert("Start place invalid ..."),t.focus()}else alert("Start place invalid ..."),t.focus()},CheckArrive:function(e,t,r){e==this.frogXEnd&&t==this.frogYEnd?(r<this.minimumMovesCount&&(this.minimumMovesCount=r),this.isAlreadyArrive=!0):this.isAlreadyArrive=!1},Travel:function(e,t,r){if(this.CheckArrive(e,t,r),!(r>6)&&1!=this.isAlreadyArrive)if(this.frogXEnd>e)this.frogYEnd>t?(t+2<=8&&e+1<=8&&(this.Travel(e+1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t+2,moveName:"upright",count:r+1})),e+2<=8&&t+1<=8&&(this.Travel(e+2,t+1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+2,afterY:t+1,moveName:"rightup",count:r+1})),t+2<=8&&e-1>=1&&(this.Travel(e-1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t+2,moveName:"upleft",count:r+1})),e+2<=8&&t-1>=1&&(this.Travel(e+2,t-1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+2,afterY:t-1,moveName:"rightdown",count:r+1})),t-2>=1&&e-1>=1&&(this.Travel(e-1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t-2,moveName:"downleft",count:r+1}))):this.frogYEnd<t?(t-2>=1&&e+1<=8&&(this.Travel(e+1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t-2,moveName:"downright",count:r+1})),e+2<=8&&t-1>=1&&(this.Travel(e+2,t-1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+2,afterY:t-1,moveName:"rightdown",count:r+1})),e+2<=8&&t+1<=8&&(this.Travel(e+2,t+1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+2,afterY:t+1,moveName:"rightup",count:r+1})),t-2>=1&&e-1>=1&&(this.Travel(e-1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t-2,moveName:"downleft",count:r+1})),t+2<=8&&e-1>=1&&(this.Travel(e-1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t+2,moveName:"upleft",count:r+1}))):this.frogYEnd==t&&(t-2>=1&&e+1<=8&&(this.Travel(e+1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t-2,moveName:"downright",count:r+1})),e+2<=8&&t-1>=1&&(this.Travel(e+2,t-1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+2,afterY:t-1,moveName:"rightdown",count:r+1})),t+2<=8&&e+1<=8&&(this.Travel(e+1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t+2,moveName:"upright",count:r+1})),e+2<=8&&t+1<=8&&(this.Travel(e+2,t+1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+2,afterY:t+1,moveName:"rightup",count:r+1})),t+2<=8&&e-1>=1&&(this.Travel(e-1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t+2,moveName:"upleft",count:r+1})));else if(this.frogXEnd<e)this.frogYEnd>t?(e-2>=1&&t+1<=8&&(this.Travel(e-2,t+1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-2,afterY:t+1,moveName:"leftup",count:r+1})),t+2<=8&&e-1>=1&&(this.Travel(e-1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t+2,moveName:"upleft",count:r+1})),t+2<=8&&e+1<=8&&(this.Travel(e+1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t+2,moveName:"upright",count:r+1})),e-2>=1&&t-1>=1&&(this.Travel(e-2,t-1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-2,afterY:t-1,moveName:"leftdown",count:r+1})),t-2>=1&&e+1<=8&&(this.Travel(e+1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t-2,moveName:"downright",count:r+1}))):this.frogYEnd<t?(e-2>=1&&t-1>=1&&(this.Travel(e-2,t-1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-2,afterY:t-1,moveName:"leftdown",count:r+1})),t-2>=1&&e-1>=1&&(this.Travel(e-1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t-2,moveName:"downleft",count:r+1})),t+2<=8&&e+1<=8&&(this.Travel(e+1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t+2,moveName:"upright",count:r+1})),e-2>=1&&t+1<=8&&(this.Travel(e-2,t+1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-2,afterY:t+1,moveName:"leftup",count:r+1})),t-2>=1&&e+1<=8&&(this.Travel(e+1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t-2,moveName:"downright",count:r+1}))):this.frogYEnd==t&&(e-2>=1&&t-1>=1&&(this.Travel(e-2,t-1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-2,afterY:t-1,moveName:"leftdown",count:r+1})),t-2>=1&&e-1>=1&&(this.Travel(e-1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t-2,moveName:"downleft",count:r+1})),e-2>=1&&t+1<=8&&(this.Travel(e-2,t+1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-2,afterY:t+1,moveName:"leftup",count:r+1})),t+2<=8&&e-1>=1&&(this.Travel(e-1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t+2,moveName:"upleft",count:r+1})),t+2<=8&&e+1<=8&&(this.Travel(e+1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t+2,moveName:"upright",count:r+1})),t-2>=1&&e+1<=8&&(this.Travel(e+1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t-2,moveName:"downright",count:r+1})));else if(this.frogXEnd==e)if(this.frogYEnd>t)e-2>=1&&t+1<=8&&(this.Travel(e-2,t+1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-2,afterY:t+1,moveName:"leftup",count:r+1})),t+2<=8&&e-1>=1&&(this.Travel(e-1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t+2,moveName:"upleft",count:r+1})),t+2<=8&&e+1<=8&&(this.Travel(e+1,t+2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t+2,moveName:"upright",count:r+1})),e+2<=8&&t+1<=8&&(this.Travel(e+2,t+1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+2,afterY:t+1,moveName:"rightup",count:r+1})),e+2<=8&&t-1>=1&&(this.Travel(e+2,t-1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+2,afterY:t-1,moveName:"rightdown",count:r+1}));else if(this.frogYEnd<t)e-2>=1&&t-1>=1&&(this.Travel(e-2,t-1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-2,afterY:t-1,moveName:"leftdown",count:r+1})),t-2>=1&&e-1>=1&&(this.Travel(e-1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e-1,afterY:t-2,moveName:"downleft",count:r+1})),t-2>=1&&e+1<=8&&(this.Travel(e+1,t-2,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+1,afterY:t-2,moveName:"downright",count:r+1})),e+2<=8&&t-1>=1&&(this.Travel(e+2,t-1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+2,afterY:t-1,moveName:"rightdown",count:r+1})),e+2<=8&&t+1<=8&&(this.Travel(e+2,t+1,r+1),this.allMoves.push({beforeX:e,beforeY:t,afterX:e+2,afterY:t+1,moveName:"rightup",count:r+1}));else if(this.frogYEnd==t&&r<this.minimumMovesCount)return void(this.minimumMovesCount=r)}}},c=u,v=(r("034f"),r("2877")),h=Object(v["a"])(c,a,s,!1,null,null,null),m=h.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(m)}}).$mount("#app")},5755:function(e,t,r){e.exports=r.p+"img/frog.332b44fc.png"},"7be8":function(e,t,r){e.exports=r.p+"img/lilypad2.2ae761b3.png"},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.cc4ed9c6.js.map