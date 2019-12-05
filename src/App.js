import React, { useState, useRef } from 'react';
import DisplayTodolist from './displayTodolist';
import DisplayActiveTodolist from './displayActiveTodolist';
import DisplayCompletedTodolist from './displayCompletedTodolist';
import Sidebar from './Sidebar';
import Support from './Support';
import './App.scss';
import './Sidebar.scss';
import DeleteList from './DeleteList';
import Title from './Title';
import DisplayButton from './DisplayButton';
import EditTitle from './EditTitle';
import Header from './Header';

let srce = '-1';
let desti = '-1';
let check = false;
let rItem = {};
const ENTER = 13;
const FindChecked = (props) => {
  let data = props.data.filter((d) => d.ID===props.index);
  let c = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].completed === true) {
      c++;
    }
  }
  return (
    <div className='noItemsLeft'>
      {data.length - c > 1 ? <p>{data.length - c} items left</p> : <p>{data.length - c} item left</p>}
    </div>
  );
}

let list = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [];
let title = localStorage.getItem('title') ? JSON.parse(localStorage.getItem('title')) : '';
let allChecked = localStorage.getItem('allChecked') ? JSON.parse(localStorage.getItem('allChecked')) : 0;
let titleLists = localStorage.getItem('titleLists') ? JSON.parse(localStorage.getItem('titleLists')) : [];
let ID = localStorage.getItem('ID') ? JSON.parse(localStorage.getItem('ID')) : 0;
function App() {
  const [todolist, setTodolist] = useState(list);
  const [display, setDisplay] = useState(0);
  const [allMarked, setAllMarked] = useState(allChecked);
  const listRef = useRef();
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isHelp,setIsHelp]=useState(false);
  const [input,setInput]=useState('');
  const [isDel,setIsDel]=useState(false);
  const [delID,setDelID]=useState(-1);
  const [winHeinght,setWinHeight] = useState(window.innerHeight);
  const [titleTable,setTitleTable]=useState(title);
  const [fillTitle,setFillTitle]=useState(title!==''?true:false);
  const [isEditTitle,setIsEditTitle]=useState(false);
  const [titleArray,setTitleArray]=useState(titleLists);
  const [Id,setId]=useState(ID);
  
  React.useEffect(()=>{
    setWinHeight(window.innerHeight);
    localStorage.setItem('ID',JSON.stringify(Id));
    let data = todolist.filter((d) => d.ID===Id);
    let data1 = data.filter(d => d.completed===true);
    if(data.length===data1.length && data.length>0)
        setAllMarked(1);
    else{
      setAllMarked(0);
    }
    const func = (e) => {
      if(e.target.innerHeight === winHeinght){
        listRef.current.scrollTop = 0;
      }
    }
    window.addEventListener('resize',func);
    return () => {
      window.removeEventListener('resize',func);
    }
  },[Id])
  const handleEvent = (e) => {
    let d = todolist;
    if (e.keyCode === ENTER) {
      if (e.target.value !== '' && e.target.value.trim().length>0)
        d = [...todolist, { list: e.target.value, completed: false, ID:Id}];
      setTodolist(d);
      e.target.value = '';
      setInput('');
      setTimeout(function(){
        const { current : loc={} } = listRef;
        loc.scrollTop = loc.scrollHeight;
      },0);
    }
    localStorage.setItem('todolist', JSON.stringify(d));
  }
  const handleClick = (d) => {
    setIsDel(!isDel);
    setDelID(d);
  }
  const handleCheckbox = (d) => {
    if (todolist[d].completed === true && todolist[d].ID===Id) {
      todolist[d].completed = false;
      setTodolist([...todolist]);
      localStorage.setItem('todolist', JSON.stringify(todolist));
    }
    else {
      todolist[d].completed = true;
      setTodolist([...todolist]);
      localStorage.setItem('todolist', JSON.stringify(todolist));
    }
    let cnt=0;
    let data = todolist.filter((d) =>d.ID===Id);
    for(let i=0;i<data.length;i++){
      if(data[i].completed===true){
        cnt++;
      }
    }
    if(cnt===data.length){
      setAllMarked(1);
      localStorage.setItem('allChecked', JSON.stringify(1));
    }
    else{
      setAllMarked(0);
      localStorage.setItem('allChecked', JSON.stringify(0));
    }
  }
  const handleDisplay = (d) => {
    setDisplay(d);
  }
  const handleEditData = (d, id) => {
    if(d.trim().length>0)
      todolist[id].list = d;
    setTodolist(todolist);
    localStorage.setItem('todolist', JSON.stringify(todolist));
  }
  const handleClearCompleted = () => {
    let data = todolist.filter((d, i) => (d.completed===true && d.ID===Id)?false:true);
    setTodolist(data);
    localStorage.setItem('todolist', JSON.stringify(data));
    setAllMarked(0);
    localStorage.setItem('allChecked', JSON.stringify(0));
  }
  const handleAllCompleted = () => {
    let data;
    if (allMarked === 0) {
      data = todolist.map((d, i) => {
        if (d.completed === false && d.ID===Id)
          d.completed = true;
        return d;
      });
      setAllMarked(1);
      localStorage.setItem('allChecked', JSON.stringify(1));
    }
    else {
      data = todolist.map((d, i) => {
        if (d.completed === true && d.ID===Id)
          d.completed = false;
        return d;
      });
      setAllMarked(0);
      localStorage.setItem('allChecked', JSON.stringify(0));
    }
    setTodolist(data);
    localStorage.setItem('todolist', JSON.stringify(todolist));
  }

  const findNoofCompletedtodo = () => {
    let d = 0;
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].completed === true && todolist[i].ID===Id) {
        d += 1;
      }
    }
    return d;
  }

  const handleDragStart = (e) => {
    srce = e.target.id;
    desti = e.target.id;
    let src = Number(e.target.id);
    let data = todolist.map((d) => d);
    rItem = Object.assign({}, data.splice(src, 1)[0]);
    data.splice(src, 0, rItem);
    setTodolist(data);
  }
  const handleDragOver = (e) => {
    e.target.parentElement.parentElement.classList.add('dragOver');
    if (e.target.id !== desti && e.target.id !== srce && e.target.id !== 'inner' && e.target.id !== 'wrapper' && e.target.id!=='content') {
      let data = todolist.map((d) => {
        return d;
      })
      let dest = Number(desti);
      data.splice(dest, 1);
      desti = e.target.id;
      dest = Number(desti);
      data.splice(dest, 0, rItem);
      setTodolist(data);
      e.preventDefault();
    }
    localStorage.setItem('todolist', JSON.stringify(todolist));
    e.preventDefault();
  }
  const handleDragEnd = (e) => {
    if (check === false && e.target.id==='content' && e.target.id==='inner') {
      let data = todolist.map((d) => d);
      let dest = Number(desti);
      data.splice(dest, 1);
      let src = Number(e.target.id);
      data.splice(src, 0, rItem);
      setTodolist(data);
      localStorage.setItem('todolist', JSON.stringify(data));
    }
  }
  const handleDrop = (e) => {
    if(e.target.id==='inner'){
      setTodolist(todolist);
    }
    else if (desti !== 'inner' && e.target.id !== 'inner' && e.target.id!=='content') {
      let data = todolist.map((d) => { return d; })
      let dest = Number(desti);
      data.splice(dest, 1);
      dest = Number(e.target.id);
      desti = e.target.id;
      data.splice(dest, 0, rItem);
      setTodolist(data);
      check = true;
      localStorage.setItem('todolist', JSON.stringify(data));
    }
  }
  const handleSidebarClick = () => {
    if (isSideOpen){
      setIsSideOpen(!isSideOpen);
    }
    if(isDel)
      setIsDel(!isDel);
  }
  const handleToggleSidebar = (d) =>{
    setIsSideOpen(d);
  }
  const hideSupport = (d) =>{
    setIsHelp(d);
  }
  const handleInputChange = (e) =>{
    setInput(e.target.value);
  }
  const handleAddInput = (e) =>{
    e.preventDefault();
    let d = todolist;
    if(input!=='' && input.trim().length>0){
      d = [...todolist, { list: input, completed: false,ID:Id}];
      setTodolist(d);
      setInput('');
      setTimeout(function(){
        const { current : loc={} } = listRef;
        loc.scrollTop = loc.scrollHeight;
      },0);
    }
    localStorage.setItem('todolist', JSON.stringify(d)); 
  }
  const handleDeleteData = (x) =>{
    if(x===true){
      todolist.splice(delID, 1);
      setTodolist([...todolist]);
      localStorage.setItem('todolist', JSON.stringify(todolist));
    }
  }
  const handleChangeTitle = (d) =>{
    if(d.length>0){
      setFillTitle(true);
      setTitleTable(d);
      let lists = [...titleArray,d];
      setTitleArray(lists);
      localStorage.setItem('title', JSON.stringify(d));
      localStorage.setItem('titleLists',JSON.stringify(lists));
    }
  }
  const handleEditTitle = (d) =>{
    if(d.length>0){
     setTitleTable(d);
     setIsEditTitle(false);
     localStorage.setItem('title', JSON.stringify(d));
     let lists=titleArray;
     lists[Id]=d;
     setTitleArray(lists);
     localStorage.setItem('titleLists',JSON.stringify(lists));
    }
    else{
      setIsEditTitle(true);
    }
  }
  const handleSetID = () =>{
    let d = titleArray.length;
    setId(d);
    localStorage.setItem('ID',JSON.stringify(d));
    setFillTitle(false);
  }
  const showTodoWithId = (d) =>{
    setIsSideOpen(false);
    setId(d);
    setTitleTable(titleArray[d]);
    localStorage.setItem('title',JSON.stringify(titleArray[d]));
    localStorage.setItem('ID',JSON.stringify(d));
  }
  return (
    <div className="App" onClick={handleSidebarClick}>
      <div ref={listRef} className='fullbody' style={isSideOpen || isHelp || isDel ?{overflow:'hidden',pointerEvents:"none"}:{overflow:'auto'}}>
        <Header isHelp={isHelp} handleHelp={(d) => setIsHelp(d)} isSideOpen={isSideOpen} data={todolist} index={Id} title={titleArray} handleMenuClick={(d) => setIsSideOpen(d)}/>
        <div className='headerWrapper'>
        { fillTitle===false ?
         <div className='headerList'><Title changeTitle={handleChangeTitle}/></div>
         :
         !isEditTitle ?
         <div className='setTitle'>
            <div  className='titleName'>{titleTable}</div>
            <div className='editTitle' onClick={() =>{setIsEditTitle(true)}}>&#10000;</div>
         </div>:null
        }
        {
          isEditTitle ? 
          <div className='setTitle'><EditTitle data={titleTable} editedTitle={handleEditTitle}/></div>:
          null
        }
        { fillTitle ?
            <div className='header'>
              {allMarked ? 
                <button className='drop' onClick={handleAllCompleted}>&#9745;</button>
                :
                <button className='drop' style={{color:'grey'}} onClick={handleAllCompleted}>&#9744;</button>
              }
              <label className='hiddenLabel' for='todo'>Add todo</label>
              <input id='todo' autoComplete='off' type='text' onChange={handleInputChange} onDrop={(e)=>e.preventDefault()} value={input} placeholder='What needs to be done?' onKeyDown={handleEvent}></input>
              {input?
                <div className='rightArrowWrapper'>
                  <div className='rightArrow' onClick={handleAddInput}>&#x27A4;</div>
                </div>:
                <div className='dummyRightArrow'></div>
              }
            </div>
            :null
          }
        </div>
        <div className='shadow'>
          <div id='top' className='top'>
            <div id='content' className='content' onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd} onDrop={handleDrop}>
              <div id='inner'>
                {display === 0 && <DisplayTodolist index={Id} data={todolist} editData={handleClick} sendCount={handleCheckbox} changeData={handleEditData} />}
                {display === 1 && <DisplayActiveTodolist index={Id} data={todolist} editData={handleClick} sendCount={handleCheckbox} changeData={handleEditData} />}
                {display === 2 && <DisplayCompletedTodolist index={Id} data={todolist} editData={handleClick} sendCount={handleCheckbox} changeData={handleEditData} />}
              </div>
            </div>
            {todolist.length > 0 &&
              <div className='footer'>
                <div className='btns'>
                  <div className='ileft'>
                    <FindChecked data={todolist} index={Id}/>
                    <div className='btn-clrcomp'>
                    {findNoofCompletedtodo() > 0 && <button className='clr-comp' onClick={handleClearCompleted}>Clear completed</button>}
                    </div>
                  </div>
                  <div className='border-bottom '>
                  </div>
                  <DisplayButton display={display} handleDisplay={handleDisplay} />
                </div>
              </div>
            }
          </div>
        </div> 
      </div>
      {!isSideOpen ? <div className='sidebar close' onClick={e => e.stopPropagation()}><Sidebar  handleSidebar={handleToggleSidebar}/></div>: <><div className='overlay' onClick={()=>setIsSideOpen(!isSideOpen)}></div><div className='sidebar open' onClick={e => e.stopPropagation()}><Sidebar handleSetID={handleSetID} handleFillTitle={() =>setFillTitle(true)} title={titleArray} showTodoWithId={showTodoWithId} handleSidebar={handleToggleSidebar}/></div></>}
      {isHelp?<div className='help-us'><Support handleSupport={hideSupport}/></div>:null}
      {!isDel?<div className='deletelist close'><DeleteList setDeleteToggle={handleDeleteData}/></div>:<div className='deletelist open'><div className='overlay'></div><DeleteList setDeleteToggle={handleDeleteData}/></div>}
    </div>
  );
}

export default App;
