import React,{useState} from 'react';

const DisplayActiveTodolist = (props) => {
    const ENTER=13;
    const[isEdit,setIsEdit]=useState(false);
    const [index,setIndex]=useState(-1);
    const [data,setData]=useState('');
    const handleEvent = (e,i) =>{
        if(e.keyCode===ENTER){
            props.changeData(e.target.value,i);
            setIsEdit(false);
            setIndex(-1);
        }
      }
    const handleEdit = (i) => {
        if(isEdit===false){
            setIndex(i);
            setIsEdit(true);
        }
        else{
            setIsEdit(false);
            setIndex(-1);
        }
    }
    const handleOnBlur = (e,i) => {
        e.target.focus();
        setTimeout(()=>{
            setIsEdit(false);
            setIndex(-1);
        },0);
    }
    const handleDragStart = (e) =>{
        //    console.log(e.target);
           e.dataTransfer.setData('text',e.target.id);
           e.dataTransfer.effectAllowed="move";
        }
        const handleDragOver = (e) =>{
            e.target.parentElement.parentElement.classList.add('dragOver');
            e.preventDefault();
        }
        const handleDragLeave = (e) =>{
            e.target.parentElement.parentElement.classList.remove('dragOver');
        }
        const handleDrop = (e) =>{
            e.target.parentElement.parentElement.classList.remove('dragOver');
        }
        const handleSetData = (e) =>{
            setData(e.target.value);
        }
        const handleEditSave = (e,i) => {
            console.log("asda");
            setIsEdit(false);
            setIndex(-1);
            props.changeData(data,i);
        }
    return(
      <div>
       {
           props.data.map((d,i) => {
               if(d.completed===false && d.ID===props.index)
               return (
                   <div className='body' id={i} draggable onDragStart={handleDragStart} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}>
                   <div className='list'>
                       <div className='wrapper'>
                   <label className='container'>
                    <input className='checkbox' type='checkbox' checked={d.completed} onChange={() => props.sendCount(i)}/>
                    <span class="checkmark"></span>
                   </label>
                    {isEdit===false || index!==i?
                   <li id={i} style={d.completed?{textDecorationLine:'line-through'}:{textDecorationLine:'none'}} className='ele' onClick={() =>handleEdit(i)} draggable >{d.list}</li>:<><label className='hiddenLabel' for='todo'>Add todo</label><input type='text' className='editInput' autoFocus onChange={handleSetData} onBlur={(e) =>handleOnBlur(e,i)} onKeyDown={(e) =>handleEvent(e,i)} defaultValue={props.data[i].list}></input><div className='saveEdit' onClick={(e)=>{handleEditSave(e,i)}}>&#x27A4;</div></>}
                   <button onClick={() =>props.editData(i)} className='btn'>&#x2296;</button>
                   </div>
                   </div>
                   </div>
               )
               else{
                   return null;
               }
           })
       }
      </div>
    )
  }

  export default DisplayActiveTodolist;