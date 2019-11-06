import React,{useState} from 'react';

const DisplayActiveTodolist = (props) => {
    const ENTER=13;
    const[isEdit,setIsEdit]=useState(false);
    const [index,setIndex]=useState(-1);
    const handleEvent = (e,i) =>{
        if(e.keyCode===ENTER){
            props.changeData(e.target.value,i);
            setIsEdit(false);
            setIndex(-1);
        }
      }
    const handleEdit = (i) => {
        if(isEdit)
        setIsEdit(false);
        else{
            setIsEdit(true);
        }
        setIndex(i);  
    }
    const handleOnBlur = (e,i) => {
        props.changeData(e.target.value,i);
        setIsEdit(false);
        setIndex(-1);
    }
    const handleDragStart = (e) =>{
        //    console.log(e.target);
           e.dataTransfer.setData('text',e.target.id);
           e.dataTransfer.effectAllowed="move";
        }
        const handleDragOver = (e) =>{
            e.target.classList.add('dragOver');
            e.preventDefault();
        }
        const handleDragLeave = (e) =>{
            console.log()
            e.target.classList.remove('dragOver');
        }
        const handleDrop = (e) =>{
            // console.log(e.target.id);
            let data = e.dataTransfer.getData('text');
            // console.log(data);
            e.target.classList.remove('dragOver');
            props.dnD(data,e.target.id);
        }
    return(
      <div>
       {
           props.data.map((d,i) => {
               if(d.completed===false)
               return (
                   <div className='body' id={i} draggable onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop}>
                   <div className='list'>
                       <div className='wrapper'>
                   <label className='container'>
                    <input className='checkbox' type='checkbox' checked={d.completed} onChange={() => props.sendCount(i)}/>
                    <span class="checkmark"></span>
                   </label>
                    {isEdit===false || index!==i?
                   <li id={i} style={d.completed?{textDecorationLine:'line-through'}:{textDecorationLine:'none'}} className='ele' onDoubleClick={() =>handleEdit(i)} draggable >{d.list}</li>:<input type='text' className='editInput' autoFocus onBlur={(e) =>handleOnBlur(e,i)} onKeyDown={(e) =>handleEvent(e,i)} defaultValue={props.data[i].list}></input>}
                   <button onClick={() =>props.editData(i)} className='btn'>X</button>
                   </div>
                   </div>
                   </div>
               )
           })
       }
      </div>
    )
  }

  export default DisplayActiveTodolist;