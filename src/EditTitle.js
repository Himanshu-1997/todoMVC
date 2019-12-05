import React,{useState} from 'react';
import './EditTitle.scss';

const EditTitle = (props) =>{
    const [title,setTitle]=useState(props.data);
    const handleClick = (e) =>{
        props.editedTitle(title);
    }
    const handleEvent = (e) =>{
        if(e.keyCode===13){
            props.editedTitle(title);
        }
    }
    return(
        <div className='et-titleWrapper'>
            <input type='text' placeholder='Edit Title' defaultValue={props.data} onChange={(e) => setTitle(e.target.value)} className='et-titleList' onKeyDown={handleEvent}></input>
            <div className='et-btnWrapper'><button className='et-titleSaveButton' onClick={handleClick}>&#x27A4;</button></div>
        </div>
    )
}
export default EditTitle;