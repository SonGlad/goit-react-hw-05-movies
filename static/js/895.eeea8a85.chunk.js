/*! For license information please see 895.eeea8a85.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[895],{2383:function(t,e,n){n.d(e,{MI:function(){return f},_L:function(){return c},gy:function(){return s},q5:function(){return g},yo:function(){return h}});var r=n(5861),o=n(4569),i=n.n(o);function a(){a=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new S(r||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",d="executing",g="completed",m={};function y(){}function v(){}function b(){}var x={};l(x,c,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(z([])));k&&k!==n&&r.call(k,c)&&(x=k);var L=b.prototype=y.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,n,r){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var s=p(e,n,r);if("normal"===s.type){if(o=r.done?g:"suspendedYield",s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=g,r.method="throw",r.arg=s.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=p(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function z(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return v.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},j(E.prototype),l(E.prototype,u,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(L),l(L,s,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=z,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:z(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function c(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(a().mark((function t(){var e,n,r=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,i().get("/trending/movie/day",{params:{page:e}});case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function s(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?query",{params:{query:e}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(e,"/credits"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(e,"/reviews"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3",i().defaults.params={api_key:"703a3fe5b183eb2cb4ee32aa4163bb8d",include_adult:!1}},8059:function(t,e,n){n.d(e,{Z:function(){return p}});var r,o=n(9439),i=n(2791),a=n(7689),c=n(1087),u=n(168),s=n(5867).zo.section(r||(r=(0,u.Z)(["\ntext-align: center;\n\n.hero-section-title{\n    font-weight: 800;\n    margin-bottom: 20px;\n}\n.movie-list{\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n\n.movie-preview {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    max-width: 210px;\n    background-color: silver;\n    border-radius: 15px;\n    overflow: hidden;\n}\n\n.movie-img{\n    width: 100%;\n    height: auto;\n}\n\n.film-name{\n    font-weight: 700;\n    text-align: center;\n    min-height: 48px;\n    width: 100%;\n}\n"]))),l=n(567),f=n(184),p=function(t){var e=t.trendFilms,n=t.searchResults,r=(t.showTitle,(0,a.TH)()),u=(0,i.useState)([]),p=(0,o.Z)(u,2),h=p[0],d=p[1],g=(0,i.useState)(!1),m=(0,o.Z)(g,2),y=m[0],v=m[1],b="/"===r.pathname;(0,i.useEffect)((function(){var t=e||n;if(t){var r=t.map((function(t){return t.poster_path?new Promise((function(e){var n=new Image;n.src="https://image.tmdb.org/t/p/original/".concat(t.poster_path),n.onload=function(){return e()},n.onerror=function(){return e()}})):Promise.resolve()}));Promise.all(r).then((function(){v(!0)})).catch((function(){console.log("Error loading images")})),d(t)}}),[e,n]);return y&&(0,f.jsxs)(s,{children:[b&&(0,f.jsx)("h1",{className:"hero-section-title",children:"Trending Movies"}),(0,f.jsx)("ul",{className:"movie-list",children:h.map((function(t){return(0,f.jsx)("li",{className:"movie-item",children:(0,f.jsxs)("div",{className:"movie-preview",children:[(0,f.jsx)(c.rU,{style:{textDecoration:"none",color:"black"},to:(e=t.id,"/movies/".concat(e)),state:{from:r},children:(0,f.jsx)("img",{className:"movie-img",width:210,height:315,loading:"lazy",src:t.poster_path?"https://image.tmdb.org/t/p/original/".concat(t.poster_path):l,alt:t.title,onError:function(t){t.target.src=l}})}),(0,f.jsx)("p",{className:"film-name",children:t.title})]})},t.id);var e}))})]})}},5895:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var r,o=n(5861),i=n(9439),a=n(2791),c=n(1087),u=n(2383),s=["title","titleId"];function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function p(t,e){var n=t.title,o=t.titleId,i=f(t,s);return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,viewBox:"0 0 18 18",fill:"none",ref:e,"aria-labelledby":o},i),n?a.createElement("title",{id:o},n):null,r||(r=a.createElement("path",{d:"M16.2826 15.2178L13.5001 12.4578C14.5801 11.1111 15.1032 9.40177 14.9617 7.68127C14.8201 5.96077 14.0248 4.35988 12.7392 3.20778C11.4536 2.05567 9.77541 1.43993 8.04974 1.48715C6.32408 1.53437 4.68209 2.24097 3.46141 3.46165C2.24072 4.68234 1.53412 6.32432 1.4869 8.04999C1.43968 9.77565 2.05543 11.4538 3.20753 12.7394C4.35964 14.025 5.96053 14.8204 7.68103 14.9619C9.40153 15.1034 11.1109 14.5804 12.4576 13.5003L15.2176 16.2603C15.2873 16.3306 15.3702 16.3864 15.4616 16.4245C15.553 16.4625 15.651 16.4821 15.7501 16.4821C15.8491 16.4821 15.9471 16.4625 16.0385 16.4245C16.1299 16.3864 16.2128 16.3306 16.2826 16.2603C16.4177 16.1204 16.4933 15.9335 16.4933 15.739C16.4933 15.5445 16.4177 15.3576 16.2826 15.2178ZM8.25005 13.5003C7.2117 13.5003 6.19667 13.1924 5.33331 12.6155C4.46995 12.0386 3.79704 11.2187 3.39968 10.2594C3.00232 9.30007 2.89836 8.24447 3.10093 7.22607C3.3035 6.20767 3.80351 5.27221 4.53774 4.53798C5.27197 3.80376 6.20743 3.30374 7.22583 3.10117C8.24423 2.8986 9.29983 3.00257 10.2591 3.39993C11.2185 3.79729 12.0384 4.47019 12.6153 5.33355C13.1921 6.19691 13.5001 7.21194 13.5001 8.25029C13.5001 9.64268 12.9469 10.978 11.9624 11.9626C10.9778 12.9472 9.64244 13.5003 8.25005 13.5003Z"})))}var h,d=a.forwardRef(p),g=(n.p,n(7596)),m=n(168),y=n(5867).zo.div(h||(h=(0,m.Z)(["\n    padding: 30px 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    position: relative;\n    margin-bottom: 30px;\n\n    .search-icon{\n        fill: #fff;\n        transition: fill 0.3s, fill-opacity 0.3s;\n        &:hover,\n        &:focus{\n            fill: #050505; \n            fill-opacity: 0.5;\n        }\n    }\n    .form{\n        display: flex;\n        gap: 10px;\n\n        & button{\n           max-height: 40px;\n        }\n    }\n\n    .input{\n        width: 340px; \n        height: 40px;\n        background: rgba(0,0,0,0.3);\n        border: none;\n        outline: none;\n        padding: 5px;\n        font-size: 20px;\n        color: #fff;\n        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\n        border: 1px solid rgba(0,0,0,0.3);\n        border-radius: 4px;\n        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);\n        -webkit-transition: box-shadow .5s ease;\n        -moz-transition: box-shadow .5s ease;\n        -o-transition: box-shadow .5s ease;\n        -ms-transition: box-shadow .5s ease;\n        transition: box-shadow .5s ease;\n    }\n\n    .input:focus { \n        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); \n    }\n\n    .button { \n        zoom: 1; \n        margin-bottom: 0; \n        line-height: 18px; \n        color: #333333; \n        text-align: center;\n        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); \n        vertical-align: middle; \n        background-color: #f5f5f5; \n        background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); \n        background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); \n        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); \n        background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\n        background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); \n        background-image: linear-gradient(top, #ffffff, #e6e6e6); \n        background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0);\n        border-color: #e6e6e6 #e6e6e6 #e6e6e6; \n        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); \n        border: 1px solid #e6e6e6; \n        -webkit-border-radius: 4px; \n        -moz-border-radius: 4px; \n        border-radius: 4px; \n        -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n        -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); \n        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; \n        *margin-left: .3em; \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 22px;\n        gap: 5px;\n    }\n\n    .button-large { \n        line-height: normal; \n        -webkit-border-radius: 5px; \n        -moz-border-radius: 5px; \n        border-radius: 5px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 22px;\n        gap: 5px; \n    }\n\n    .button:hover { \n        color: #333333;\n        text-decoration: none;  \n        background-color: #e6e6e6; \n        background-position: 0 -15px; \n        -webkit-transition: background-position 0.1s linear; \n        -moz-transition: background-position 0.1s linear; \n        -ms-transition: background-position 0.1s linear; \n        -o-transition: background-position 0.1s linear; \n        transition: background-position 0.1s linear;\n    }\n\n    .button-primary, .button-primary:hover { \n        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); \n        color: #ffffff; \n    }\n\n    .button-primary { \n        background-color: #4a77d4; \n        background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); \n        background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); \n        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); \n        background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); \n        background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); \n        background-image: linear-gradient(top, #6eb6de, #4a77d4); \n        background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  \n        border: 1px solid #3762bc; \n        text-shadow: 1px 1px 1px rgba(0,0,0,0.4); \n        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 22px;\n        gap: 5px;\n    }\n\n    .button-primary:hover, .button-primary:active, .button-primary.active{ \n        filter: none; \n        background-color: #4a77d4;\n    }\n\n    .button-block { \n        width: 200px; \n        height: 40px;\n        display:block; \n    }\n\n* { -webkit-box-sizing:border-box; \n    -moz-box-sizing:border-box; \n    -ms-box-sizing:border-box;\n    -o-box-sizing:border-box; \n    box-sizing:border-box; \n    }\n"]))),v=n(184),b=function(t){var e=t.onSubmit,n=(0,a.useState)(""),r=(0,i.Z)(n,2),o=r[0],c=r[1];return(0,v.jsx)(y,{children:(0,v.jsxs)("form",{className:"form",onSubmit:function(t){if(t.preventDefault(),""===o.trim())return g.Am.info("Please enter key words for search");e(o),c("")},children:[(0,v.jsxs)("button",{type:"submit",className:"button button-large button-primary",children:[(0,v.jsx)(d,{className:"search-icon",width:"35",height:"35"})," Search"]}),(0,v.jsx)("input",{className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:o,onChange:function(t){c(t.target.value.toLowerCase())}})]})})},x=n(8059);function w(){w=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new S(r||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="executing",d="completed",g={};function m(){}function y(){}function v(){}var b={};s(b,a,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(z([])));k&&k!==n&&r.call(k,a)&&(b=k);var L=v.prototype=m.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,n,r){var o=p;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var s=f(e,n,r);if("normal"===s.type){if(o=r.done?d:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=d,r.method="throw",r.arg=s.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function z(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=v,o(L,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},j(E.prototype),s(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=z,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:z(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}var k=function(){var t=(0,c.lr)(),e=(0,i.Z)(t,2),n=e[0],r=e[1],s=(0,a.useState)([]),l=(0,i.Z)(s,2),f=l[0],p=l[1],h=(0,a.useState)(!1),d=(0,i.Z)(h,2),g=d[0],m=d[1],y=n.get("query"),k=(0,a.useCallback)(function(){var t=(0,o.Z)(w().mark((function t(e){var n;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,u.gy)(e);case 4:n=t.sent,p(n.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}(),[]);return(0,a.useEffect)((function(){m(!0),f.length||m(!1)}),[f]),(0,a.useEffect)((function(){y&&k(y)}),[y,k]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b,{onSubmit:function(t){r({query:t})},text:"Find movies by name"}),g&&(0,v.jsx)(x.Z,{searchResults:f})]})}},567:function(t,e,n){t.exports=n.p+"static/media/no-poster.d7e60210de6e7d4fcc19.jpg"}}]);
//# sourceMappingURL=895.eeea8a85.chunk.js.map