(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=(n(10),n(2)),i=n(1),s=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(-1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},g=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},p=function(t){var n=t.dataTransfer.getData("text");t.target.parentElement.parentElement.classList.remove("dragOver"),e.dnD(n,t.target.id)};return r.a.createElement("div",null,e.data.map((function(t,n){return r.a.createElement("div",{key:n,className:"body",id:n,draggable:!0,onDragStart:m,onDragLeave:g,onDragOver:f,onDrop:p},r.a.createElement("div",{className:"list"},r.a.createElement("div",{id:"wrapper",className:"wrapper"},r.a.createElement("label",{className:"container"},r.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(n)}}),r.a.createElement("span",{class:"checkmark"})),!1===o||u!==n?r.a.createElement("li",{id:n,style:t.completed?{textDecorationLine:"line-through",color:"#d9d9d9"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){d(e),c(!0)}(n)}},t.list):r.a.createElement("input",{autoFocus:!0,type:"text",onBlur:function(t){return function(t,n){e.changeData(t.target.value,n),c(!1),d(-1)}(t,n)},className:"editInput",onKeyDown:function(t){return function(t,n){13===t.keyCode&&(e.changeData(t.target.value,n),c(!1),d(-1))}(t,n)},defaultValue:e.data[n].list}),r.a.createElement("button",{onClick:function(){return e.editData(n)},className:"btn"},"X"))))})))},u=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(-1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},g=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},p=function(t){var n=t.dataTransfer.getData("text");t.target.parentElement.parentElement.classList.remove("dragOver"),e.dnD(n,t.target.id)};return r.a.createElement("div",null,e.data.map((function(t,n){if(!1===t.completed)return r.a.createElement("div",{className:"body",id:n,draggable:!0,onDragStart:m,onDragLeave:g,onDragOver:f,onDrop:p},r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("label",{className:"container"},r.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(n)}}),r.a.createElement("span",{class:"checkmark"})),!1===o||u!==n?r.a.createElement("li",{id:n,style:t.completed?{textDecorationLine:"line-through"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){c(!o),d(e)}(n)},draggable:!0},t.list):r.a.createElement("input",{type:"text",className:"editInput",autoFocus:!0,onBlur:function(t){return function(t,n){e.changeData(t.target.value,n),c(!1),d(-1)}(t,n)},onKeyDown:function(t){return function(t,n){13===t.keyCode&&(e.changeData(t.target.value,n),c(!1),d(-1))}(t,n)},defaultValue:e.data[n].list}),r.a.createElement("button",{onClick:function(){return e.editData(n)},className:"btn"},"X"))))})))},d=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(-1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},g=function(e){console.log(),e.target.parentElement.parentElement.classList.remove("dragOver")},p=function(t){var n=t.dataTransfer.getData("text");t.target.parentElement.parentElement.classList.remove("dragOver"),e.dnD(n,t.target.id)};return r.a.createElement("div",null,e.data.map((function(t,n){if(!0===t.completed)return r.a.createElement("div",{className:"body",id:n,draggable:!0,onDragStart:m,onDragLeave:g,onDragOver:f,onDrop:p},r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("label",{className:"container"},r.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(n)}}),r.a.createElement("span",{class:"checkmark"})),!1===o||u!==n?r.a.createElement("li",{id:n,style:t.completed?{textDecorationLine:"line-through",color:"#d9d9d9"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){c(!o),d(e)}(n)},draggable:!0},t.list):r.a.createElement("input",{type:"text",className:"editInput",autoFocus:!0,onBlur:function(t){return function(t,n){e.changeData(t.target.value,n),c(!1),d(-1)}(t,n)},onKeyDown:function(t){return function(t,n){13===t.keyCode&&(e.changeData(t.target.value,n),c(!1),d(-1))}(t,n)},defaultValue:e.data[n].list}),r.a.createElement("button",{onClick:function(){return e.editData(n)},className:"btn"},"X"))))})))},m=(n(11),"-1"),f="-1",g=!1,p={},v=13,b=function(e){for(var t=0,n=0;n<e.data.length;n++)!0===e.data[n].completed&&t++;return r.a.createElement("div",{className:"noItemsLeft"},e.data.length-t>1?r.a.createElement("p",null,e.data.length-t," items left"):r.a.createElement("p",null,e.data.length-t," item left"))},E=localStorage.getItem("todolist")?JSON.parse(localStorage.getItem("todolist")):[];var h=function(){var e=Object(a.useState)(E),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(0),h=Object(i.a)(c,2),N=h[0],D=h[1],O=Object(a.useState)(0),k=Object(i.a)(O,2),y=k[0],w=k[1],S=r.a.createRef(),C=function(e){n.splice(e,1),o(Object(l.a)(n)),localStorage.setItem("todolist",JSON.stringify(n))},j=function(e){console.log(e),!0===n[e].completed?(n[e].completed=!1,o(Object(l.a)(n)),localStorage.setItem("todolist",JSON.stringify(n))):(n[e].completed=!0,o(Object(l.a)(n)),localStorage.setItem("todolist",JSON.stringify(n)))},x=function(e){D(e)},L=function(e,t){n[t].list=e,o(n),localStorage.setItem("todolist",JSON.stringify(n))},I=function(e,t){Number(e),Number(t),n.map((function(e){return e}))};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"todos"),r.a.createElement("div",{className:"shadow"},r.a.createElement("div",{className:"header"},r.a.createElement("button",{className:"drop",onClick:function(){return function(){var e;0===y?(e=n.map((function(e,t){return!1===e.completed&&(e.completed=!0),e})),w(1)):(e=n.map((function(e,t){return!0===e.completed&&(e.completed=!1),e})),w(0)),o(e),localStorage.setItem("todolist",JSON.stringify(n))}()}},"\u25bc"),r.a.createElement("input",{id:"todo",autoComplete:"off",type:"text",placeholder:"What needs to be done?",onKeyDown:function(e){var t=n;e.keyCode===v&&(""!==e.target.value&&(t=[].concat(Object(l.a)(n),[{list:e.target.value,completed:!1}])),o(t),e.target.value=""),localStorage.setItem("todolist",JSON.stringify(t))}})),r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"content",onDragStart:function(e){m=e.target.id,f=e.target.id;var t=Number(e.target.id),a=n.map((function(e){return e}));p=Object.assign({},a.splice(t,1)[0]),a.splice(t,0,p),console.log(a,"srce",m,"desti",f),o(a)},onDragOver:function(e){if(console.log(e.target.id),e.target.id!==f&&"inner"!==e.target.id&&"wrapper"!==e.target.id){var t=n.map((function(e){return e})),a=Number(f);t.splice(a,1),f=e.target.id,a=Number(f),t.splice(a,0,p),o(t),console.log(a)}e.preventDefault()},onDragEnd:function(e){if(!1===g){var t=n.map((function(e){return e})),a=Number(f);t.splice(a,1);var r=Number(e.target.id);t.splice(r,0,p),o(t),localStorage.setItem("todolist",JSON.stringify(t))}},onDrop:function(e){if("inner"!==f&&"inner"!==e.target.id){var t=n.map((function(e){return e})),a=Number(f);t.splice(a,1),a=Number(e.target.id),f=e.target.id,t.splice(a,0,p),o(t),g=!0,localStorage.setItem("todolist",JSON.stringify(t))}}},r.a.createElement("div",{id:"inner",ref:S},0===N&&r.a.createElement(s,{data:n,editData:function(e){C(e)},sendCount:function(e){j(e)},changeData:function(e,t){return L(e,t)},dnD:function(e,t){return I(e,t)}}),1===N&&r.a.createElement(u,{data:n,editData:function(e){C(e)},sendCount:function(e){j(e)},changeData:function(e,t){return L(e,t)},dnD:function(e,t){return I(e,t)}}),2===N&&r.a.createElement(d,{data:n,editData:function(e){C(e)},sendCount:function(e){j(e)},changeData:function(e,t){return L(e,t)},dnD:function(e,t){return I(e,t)}}))),n.length>0&&r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"btns"},r.a.createElement("div",{className:"ileft"},r.a.createElement(b,{data:n}),r.a.createElement("div",{className:"three-btn"},0===N?r.a.createElement("button",{className:"all-btn active",onClick:function(){return x(0)}},"All"):r.a.createElement("button",{className:"all-btn",onClick:function(){return x(0)}},"All"),1===N?r.a.createElement("button",{className:"active-btn active",onClick:function(){return x(1)}},"Active"):r.a.createElement("button",{className:"active-btn",onClick:function(){return x(1)}},"Active"),2===N?r.a.createElement("button",{className:"comp-btn active",onClick:function(){return x(2)}},"Completed"):r.a.createElement("button",{className:"comp-btn",onClick:function(){return x(2)}},"Completed"))),function(){for(var e=0,t=0;t<n.length;t++)!0===n[t].completed&&(e+=1);return e}()>0&&r.a.createElement("button",{className:"clr-comp",onClick:function(){return function(){var e;e=n.filter((function(e,t){return!1===e.completed})),o(e),localStorage.setItem("todolist",JSON.stringify(e))}()}},"Clear completed"))))))},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todoMVC",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todoMVC","/service-worker.js");N?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}],[[5,1,2]]]);
//# sourceMappingURL=main.601577ce.chunk.js.map