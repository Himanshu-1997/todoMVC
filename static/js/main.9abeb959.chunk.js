(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,function(e,t,a){},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),i=(a(11),a(2)),o=a(1),s=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(-1),s=Object(o.a)(i,2),m=s[0],d=s[1],u=Object(n.useState)(""),f=Object(o.a)(u,2),g=f[0],p=f[1],v=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},E=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},h=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},b=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},N=function(e){p(e.target.value)};return l.a.createElement("div",null,e.data.map((function(t,a){return t.ID===e.index?l.a.createElement("div",{key:a,className:"body",id:a,draggable:!0,onDragStart:v,onDragLeave:h,onDragOver:E,onDrop:b},l.a.createElement("div",{className:"list"},l.a.createElement("div",{id:"wrapper",className:"wrapper"},l.a.createElement("label",{className:"container"},l.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),l.a.createElement("span",{class:"checkmark"})),!1===r||m!==a?l.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through",color:"#d9d9d9"}:{textDecorationLine:"none"},className:"ele",onClick:function(){return function(e){!1===r?(d(e),c(!0)):(c(!1),d(-1))}(a)}},t.list):l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"hiddenLabel",for:"todo"},"Add todo"),l.a.createElement("input",{autoFocus:!0,type:"text",onBlur:function(e){!function(e,t){e.target.focus(),setTimeout((function(){c(!1),d(-1)}),0)}(e)},className:"editInput",onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),d(-1))}(t,a)},onChange:N,defaultValue:e.data[a].list}),l.a.createElement("div",{className:"saveEdit",onClick:function(t){!function(t,a){console.log("asda"),c(!1),d(-1),e.changeData(g,a)}(0,a)}},"\u27a4")),l.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"\u2296")))):null})))},m=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(-1),s=Object(o.a)(i,2),m=s[0],d=s[1],u=Object(n.useState)(""),f=Object(o.a)(u,2),g=f[0],p=f[1],v=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},E=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},h=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},b=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},N=function(e){p(e.target.value)};return l.a.createElement("div",null,e.data.map((function(t,a){return!1===t.completed&&t.ID===e.index?l.a.createElement("div",{className:"body",id:a,draggable:!0,onDragStart:v,onDragLeave:h,onDragOver:E,onDrop:b},l.a.createElement("div",{className:"list"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("label",{className:"container"},l.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),l.a.createElement("span",{class:"checkmark"})),!1===r||m!==a?l.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through"}:{textDecorationLine:"none"},className:"ele",onClick:function(){return function(e){!1===r?(d(e),c(!0)):(c(!1),d(-1))}(a)},draggable:!0},t.list):l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"hiddenLabel",for:"todo"},"Add todo"),l.a.createElement("input",{type:"text",className:"editInput",autoFocus:!0,onChange:N,onBlur:function(e){return function(e,t){e.target.focus(),setTimeout((function(){c(!1),d(-1)}),0)}(e)},onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),d(-1))}(t,a)},defaultValue:e.data[a].list}),l.a.createElement("div",{className:"saveEdit",onClick:function(t){!function(t,a){console.log("asda"),c(!1),d(-1),e.changeData(g,a)}(0,a)}},"\u27a4")),l.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"\u2296")))):null})))},d=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(-1),s=Object(o.a)(i,2),m=s[0],d=s[1],u=Object(n.useState)(""),f=Object(o.a)(u,2),g=f[0],p=f[1],v=function(e){e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="move"},E=function(e){e.target.parentElement.parentElement.classList.add("dragOver"),e.preventDefault()},h=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},b=function(e){e.target.parentElement.parentElement.classList.remove("dragOver")},N=function(e){p(e.target.value)};return l.a.createElement("div",null,e.data.map((function(t,a){return!0===t.completed&&t.ID===e.index?l.a.createElement("div",{className:"body",id:a,draggable:!0,onDragStart:v,onDragLeave:h,onDragOver:E,onDrop:b},l.a.createElement("div",{className:"list"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("label",{className:"container"},l.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.completed,onChange:function(){return e.sendCount(a)}}),l.a.createElement("span",{class:"checkmark"})),!1===r||m!==a?l.a.createElement("li",{id:a,style:t.completed?{textDecorationLine:"line-through",color:"#d9d9d9"}:{textDecorationLine:"none"},className:"ele",onClick:function(){return function(e){!1===r?(d(e),c(!0)):(c(!1),d(-1))}(a)},draggable:!0},t.list):l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"hiddenLabel",for:"todo"},"Add todo"),l.a.createElement("input",{type:"text",className:"editInput",autoFocus:!0,onChange:N,onBlur:function(e){return function(e,t){e.target.focus(),setTimeout((function(){c(!1),d(-1)}),0)}(e)},onKeyDown:function(t){return function(t,a){13===t.keyCode&&(e.changeData(t.target.value,a),c(!1),d(-1))}(t,a)},defaultValue:e.data[a].list}),l.a.createElement("div",{className:"saveEdit",onClick:function(t){!function(t,a){console.log("asda"),c(!1),d(-1),e.changeData(g,a)}(0,a)}},"\u27a4")),l.a.createElement("button",{onClick:function(){return e.editData(a)},className:"btn"},"\u2296")))):null})))},u=(a(4),a(12),function(e){return l.a.createElement("div",{className:"listOfTitle"},e.title.map((function(t,a){return l.a.createElement("div",{className:"listItem"},l.a.createElement("li",{onClick:function(){e.handleFillTitle(),e.showTodoWithId(a)}},t))})))}),f=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],i=function(){c(!r)};return l.a.createElement("div",{className:"sb-wrapper"},l.a.createElement("div",{className:"sb-header"},"TODOS"),l.a.createElement("div",{className:"sb-body"},l.a.createElement("div",{className:"sb-content",onClick:function(){e.handleSetID(),e.handleSidebar(!1)}},"create new todolist"),r?l.a.createElement("div",{className:"sb-content",onClick:i},"List of Todos",l.a.createElement("span",{className:"downArrow"},"\u25b3")):l.a.createElement("div",{className:"sb-content",onClick:i},"List of Todos",l.a.createElement("span",{className:"downArrow"},"\u25bd")),l.a.createElement("div",{className:"listItems"},r&&l.a.createElement(u,{handleFillTitle:function(){return e.handleFillTitle()},showTodoWithId:e.showTodoWithId,title:e.title}))),l.a.createElement("div",{className:"sb-footer"},"\xa9 Himanshu Kumar, 2019"))},g=(a(13),function(e){return l.a.createElement("div",{className:"sp-wrapper"},l.a.createElement("div",{className:"sp-headerWrapper"},l.a.createElement("div",{className:"sp-header"},"Instructions"),l.a.createElement("div",{className:"closebutton",onClick:function(){return e.handleSupport(!1)}},"\u2715")),l.a.createElement("div",{className:"sp-body"},l.a.createElement("div",{className:"sp-listitem"},l.a.createElement("div",{className:"sp-listitemnum"},"1."),l.a.createElement("div",null,l.a.createElement("li",null,"Click on any list item to edit it."))),l.a.createElement("div",{className:"sp-listitem"},l.a.createElement("div",{className:"sp-listitemnum"},"2."),l.a.createElement("div",null,l.a.createElement("li",null,"To mark item as completed, tap on the icon on the left of Todo."))),l.a.createElement("div",{className:"sp-listitem"},l.a.createElement("div",{className:"sp-listitemnum"},"3."),l.a.createElement("div",null,l.a.createElement("li",null,"List item can be deleted by clicking on the button on the right of Todo."))),l.a.createElement("div",{className:"sp-listitem"},l.a.createElement("div",{className:"sp-listitemnum"},"4."),l.a.createElement("div",null,l.a.createElement("li",null,"Hold and drag the item to re-order the list."))),l.a.createElement("div",{className:"sp-listitem"},l.a.createElement("div",{className:"sp-listitemnum"},"5."),l.a.createElement("div",null,l.a.createElement("li",null,"Filter the item based on the tabs at the bottom.")))))}),p=(a(14),a(15),function(e){return l.a.createElement("div",{className:"del-wrapper"},l.a.createElement("div",{className:"del-header"},"Do you really want to delete this item?"),l.a.createElement("div",{className:"del-content"},l.a.createElement("button",{value:"false",style:{backgroundColor:"grey",border:"none",color:"white",width:"66px",height:"40px",fontSize:"20px",borderRadius:"10%",marginRight:"15px"},onClick:function(){return e.setDeleteToggle(!1)}},"No"),l.a.createElement("button",{value:"true",style:{backgroundColor:"#012b72",border:"none",color:"white",width:"66px",height:"40px",fontSize:"20px",borderRadius:"10%"},onClick:function(){return e.setDeleteToggle(!0)}},"Yes")))}),v=(a(16),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",{className:"titleWrapper"},l.a.createElement("input",{type:"text",placeholder:"Enter list title",onChange:function(e){return c(e.target.value)},className:"titleList"}),l.a.createElement("div",{className:"titlebtnWrapper"},l.a.createElement("button",{className:"titleSaveButton",onClick:function(t){e.changeTitle(r)}},"\u27a4")))}),E=function(e){return l.a.createElement("div",{className:"three-btn"},0===e.display?l.a.createElement("button",{className:"all-btn active",onClick:function(){return e.handleDisplay(0)}},"All"):l.a.createElement("button",{className:"all-btn",onClick:function(){return e.handleDisplay(0)}},"All"),1===e.display?l.a.createElement("button",{className:"active-btn active",onClick:function(){return e.handleDisplay(1)}},"Active"):l.a.createElement("button",{className:"active-btn",onClick:function(){return e.handleDisplay(1)}},"Active"),2===e.display?l.a.createElement("button",{className:"comp-btn active",onClick:function(){return e.handleDisplay(2)}},"Completed"):l.a.createElement("button",{className:"comp-btn",onClick:function(){return e.handleDisplay(2)}},"Completed"))},h=(a(17),function(e){var t=Object(n.useState)(e.data),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",{className:"et-titleWrapper"},l.a.createElement("input",{type:"text",placeholder:"Edit Title",defaultValue:e.data,onChange:function(e){return c(e.target.value)},className:"et-titleList"}),l.a.createElement("div",{className:"et-btnWrapper"},l.a.createElement("button",{className:"et-titleSaveButton",onClick:function(t){e.editedTitle(r)}},"\u27a4")))}),b=function(e){var t=e.data.filter((function(t){return t.ID===e.index}));return l.a.createElement("img",{src:"share.svg",alt:"Share",className:"share",onClick:function(){var a=1,n=[],l=[];t.map((function(e){return!0===e.completed&&n.push("".concat(String(a++)," .) ").concat(String(e.list)," ","\n")),null})),a=1,t.map((function(e){return!1===e.completed&&l.push("".concat(String(a++)," .) ").concat(String(e.list)," ","\n")),null}));var r,c=n.join("\n"),i=l.join("\n");0===n.length?r="TITLE:-".concat(e.title[e.index],"\n\nTODO LIST","\n\n").concat(i):n.length>0&&(r="TITLE:-".concat(e.title[e.index],"\n\nTODO LIST","\n\n").concat(i,"\n\n","COMPLETED LIST","\n\n").concat(c)),void 0!==navigator.share?navigator.share({title:"Todolist",text:r}).then((function(){return console.log("Successful share")})).catch((function(e){return console.log("Error sharing",e)})):console.log("Your system doesnot support sharing files.")}})},N=(a(18),function(e){return l.a.createElement("div",{className:"title"},l.a.createElement("div",{className:"newMenu"},l.a.createElement("div",{className:"menu",onClick:function(){e.handleMenuClick(!e.isSideOpen)}},"\u2630")),l.a.createElement("div",{className:"menu2"},"todos"),e.data.length>0&&l.a.createElement(b,{index:e.index,title:e.title,data:e.data}),l.a.createElement("div",{className:"help",onClick:function(){return e.handleHelp(!e.IsHelp)}},"?"))}),S="-1",O="-1",D=!1,y={},k=13,C=function(e){for(var t=e.data.filter((function(t){return t.ID===e.index})),a=0,n=0;n<t.length;n++)!0===t[n].completed&&a++;return l.a.createElement("div",{className:"noItemsLeft"},t.length-a>1?l.a.createElement("p",null,t.length-a," items left"):l.a.createElement("p",null,t.length-a," item left"))},I=localStorage.getItem("todolist")?JSON.parse(localStorage.getItem("todolist")):[],w=localStorage.getItem("title")?JSON.parse(localStorage.getItem("title")):"",j=localStorage.getItem("allChecked")?JSON.parse(localStorage.getItem("allChecked")):0,T=localStorage.getItem("titleLists")?JSON.parse(localStorage.getItem("titleLists")):[],x=localStorage.getItem("ID")?JSON.parse(localStorage.getItem("ID")):0;var L=function(){var e=Object(n.useState)(I),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),u=Object(o.a)(c,2),b=u[0],L=u[1],J=Object(n.useState)(j),A=Object(o.a)(J,2),W=A[0],F=A[1],H=Object(n.useRef)(),R=Object(n.useState)(!1),B=Object(o.a)(R,2),K=B[0],P=B[1],z=Object(n.useState)(!1),M=Object(o.a)(z,2),V=M[0],U=M[1],Y=Object(n.useState)(""),$=Object(o.a)(Y,2),q=$[0],G=$[1],Q=Object(n.useState)(!1),X=Object(o.a)(Q,2),Z=X[0],_=X[1],ee=Object(n.useState)(-1),te=Object(o.a)(ee,2),ae=te[0],ne=te[1],le=Object(n.useState)(window.innerHeight),re=Object(o.a)(le,2),ce=re[0],ie=re[1],oe=Object(n.useState)(w),se=Object(o.a)(oe,2),me=se[0],de=se[1],ue=Object(n.useState)(""!==w),fe=Object(o.a)(ue,2),ge=fe[0],pe=fe[1],ve=Object(n.useState)(!1),Ee=Object(o.a)(ve,2),he=Ee[0],be=Ee[1],Ne=Object(n.useState)(T),Se=Object(o.a)(Ne,2),Oe=Se[0],De=Se[1],ye=Object(n.useState)(x),ke=Object(o.a)(ye,2),Ce=ke[0],Ie=ke[1];l.a.useEffect((function(){ie(window.innerHeight),localStorage.setItem("ID",JSON.stringify(Ce));var e=a.filter((function(e){return e.ID===Ce})),t=e.filter((function(e){return!0===e.completed}));e.length===t.length&&e.length>0?F(1):F(0);var n=function(e){e.target.innerHeight===ce&&(H.current.scrollTop=0)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[Ce]);var we=function(e){_(!Z),ne(e)},je=function(e){!0===a[e].completed&&a[e].ID===Ce?(a[e].completed=!1,r(Object(i.a)(a)),localStorage.setItem("todolist",JSON.stringify(a))):(a[e].completed=!0,r(Object(i.a)(a)),localStorage.setItem("todolist",JSON.stringify(a)));for(var t=0,n=a.filter((function(e){return e.ID===Ce})),l=0;l<n.length;l++)!0===n[l].completed&&t++;t===n.length?(F(1),localStorage.setItem("allChecked",JSON.stringify(1))):(F(0),localStorage.setItem("allChecked",JSON.stringify(0)))},Te=function(e,t){e.trim().length>0&&(a[t].list=e),r(a),localStorage.setItem("todolist",JSON.stringify(a))},xe=function(){var e;0===W?(e=a.map((function(e,t){return!1===e.completed&&e.ID===Ce&&(e.completed=!0),e})),F(1),localStorage.setItem("allChecked",JSON.stringify(1))):(e=a.map((function(e,t){return!0===e.completed&&e.ID===Ce&&(e.completed=!1),e})),F(0),localStorage.setItem("allChecked",JSON.stringify(0))),r(e),localStorage.setItem("todolist",JSON.stringify(a))},Le=function(e){P(e)},Je=function(e){!0===e&&(a.splice(ae,1),r(Object(i.a)(a)),localStorage.setItem("todolist",JSON.stringify(a)))};return l.a.createElement("div",{className:"App",onClick:function(){K&&P(!K),Z&&_(!Z)}},l.a.createElement("div",{ref:H,className:"fullbody",style:K||V||Z?{overflow:"hidden",pointerEvents:"none"}:{overflow:"auto"}},l.a.createElement(N,{isHelp:V,handleHelp:function(e){return U(e)},isSideOpen:K,data:a,index:Ce,title:Oe,handleMenuClick:function(e){return P(e)}}),l.a.createElement("div",{className:"headerWrapper"},!1===ge?l.a.createElement("div",{className:"headerList"},l.a.createElement(v,{changeTitle:function(e){if(e.length>0){pe(!0),de(e);var t=[].concat(Object(i.a)(Oe),[e]);De(t),localStorage.setItem("title",JSON.stringify(e)),localStorage.setItem("titleLists",JSON.stringify(t))}}})):he?null:l.a.createElement("div",{className:"setTitle"},l.a.createElement("div",{className:"titleName"},me),l.a.createElement("div",{className:"editTitle",onClick:function(){be(!0)}},"\u2710")),he?l.a.createElement("div",{className:"setTitle"},l.a.createElement(h,{data:me,editedTitle:function(e){if(e.length>0){de(e),be(!1),localStorage.setItem("title",JSON.stringify(e));var t=Oe;t[Ce]=e,De(t),localStorage.setItem("titleLists",JSON.stringify(t))}else be(!0)}})):null,ge?l.a.createElement("div",{className:"header"},W?l.a.createElement("button",{className:"drop",onClick:xe},"\u2611"):l.a.createElement("button",{className:"drop",style:{color:"grey"},onClick:xe},"\u2610"),l.a.createElement("label",{className:"hiddenLabel",for:"todo"},"Add todo"),l.a.createElement("input",{id:"todo",autoComplete:"off",type:"text",onChange:function(e){G(e.target.value)},onDrop:function(e){return e.preventDefault()},value:q,placeholder:"What needs to be done?",onKeyDown:function(e){var t=a;e.keyCode===k&&(""!==e.target.value&&e.target.value.trim().length>0&&(t=[].concat(Object(i.a)(a),[{list:e.target.value,completed:!1,ID:Ce}])),r(t),e.target.value="",G(""),setTimeout((function(){var e=H.current,t=void 0===e?{}:e;t.scrollTop=t.scrollHeight}),0)),localStorage.setItem("todolist",JSON.stringify(t))}}),q?l.a.createElement("div",{className:"rightArrowWrapper"},l.a.createElement("div",{className:"rightArrow",onClick:function(e){e.preventDefault();var t=a;""!==q&&q.trim().length>0&&(t=[].concat(Object(i.a)(a),[{list:q,completed:!1,ID:Ce}]),r(t),G(""),setTimeout((function(){var e=H.current,t=void 0===e?{}:e;t.scrollTop=t.scrollHeight}),0)),localStorage.setItem("todolist",JSON.stringify(t))}},"\u27a4")):l.a.createElement("div",{className:"dummyRightArrow"})):null),l.a.createElement("div",{className:"shadow"},l.a.createElement("div",{id:"top",className:"top"},l.a.createElement("div",{id:"content",className:"content",onDragStart:function(e){S=e.target.id,O=e.target.id;var t=Number(e.target.id),n=a.map((function(e){return e}));y=Object.assign({},n.splice(t,1)[0]),n.splice(t,0,y),r(n)},onDragOver:function(e){if(e.target.parentElement.parentElement.classList.add("dragOver"),e.target.id!==O&&e.target.id!==S&&"inner"!==e.target.id&&"wrapper"!==e.target.id&&"content"!==e.target.id){var t=a.map((function(e){return e})),n=Number(O);t.splice(n,1),O=e.target.id,n=Number(O),t.splice(n,0,y),r(t),e.preventDefault()}localStorage.setItem("todolist",JSON.stringify(a)),e.preventDefault()},onDragEnd:function(e){if(!1===D&&"content"===e.target.id&&"inner"===e.target.id){var t=a.map((function(e){return e})),n=Number(O);t.splice(n,1);var l=Number(e.target.id);t.splice(l,0,y),r(t),localStorage.setItem("todolist",JSON.stringify(t))}},onDrop:function(e){if("inner"===e.target.id)r(a);else if("inner"!==O&&"inner"!==e.target.id&&"content"!==e.target.id){var t=a.map((function(e){return e})),n=Number(O);t.splice(n,1),n=Number(e.target.id),O=e.target.id,t.splice(n,0,y),r(t),D=!0,localStorage.setItem("todolist",JSON.stringify(t))}}},l.a.createElement("div",{id:"inner"},0===b&&l.a.createElement(s,{index:Ce,data:a,editData:we,sendCount:je,changeData:Te}),1===b&&l.a.createElement(m,{index:Ce,data:a,editData:we,sendCount:je,changeData:Te}),2===b&&l.a.createElement(d,{index:Ce,data:a,editData:we,sendCount:je,changeData:Te}))),a.length>0&&l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"btns"},l.a.createElement("div",{className:"ileft"},l.a.createElement(C,{data:a,index:Ce}),l.a.createElement("div",{className:"btn-clrcomp"},function(){for(var e=0,t=0;t<a.length;t++)!0===a[t].completed&&a[t].ID===Ce&&(e+=1);return e}()>0&&l.a.createElement("button",{className:"clr-comp",onClick:function(){var e=a.filter((function(e,t){return!0!==e.completed||e.ID!==Ce}));r(e),localStorage.setItem("todolist",JSON.stringify(e)),F(0),localStorage.setItem("allChecked",JSON.stringify(0))}},"Clear completed"))),l.a.createElement("div",{className:"border-bottom "}),l.a.createElement(E,{display:b,handleDisplay:function(e){L(e)}})))))),K?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"overlay",onClick:function(){return P(!K)}}),l.a.createElement("div",{className:"sidebar open",onClick:function(e){return e.stopPropagation()}},l.a.createElement(f,{handleSetID:function(){var e=Oe.length;Ie(e),localStorage.setItem("ID",JSON.stringify(e)),pe(!1)},handleFillTitle:function(){return pe(!0)},title:Oe,showTodoWithId:function(e){P(!1),Ie(e),de(Oe[e]),localStorage.setItem("title",JSON.stringify(Oe[e])),localStorage.setItem("ID",JSON.stringify(e))},handleSidebar:Le}))):l.a.createElement("div",{className:"sidebar close",onClick:function(e){return e.stopPropagation()}},l.a.createElement(f,{handleSidebar:Le})),V?l.a.createElement("div",{className:"help-us"},l.a.createElement(g,{handleSupport:function(e){U(e)}})):null,Z?l.a.createElement("div",{className:"deletelist open"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(p,{setDeleteToggle:Je})):l.a.createElement("div",{className:"deletelist close"},l.a.createElement(p,{setDeleteToggle:Je})))},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");J?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.9abeb959.chunk.js.map