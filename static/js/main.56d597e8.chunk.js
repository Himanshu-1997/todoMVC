(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,function(e,t,a){},,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(11),a(2)),i=a(1),s=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(-1),s=Object(i.a)(o,2),m=s[0],u=s[1],d=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},p=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},g=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")};return r.a.createElement("div",null,e.data.map((function(t,a){return r.a.createElement("div",{key:a,className:"body",id:a,draggable:!0,onDragStart:d,onDragLeave:p,onDragOver:f,onDrop:g},r.a.createElement("div",{className:"list"},r.a.createElement("div",{id:"wrapper",className:"wrapper"},r.a.createElement("label",{className:"container"},r.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),r.a.createElement("span",{class:"checkmark"})),!1===l||m!==a?r.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through",color:"#d9d9d9"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){u(e),c(!0)}(a)}},t.list):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"hiddenLabel",for:"todo"},"Add todo"),r.a.createElement("input",{autoFocus:!0,type:"text",onBlur:function(t){return function(t,a){e.changeData(t.target.value,a),c(!1),u(-1)}(t,a)},className:"editInput",onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),u(-1))}(t,a)},defaultValue:e.data[a].list})),r.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"\u2326"))))})))},m=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(-1),s=Object(i.a)(o,2),m=s[0],u=s[1],d=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},p=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},g=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")};return r.a.createElement("div",null,e.data.map((function(t,a){if(!1===t.completed)return r.a.createElement("div",{className:"body",id:a,draggable:!0,onDragStart:d,onDragLeave:p,onDragOver:f,onDrop:g},r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("label",{className:"container"},r.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),r.a.createElement("span",{class:"checkmark"})),!1===l||m!==a?r.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){c(!l),u(e)}(a)},draggable:!0},t.list):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"hiddenLabel",for:"todo"},"Add todo"),r.a.createElement("input",{type:"text",className:"editInput",autoFocus:!0,onBlur:function(t){return function(t,a){e.changeData(t.target.value,a),c(!1),u(-1)}(t,a)},onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),u(-1))}(t,a)},defaultValue:e.data[a].list})),r.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"\u2326"))))})))},u=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(-1),s=Object(i.a)(o,2),m=s[0],u=s[1],d=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},f=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},p=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},g=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")};return r.a.createElement("div",null,e.data.map((function(t,a){if(!0===t.completed)return r.a.createElement("div",{className:"body",id:a,draggable:!0,onDragStart:d,onDragLeave:p,onDragOver:f,onDrop:g},r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("label",{className:"container"},r.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),r.a.createElement("span",{class:"checkmark"})),!1===l||m!==a?r.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through",color:"#d9d9d9"}:{textDecorationLine:"none"},className:"ele",onDoubleClick:function(){return function(e){c(!l),u(e)}(a)},draggable:!0},t.list):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"hiddenLabel",for:"todo"},"Add todo"),r.a.createElement("input",{type:"text",className:"editInput",autoFocus:!0,onBlur:function(t){return function(t,a){e.changeData(t.target.value,a),c(!1),u(-1)}(t,a)},onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),u(-1))}(t,a)},defaultValue:e.data[a].list})),r.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"\u2326"))))})))},d=(a(4),function(e){return r.a.createElement("div",{className:"sb-wrapper"},r.a.createElement("div",{className:"sb-header"},"Welcome to TodoApp!!"),r.a.createElement("div",{className:"sb-body"},r.a.createElement("div",{className:"sb-content",onClick:function(){return e.handleSidebar(!1)}},"How to use it. \u24d8"),r.a.createElement("div",{className:"sb-content"},"create new todolist \u2295  ")),r.a.createElement("div",{className:"sb-footer"},"\xa9 Himanshu Kumar, 2019"))}),f=(a(12),function(e){return r.a.createElement("div",{className:"sp-wrapper"},r.a.createElement("div",{className:"sp-headerWrapper"},r.a.createElement("div",{className:"sp-header"},"Instructions"),r.a.createElement("div",{className:"closebutton",onClick:function(){return e.handleSupport(!1)}},"\u2715")),r.a.createElement("div",{className:"sp-body"},r.a.createElement("div",{className:"sp-listitem"},r.a.createElement("div",{className:"sp-listitemnum"},"1."),r.a.createElement("div",null,r.a.createElement("li",null,"Double click on any list item to edit it."))),r.a.createElement("div",{className:"sp-listitem"},r.a.createElement("div",{className:"sp-listitemnum"},"2."),r.a.createElement("div",null,r.a.createElement("li",null,"To mark item as completed, tap on the icon on the left of Todo"))),r.a.createElement("div",{className:"sp-listitem"},r.a.createElement("div",{className:"sp-listitemnum"},"3."),r.a.createElement("div",null,r.a.createElement("li",null,"List item can be deleted by clicking on the cross button of on the right of Todo."))),r.a.createElement("div",{className:"sp-listitem"},r.a.createElement("div",{className:"sp-listitemnum"},"4."),r.a.createElement("div",null,r.a.createElement("li",null,"Hold and drag the item to re-order the list"))),r.a.createElement("div",{className:"sp-listitem"},r.a.createElement("div",{className:"sp-listitemnum"},"5."),r.a.createElement("div",null,r.a.createElement("li",null,"Filter the item based on the tabs at the bottom.")))))}),p=(a(13),a(14),function(e){return r.a.createElement("div",{className:"del-wrapper"},r.a.createElement("div",{className:"del-header"},"Do you really want to delete this item?"),r.a.createElement("div",{className:"del-content"},r.a.createElement("button",{value:"false",style:{backgroundColor:"grey",border:"none",color:"white",width:"66px",height:"40px",fontSize:"20px",borderRadius:"10%",marginRight:"15px"},onClick:function(){return e.setDeleteToggle(!1)}},"no"),r.a.createElement("button",{value:"true",style:{backgroundColor:"#012b72",border:"none",color:"white",width:"66px",height:"40px",fontSize:"20px",borderRadius:"10%"},onClick:function(){return e.setDeleteToggle(!0)}},"yes")))}),g="-1",v="-1",E=!1,b={},h=13,N=function(e){for(var t=0,a=0;a<e.data.length;a++)!0===e.data[a].completed&&t++;return r.a.createElement("div",{className:"noItemsLeft"},e.data.length-t>1?r.a.createElement("p",null,e.data.length-t," items left"):r.a.createElement("p",null,e.data.length-t," item left"))},O=localStorage.getItem("todolist")?JSON.parse(localStorage.getItem("todolist")):[];var k=function(){var e=Object(n.useState)(O),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),k=Object(i.a)(c,2),D=k[0],y=k[1],S=Object(n.useState)(0),w=Object(i.a)(S,2),C=w[0],j=w[1],x=Object(n.useRef)(),L=Object(n.useState)(!1),A=Object(i.a)(L,2),I=A[0],T=A[1],J=Object(n.useState)(!1),W=Object(i.a)(J,2),F=W[0],R=W[1],B=Object(n.useState)(""),K=Object(i.a)(B,2),H=K[0],P=K[1],U=Object(n.useState)(!1),V=Object(i.a)(U,2),z=V[0],M=V[1],$=Object(n.useState)(-1),q=Object(i.a)($,2),G=q[0],Q=q[1];Object(n.useEffect)((function(){var e=x.current,t=void 0===e?{}:e;t.scrollTop=t.scrollHeight}),[a.length]);var X=function(e){M(!z),Q(e)},Y=function(e){!0===a[e].completed?(a[e].completed=!1,l(Object(o.a)(a)),localStorage.setItem("todolist",JSON.stringify(a))):(a[e].completed=!0,l(Object(o.a)(a)),localStorage.setItem("todolist",JSON.stringify(a)))},Z=function(e){y(e)},_=function(e,t){e.trim().length>0&&(a[t].list=e),l(a),localStorage.setItem("todolist",JSON.stringify(a))},ee=function(){var e;0===C?(e=a.map((function(e,t){return!1===e.completed&&(e.completed=!0),e})),j(1)):(e=a.map((function(e,t){return!0===e.completed&&(e.completed=!1),e})),j(0)),l(e),localStorage.setItem("todolist",JSON.stringify(a))},te=function(e){T(e),R(!0)},ae=function(e){!0===e&&(a.splice(G,1),l(Object(o.a)(a)),localStorage.setItem("todolist",JSON.stringify(a)))};return r.a.createElement("div",{className:"App",onClick:function(){I&&T(!I),z&&M(!z)}},r.a.createElement("div",{ref:x,className:"fullbody",style:I||F||z?{opacity:.2,overflow:"hidden",pointerEvents:"none"}:{opacity:1,overflow:"auto"}},r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"newMenu"},r.a.createElement("div",{className:"menu",onClick:function(e){T(!I)}},"\u2630")),r.a.createElement("div",{className:"menu2"},"todos")),r.a.createElement("div",{className:"shadow"},r.a.createElement("div",{className:"header"},C?r.a.createElement("button",{className:"drop",onClick:function(){return ee()}},"\u2611"):r.a.createElement("button",{className:"drop",style:{color:"grey"},onClick:function(){return ee()}},"\u2611"),r.a.createElement("label",{className:"hiddenLabel",for:"todo"},"Add todo"),r.a.createElement("input",{id:"todo",autoComplete:"off",type:"text",onChange:function(e){P(e.target.value)},value:H,placeholder:"What needs to be done?",onKeyDown:function(e){var t=a;e.keyCode===h&&(""!==e.target.value&&e.target.value.trim().length>0&&(t=[].concat(Object(o.a)(a),[{list:e.target.value,completed:!1}])),l(t),e.target.value="",P("")),localStorage.setItem("todolist",JSON.stringify(t))}}),r.a.createElement("div",{className:"rightArrow",onClick:function(e){e.preventDefault();var t=a;""!==H&&H.trim().length>0&&(t=[].concat(Object(o.a)(a),[{list:H,completed:!1}]),l(t),P("")),localStorage.setItem("todolist",JSON.stringify(t))}},"\u21b2")),r.a.createElement("div",{id:"top",className:"top"},r.a.createElement("div",{id:"content",className:"content",onDragStart:function(e){g=e.target.id,v=e.target.id;var t=Number(e.target.id),n=a.map((function(e){return e}));b=Object.assign({},n.splice(t,1)[0]),n.splice(t,0,b),l(n)},onDragOver:function(e){if(e.target.parentElement.parentElement.classList.add("dragOver"),e.target.id!==v&&e.target.id!==g&&"inner"!==e.target.id&&"wrapper"!==e.target.id&&"content"!==e.target.id){var t=a.map((function(e){return e})),n=Number(v);t.splice(n,1),v=e.target.id,n=Number(v),t.splice(n,0,b),l(t),e.preventDefault()}localStorage.setItem("todolist",JSON.stringify(a)),e.preventDefault()},onDragEnd:function(e){if(!1===E&&"content"===e.target.id&&"inner"===e.target.id){var t=a.map((function(e){return e})),n=Number(v);t.splice(n,1);var r=Number(e.target.id);t.splice(r,0,b),l(t),localStorage.setItem("todolist",JSON.stringify(t))}},onDrop:function(e){if("inner"===e.target.id)l(a);else if("inner"!==v&&"inner"!==e.target.id&&"content"!==e.target.id){var t=a.map((function(e){return e})),n=Number(v);t.splice(n,1),n=Number(e.target.id),v=e.target.id,t.splice(n,0,b),l(t),E=!0,localStorage.setItem("todolist",JSON.stringify(t))}}},r.a.createElement("div",{id:"inner"},0===D&&r.a.createElement(s,{data:a,editData:function(e){X(e)},sendCount:function(e){Y(e)},changeData:function(e,t){return _(e,t)}}),1===D&&r.a.createElement(m,{data:a,editData:function(e){X(e)},sendCount:function(e){Y(e)},changeData:function(e,t){return _(e,t)}}),2===D&&r.a.createElement(u,{data:a,editData:function(e){X(e)},sendCount:function(e){Y(e)},changeData:function(e,t){return _(e,t)}}))),a.length>0&&r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"btns"},r.a.createElement("div",{className:"ileft"},r.a.createElement(N,{data:a}),r.a.createElement("div",{className:"btn-clrcomp"},function(){for(var e=0,t=0;t<a.length;t++)!0===a[t].completed&&(e+=1);return e}()>0&&r.a.createElement("button",{className:"clr-comp",onClick:function(){return function(){var e;e=a.filter((function(e,t){return!1===e.completed})),l(e),localStorage.setItem("todolist",JSON.stringify(e))}()}},"Clear completed"))),r.a.createElement("div",{className:"border-bottom "}),r.a.createElement("div",{className:"three-btn"},0===D?r.a.createElement("button",{className:"all-btn active",onClick:function(){return Z(0)}},"All"):r.a.createElement("button",{className:"all-btn",onClick:function(){return Z(0)}},"All"),1===D?r.a.createElement("button",{className:"active-btn active",onClick:function(){return Z(1)}},"Active"):r.a.createElement("button",{className:"active-btn",onClick:function(){return Z(1)}},"Active"),2===D?r.a.createElement("button",{className:"comp-btn active",onClick:function(){return Z(2)}},"Completed"):r.a.createElement("button",{className:"comp-btn",onClick:function(){return Z(2)}},"Completed"))))))," "),I?r.a.createElement("div",{className:"sidebar open",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"overlay",onClick:function(){return T(!I)}}),r.a.createElement(d,{handleSidebar:function(e){return te(e)}})):r.a.createElement("div",{className:"sidebar close",onClick:function(e){return e.stopPropagation()}},r.a.createElement(d,{handleSidebar:function(e){return te(e)}})),F?r.a.createElement("div",{className:"help-us"},r.a.createElement(f,{handleSupport:function(e){return function(e){R(e)}(e)}})):null,z?r.a.createElement("div",{className:"deletelist open"},r.a.createElement("div",{className:"overlay"}),r.a.createElement(p,{setDeleteToggle:function(e){return ae(e)}})):r.a.createElement("div",{className:"deletelist close"},r.a.createElement(p,{setDeleteToggle:function(e){return ae(e)}})))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");D?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.56d597e8.chunk.js.map