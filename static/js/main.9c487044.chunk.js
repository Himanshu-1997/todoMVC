(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=(a(10),a(2)),i=a(1),s=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(-1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},g=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},p=function(e){e.dataTransfer.getData("text");e.target.parentElement.parentElement.classList.remove("dragOver")};return r.a.createElement("div",null,e.data.map((function(t,a){return r.a.createElement("div",{key:a,className:"body",id:a,draggable:!0,onDragStart:m,onDragLeave:g,onDragOver:f,onDrop:p},r.a.createElement("div",{className:"list"},r.a.createElement("div",{id:"wrapper",className:"wrapper"},r.a.createElement("label",{className:"container"},r.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),r.a.createElement("span",{class:"checkmark"})),!1===o||u!==a?r.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through",color:"#d9d9d9"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){d(e),c(!0)}(a)}},t.list):r.a.createElement("input",{autoFocus:!0,type:"text",onBlur:function(t){return function(t,a){e.changeData(t.target.value,a),c(!1),d(-1)}(t,a)},className:"editInput",onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),d(-1))}(t,a)},defaultValue:e.data[a].list}),r.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"X"))))})))},u=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(-1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},g=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},p=function(e){e.dataTransfer.getData("text");e.target.parentElement.parentElement.classList.remove("dragOver")};return r.a.createElement("div",null,e.data.map((function(t,a){if(!1===t.completed)return r.a.createElement("div",{className:"body",id:a,draggable:!0,onDragStart:m,onDragLeave:g,onDragOver:f,onDrop:p},r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("label",{className:"container"},r.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),r.a.createElement("span",{class:"checkmark"})),!1===o||u!==a?r.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){c(!o),d(e)}(a)},draggable:!0},t.list):r.a.createElement("input",{type:"text",className:"editInput",autoFocus:!0,onBlur:function(t){return function(t,a){e.changeData(t.target.value,a),c(!1),d(-1)}(t,a)},onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),d(-1))}(t,a)},defaultValue:e.data[a].list}),r.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"X"))))})))},d=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(-1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},g=function(e){console.log(),e.target.parentElement.parentElement.classList.remove("dragOver")},p=function(e){e.dataTransfer.getData("text");e.target.parentElement.parentElement.classList.remove("dragOver")};return r.a.createElement("div",null,e.data.map((function(t,a){if(!0===t.completed)return r.a.createElement("div",{className:"body",id:a,draggable:!0,onDragStart:m,onDragLeave:g,onDragOver:f,onDrop:p},r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("label",{className:"container"},r.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),r.a.createElement("span",{class:"checkmark"})),!1===o||u!==a?r.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through",color:"#d9d9d9"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){c(!o),d(e)}(a)},draggable:!0},t.list):r.a.createElement("input",{type:"text",className:"editInput",autoFocus:!0,onBlur:function(t){return function(t,a){e.changeData(t.target.value,a),c(!1),d(-1)}(t,a)},onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),d(-1))}(t,a)},defaultValue:e.data[a].list}),r.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"X"))))})))},m=(a(11),"-1"),f="-1",g=!1,p={},v=13,E=function(e){for(var t=0,a=0;a<e.data.length;a++)!0===e.data[a].completed&&t++;return r.a.createElement("div",{className:"noItemsLeft"},e.data.length-t>1?r.a.createElement("p",null,e.data.length-t," items left"):r.a.createElement("p",null,e.data.length-t," item left"))},b=localStorage.getItem("todolist")?JSON.parse(localStorage.getItem("todolist")):[];var h=function(){var e=Object(n.useState)(b),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(0),h=Object(i.a)(c,2),N=h[0],D=h[1],O=Object(n.useState)(0),k=Object(i.a)(O,2),y=k[0],w=k[1],S=r.a.createRef(),C=function(e){a.splice(e,1),o(Object(l.a)(a)),localStorage.setItem("todolist",JSON.stringify(a))},j=function(e){!0===a[e].completed?(a[e].completed=!1,o(Object(l.a)(a)),localStorage.setItem("todolist",JSON.stringify(a))):(a[e].completed=!0,o(Object(l.a)(a)),localStorage.setItem("todolist",JSON.stringify(a)))},x=function(e){D(e)},L=function(e,t){a[t].list=e,o(a),localStorage.setItem("todolist",JSON.stringify(a))};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"todos"),r.a.createElement("div",{className:"shadow"},r.a.createElement("div",{className:"header"},r.a.createElement("button",{className:"drop",onClick:function(){return function(){var e;0===y?(e=a.map((function(e,t){return!1===e.completed&&(e.completed=!0),e})),w(1)):(e=a.map((function(e,t){return!0===e.completed&&(e.completed=!1),e})),w(0)),o(e),localStorage.setItem("todolist",JSON.stringify(a))}()}},"\u25bc"),r.a.createElement("input",{id:"todo",autoComplete:"off",type:"text",placeholder:"What needs to be done?",onKeyDown:function(e){var t=a;e.keyCode===v&&(""!==e.target.value&&(t=[].concat(Object(l.a)(a),[{list:e.target.value,completed:!1}])),o(t),e.target.value=""),localStorage.setItem("todolist",JSON.stringify(t))}})),r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"content",onDragStart:function(e){m=e.target.id,f=e.target.id;var t=Number(e.target.id),n=a.map((function(e){return e}));p=Object.assign({},n.splice(t,1)[0]),n.splice(t,0,p),o(n)},onDragOver:function(e){if(e.target.parentElement.parentElement.classList.add("dragOver"),e.target.id!==f&&e.target.id!==m&&"inner"!==e.target.id&&"wrapper"!==e.target.id){var t=a.map((function(e){return e})),n=Number(f);t.splice(n,1),f=e.target.id,n=Number(f),t.splice(n,0,p),o(t)}e.preventDefault()},onDragEnd:function(e){if(!1===g){var t=a.map((function(e){return e})),n=Number(f);t.splice(n,1);var r=Number(e.target.id);t.splice(r,0,p),o(t),localStorage.setItem("todolist",JSON.stringify(t))}},onDrop:function(e){if(e.target.parentElement.parentElement.classList.remove("dragOver"),"inner"!==f&&"inner"!==e.target.id){var t=a.map((function(e){return e})),n=Number(f);t.splice(n,1),n=Number(e.target.id),f=e.target.id,t.splice(n,0,p),o(t),g=!0,localStorage.setItem("todolist",JSON.stringify(t))}}},r.a.createElement("div",{id:"inner",ref:S},0===N&&r.a.createElement(s,{data:a,editData:function(e){C(e)},sendCount:function(e){j(e)},changeData:function(e,t){return L(e,t)}}),1===N&&r.a.createElement(u,{data:a,editData:function(e){C(e)},sendCount:function(e){j(e)},changeData:function(e,t){return L(e,t)}}),2===N&&r.a.createElement(d,{data:a,editData:function(e){C(e)},sendCount:function(e){j(e)},changeData:function(e,t){return L(e,t)}}))),a.length>0&&r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"btns"},r.a.createElement("div",{className:"ileft"},r.a.createElement(E,{data:a}),r.a.createElement("div",{className:"three-btn"},0===N?r.a.createElement("button",{className:"all-btn active",onClick:function(){return x(0)}},"All"):r.a.createElement("button",{className:"all-btn",onClick:function(){return x(0)}},"All"),1===N?r.a.createElement("button",{className:"active-btn active",onClick:function(){return x(1)}},"Active"):r.a.createElement("button",{className:"active-btn",onClick:function(){return x(1)}},"Active"),2===N?r.a.createElement("button",{className:"comp-btn active",onClick:function(){return x(2)}},"Completed"):r.a.createElement("button",{className:"comp-btn",onClick:function(){return x(2)}},"Completed"))),function(){for(var e=0,t=0;t<a.length;t++)!0===a[t].completed&&(e+=1);return e}()>0&&r.a.createElement("button",{className:"clr-comp",onClick:function(){return function(){var e;e=a.filter((function(e,t){return!1===e.completed})),o(e),localStorage.setItem("todolist",JSON.stringify(e))}()}},"Clear completed"))))))},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todoMVC",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todoMVC","/service-worker.js");N?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}],[[5,1,2]]]);
//# sourceMappingURL=main.9c487044.chunk.js.map