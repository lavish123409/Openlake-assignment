(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),s=n(15),a=n.n(s),i=(n(21),n(22),n(3)),r=n.n(i),d=(n(41),n(0));function u(){var e=document.getElementById("taskMessage");r.a.post("https://open-lake-assignment.herokuapp.com/adddata",{mssg:e.value}).then((function(t){window.location.reload(),e.value=""})).catch((function(e){return console.log(e)}))}function l(e){13===e.which&&u()}var j=function(){return Object(d.jsxs)("div",{className:"add-task",children:[Object(d.jsx)("h1",{children:"Add Task"}),Object(d.jsxs)("div",{className:"input-area",children:[Object(d.jsx)("input",{type:"text",id:"taskMessage",onKeyPress:l}),Object(d.jsx)("button",{onClick:u,children:"Add Task"})]})]})},h=n(16);n(43);var b=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],o=t[1],s="https://open-lake-assignment.herokuapp.com";function a(e,t){e=!e;var n=s+"/done/".concat(t);r.a.put(n,{chk:e}).then((function(e){window.location.reload()})).catch((function(e){return console.log(e)}))}function i(e){var t="";if(e.length<=35)return e;for(var n=0;n<32;n++)t+=e[n];return t+="..."}return Object(c.useEffect)((function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER_URL:"https://open-lake-assignment.herokuapp.com"})),console.log(s),r.a.get(s+"/tasks").then((function(e){return o(e.data)})).catch((function(e){return console.log(e)}))}),[s]),Object(d.jsxs)("div",{className:"show-tasks",children:[Object(d.jsx)("h1",{children:"Tasks"}),n.map((function(e){return Object(d.jsxs)("div",{className:"task-box",id:e.id,children:[Object(d.jsxs)("h3",{children:[Object(d.jsxs)("div",{class:"tooltip",children:[i(e.task),Object(d.jsx)("span",{class:"tooltiptext",children:e.task})]})," "]}),e.done?Object(d.jsx)("input",{type:"checkbox",checked:!0,onChange:function(){return a(!0,e.id)}}):Object(d.jsx)("input",{type:"checkbox",onChange:function(){return a(!1,e.id)}}),Object(d.jsx)("button",{onClick:function(){return function(e){var t=s+"/remove/".concat(e);r.a.delete(t).then((function(e){window.location.reload()})).catch((function(e){return console.log(e)}))}(e.id)},children:"Delete"})]},e.id)}))]})};var f=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"side-area"}),Object(d.jsxs)("div",{className:"main-area",children:[Object(d.jsx)(j,{}),Object(d.jsx)(b,{})]}),Object(d.jsx)("div",{className:"side-area"})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}},[[44,1,2]]]);
//# sourceMappingURL=main.e8a03bed.chunk.js.map