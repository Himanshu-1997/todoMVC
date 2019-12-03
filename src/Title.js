import React,{useState} from 'react';
import './Title.scss';

const Title = (props) =>{
    const [title,setTitle]=useState('');
    const handleClick = (e) =>{
        props.changeTitle(title);
    }
    return(
        <div className='titleWrapper'>
            <input type='text' placeholder='Enter list title' onChange={(e) => setTitle(e.target.value)} className='titleList'></input>
            <div className='titlebtnWrapper'>
                <button className='titleSaveButton' onClick={handleClick}>&#x27A4;</button>
            </div>
        </div>
    )
}
export default Title;