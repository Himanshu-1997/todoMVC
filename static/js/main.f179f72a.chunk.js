(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),l=(a(10),a(2)),i=a(1),s=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(-1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},g=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},p=function(t){var a=t.dataTransfer.getData("text");t.target.parentElement.parentElement.classList.remove("dragOver"),e.dnD(a,t.target.id)};return o.a.createElement("div",null,e.data.map((function(t,a){return o.a.createElement("div",{className:"body",id:a,draggable:!0,onDragStart:m,onDragLeave:g,onDragOver:f,onDrop:p},o.a.createElement("div",{className:"list"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("label",{className:"container"},o.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),o.a.createElement("span",{class:"checkmark"})),!1===r||u!==a?o.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through",color:"#d9d9d9"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){d(e),c(!0)}(a)}},t.list):o.a.createElement("input",{autoFocus:!0,type:"text",onBlur:function(t){return function(t,a){e.changeData(t.target.value,a),c(!1),d(-1)}(t,a)},className:"editInput",onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),d(-1))}(t,a)},defaultValue:e.data[a].list}),o.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"X"))))})))},u=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(-1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},g=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},p=function(t){var a=t.dataTransfer.getData("text");t.target.parentElement.parentElement.classList.remove("dragOver"),e.dnD(a,t.target.id)};return o.a.createElement("div",null,e.data.map((function(t,a){if(!1===t.completed)return o.a.createElement("div",{className:"body",id:a,draggable:!0,onDragStart:m,onDragLeave:g,onDragOver:f,onDrop:p},o.a.createElement("div",{className:"list"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("label",{className:"container"},o.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),o.a.createElement("span",{class:"checkmark"})),!1===r||u!==a?o.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){c(!r),d(e)}(a)},draggable:!0},t.list):o.a.createElement("input",{type:"text",className:"editInput",autoFocus:!0,onBlur:function(t){return function(t,a){e.changeData(t.target.value,a),c(!1),d(-1)}(t,a)},onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),d(-1))}(t,a)},defaultValue:e.data[a].list}),o.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"X"))))})))},d=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(-1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},g=function(e){console.log(),e.target.parentElement.parentElement.classList.remove("dragOver")},p=function(t){var a=t.dataTransfer.getData("text");t.target.parentElement.parentElement.classList.remove("dragOver"),e.dnD(a,t.target.id)};return o.a.createElement("div",null,e.data.map((function(t,a){if(!0===t.completed)return o.a.createElement("div",{className:"body",id:a,draggable:!0,onDragStart:m,onDragLeave:g,onDragOver:f,onDrop:p},o.a.createElement("div",{className:"list"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("label",{className:"container"},o.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),o.a.createElement("span",{class:"checkmark"})),!1===r||u!==a?o.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through",color:"#d9d9d9"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){c(!r),d(e)}(a)},draggable:!0},t.list):o.a.createElement("input",{type:"text",className:"editInput",autoFocus:!0,onBlur:function(t){return function(t,a){e.changeData(t.target.value,a),c(!1),d(-1)}(t,a)},onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),d(-1))}(t,a)},defaultValue:e.data[a].list}),o.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"X"))))})))},m=(a(11),13),f=function(e){for(var t=0,a=0;a<e.data.length;a++)!0===e.data[a].completed&&t++;return o.a.createElement("div",{className:"noItemsLeft"},e.data.length-t>1?o.a.createElement("p",null,e.data.length-t," items left"):o.a.createElement("p",null,e.data.length-t," item left"))},g=localStorage.getItem("todolist")?JSON.parse(localStorage.getItem("todolist")):[];var p=function(){var e=Object(n.useState)(g),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),p=Object(i.a)(c,2),v=p[0],b=p[1],E=Object(n.useState)(0),h=Object(i.a)(E,2),N=h[0],D=h[1],O=function(e){a.splice(e,1),r(Object(l.a)(a)),localStorage.setItem("todolist",JSON.stringify(a))},k=function(e){console.log(e),!0===a[e].completed?(a[e].completed=!1,r(Object(l.a)(a)),localStorage.setItem("todolist",JSON.stringify(a))):(a[e].completed=!0,r(Object(l.a)(a)),localStorage.setItem("todolist",JSON.stringify(a)))},y=function(e){b(e)},C=function(e,t){a[t].list=e,r(a),localStorage.setItem("todolist",JSON.stringify(a))},w=function(e,t){var n=Number(e),o=Number(t),c=a.map((function(e){return e})),l=Object.assign({},c.splice(n,1)[0]);c.splice(o,0,l),r(c),localStorage.setItem("todolist",JSON.stringify(c))};return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"title"},"todos"),o.a.createElement("div",{className:"shadow"},o.a.createElement("div",{className:"header"},o.a.createElement("button",{className:"drop",onClick:function(){return function(){var e;0===N?(e=a.map((function(e,t){return!1===e.completed&&(e.completed=!0),e})),D(1)):(e=a.map((function(e,t){return!0===e.completed&&(e.completed=!1),e})),D(0)),r(e),localStorage.setItem("todolist",JSON.stringify(a))}()}},"\u25bc"),o.a.createElement("input",{id:"todo",autoComplete:"off",type:"text",placeholder:"What needs to be done?",onKeyDown:function(e){var t=a;e.keyCode===m&&(""!==e.target.value&&(t=[].concat(Object(l.a)(a),[{list:e.target.value,completed:!1}])),r(t),e.target.value=""),localStorage.setItem("todolist",JSON.stringify(t))}})),o.a.createElement("div",{className:"top"},o.a.createElement("div",{className:"content"},0===v&&o.a.createElement(s,{data:a,editData:function(e){O(e)},sendCount:function(e){k(e)},changeData:function(e,t){return C(e,t)},dnD:function(e,t){return w(e,t)}}),1===v&&o.a.createElement(u,{data:a,editData:function(e){O(e)},sendCount:function(e){k(e)},changeData:function(e,t){return C(e,t)},dnD:function(e,t){return w(e,t)}}),2===v&&o.a.createElement(d,{data:a,editData:function(e){O(e)},sendCount:function(e){k(e)},changeData:function(e,t){return C(e,t)},dnD:function(e,t){return w(e,t)}})),a.length>0&&o.a.createElement("div",{className:"footer"},o.a.createElement("div",{className:"btns"},o.a.createElement("div",{className:"ileft"},o.a.createElement(f,{data:a}),o.a.createElement("div",{className:"three-btn"},0===v?o.a.createElement("button",{className:"all-btn active",onClick:function(){return y(0)}},"All"):o.a.createElement("button",{className:"all-btn",onClick:function(){return y(0)}},"All"),1===v?o.a.createElement("button",{className:"active-btn active",onClick:function(){return y(1)}},"Active"):o.a.createElement("button",{className:"active-btn",onClick:function(){return y(1)}},"Active"),2===v?o.a.createElement("button",{className:"comp-btn active",onClick:function(){return y(2)}},"Completed"):o.a.createElement("button",{className:"comp-btn",onClick:function(){return y(2)}},"Completed"))),function(){for(var e=0,t=0;t<a.length;t++)!0===a[t].completed&&(e+=1);return e}()>0&&o.a.createElement("button",{className:"clr-comp",onClick:function(){return function(){var e;e=a.filter((function(e,t){return!1===e.completed})),r(e),localStorage.setItem("todolist",JSON.stringify(e))}()}},"Clear completed"))))))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todoMVC",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todoMVC","/service-worker.js");v?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}()}],[[5,1,2]]]);
//# sourceMappingURL=main.f179f72a.chunk.js.map