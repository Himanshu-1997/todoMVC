import React, { useState,useEffect } from 'react';
import DisplayTodolist from './displayTodolist';
import DisplayActiveTodolist from './displayActiveTodolist';
import DisplayCompletedTodolist from './displayCompletedTodolist';
import Sidebar from './Sidebar';
import Support from './Support';
import './App.scss';
import './Sidebar.scss';

let srce = '-1';
let desti = '-1';
let check = false;
let rItem = {};
const ENTER = 13;
const FindChecked = (props) => {
  let c = 0;
  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].completed === true) {
      c++;
    }
  }
  return (
    <div className='noItemsLeft'>
      {props.data.length - c > 1 ? <p>{props.data.length - c} items left</p> : <p>{props.data.length - c} item left</p>}
    </div>
  );
}

let list = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [];
let loc={};
function App() {
  const [todolist, setTodolist] = useState(list);
  const [display, setDisplay] = useState(0);
  const [allMarked, setAllMarked] = useState(0);
  const listRef = React.createRef();
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isHelp,setIsHelp]=useState(false);
  useEffect(() =>{
    loc=listRef.current.parentElement.parentElement.parentElement.parentElement;
    loc.scrollTop = loc.scrollHeight;
  },[loc.scrollHeight]);
  const handleEvent = (e) => {
    let d = todolist;
    if (e.keyCode === ENTER) {
      if (e.target.value !== '' && e.target.value.trim().length>0)
        d = [...todolist, { list: e.target.value, completed: false}];
      setTodolist(d);
      e.target.value = '';
    }
    localStorage.setItem('todolist', JSON.stringify(d));
  }
  const handleClick = (d) => {
    todolist.splice(d, 1);
    setTodolist([...todolist]);
    localStorage.setItem('todolist', JSON.stringify(todolist));
  }
  const handleCheckbox = (d) => {
    if (todolist[d].completed === true) {
      todolist[d].completed = false;
      setTodolist([...todolist]);
      localStorage.setItem('todolist', JSON.stringify(todolist));
    }
    else {
      todolist[d].completed = true;
      setTodolist([...todolist]);
      localStorage.setItem('todolist', JSON.stringify(todolist));
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
    let data;
    data = todolist.filter((d, i) => d.completed === false);
    setTodolist(data);
    localStorage.setItem('todolist', JSON.stringify(data));
  }
  const handleAllCompleted = () => {
    let data;
    if (allMarked === 0) {
      data = todolist.map((d, i) => {
        if (d.completed === false)
          d.completed = true;
        return d;
      });
      setAllMarked(1);
    }
    else {
      data = todolist.map((d, i) => {
        if (d.completed === true)
          d.completed = false;
        return d;
      });
      setAllMarked(0);
    }
    setTodolist(data);
    localStorage.setItem('todolist', JSON.stringify(todolist));
  }

  const findNoofCompletedtodo = () => {
    let d = 0;
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].completed === true) {
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
  const handleMenuClick = (e) => {
    setIsSideOpen(!isSideOpen);
  }
  const handleSidebarClick = () => {
    if (isSideOpen){
      setIsSideOpen(!isSideOpen);
    }
  }
  const handleToggleSidebar = (d) =>{
    setIsSideOpen(d);
    setIsHelp(true);
  }
  const hideSupport = (d) =>{
    setIsHelp(d);
  }

  return (
    <div className="App" onClick={handleSidebarClick}>
      <div className='fullbody' style={isSideOpen || isHelp?{opacity:0.2,overflow:'hidden',pointerEvents:"none"}:{opacity:1,overflow:'auto'}}>
        <div className='title'>
          <div className='newMenu'>
            <div className='menu' onClick={handleMenuClick}>&#9776;</div>
          </div>
          <div className='menu2'>todos</div>
        </div>
        <div className='shadow'>
          <div className='header'>
            <button className='drop' onClick={() => handleAllCompleted()}>&#9660;</button>
            <label className='hiddenLabel' for='todo'>Add todo</label>
            <input id='todo' autoComplete='off' type='text' placeholder='What needs to be done?' onKeyDown={handleEvent}></input>
          </div>
          <div id='top' className='top'>
            <div id='content' className='content' onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd} onDrop={handleDrop}>
              <div id='inner' ref={listRef}>
                {display === 0 && <DisplayTodolist data={todolist} editData={(d) => { handleClick(d) }} sendCount={(d) => { handleCheckbox(d) }} changeData={(d, id) => handleEditData(d, id)} />}
                {display === 1 && <DisplayActiveTodolist data={todolist} editData={(d) => { handleClick(d) }} sendCount={(d) => { handleCheckbox(d) }} changeData={(d, id) => handleEditData(d, id)} />}
                {display === 2 && <DisplayCompletedTodolist data={todolist} editData={(d) => { handleClick(d) }} sendCount={(d) => { handleCheckbox(d) }} changeData={(d, id) => handleEditData(d, id)} />}
              </div>
            </div>
            {todolist.length > 0 &&
              <div className='footer'>
                <div className='btns'>
                  <div className='ileft'>
                    <FindChecked data={todolist} />
                    <div className='btn-clrcomp'>
                    {findNoofCompletedtodo() > 0 && <button className='clr-comp' onClick={() => handleClearCompleted()}>Clear completed</button>}
                    </div>
                  </div>
                  <div className='border-bottom '>
                  </div>
                  <div className='three-btn'>
                      {display === 0 ? <button className='all-btn active' onClick={() => handleDisplay(0)}>All</button> : <button className='all-btn' onClick={() => handleDisplay(0)}>All</button>}
                      {display === 1 ? <button className='active-btn active' onClick={() => handleDisplay(1)}>Active</button> : <button className='active-btn' onClick={() => handleDisplay(1)}>Active</button>}
                      {display === 2 ? <button className='comp-btn active' onClick={() => handleDisplay(2)}>Completed</button> : <button className='comp-btn' onClick={() => handleDisplay(2)}>Completed</button>}
                  </div>
                </div>
              </div>
            }
          </div>
        </div> </div>
      {!isSideOpen ? <div className='sidebar close' onClick={e => e.stopPropagation()}><Sidebar  handleSidebar={(d) => handleToggleSidebar(d)}/></div>: <div className='sidebar open' onClick={e => e.stopPropagation()}><Sidebar  handleSidebar={(d) => handleToggleSidebar(d)}/></div>}
      {isHelp?<div className='help-us'><Support handleSupport={(d) => hideSupport(d)}/></div>:null}
    </div>
  );
}

export default App;
