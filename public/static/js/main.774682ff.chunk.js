(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),c=(n(17),n(2)),l=n(3),s=n(5),u=n(4),d=n(6),m=(n(8),n(1)),v=n(10),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).sendDataToServer=function(e){console.log("function - sendDataToServer");var t=JSON.stringify(e.data);console.log(t)},n.sendDataToServer=n.sendDataToServer.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(v.Survey,{json:{title:"Tell us the few details of microservice?",pages:[{name:"page1",questions:[{type:"text",isRequired:!0,name:"id"},{type:"text",isRequired:!0,name:"mdcf"},{type:"text",isRequired:!0,name:"name"},{type:"comment",isRequired:!0,name:"id"}]}]},onComplete:this.sendDataToServer}))}}]),t}(o.a.PureComponent),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("p",null,o.a.createElement("b",null,"Please fill the survey of the microservice whose health you want to monitor"))),o.a.createElement("div",{id:"surveyContainer"},o.a.createElement(h,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.774682ff.chunk.js.map