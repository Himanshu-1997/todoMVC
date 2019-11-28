import React,{useState} from 'react';
import './DeleteList.scss';

const DeleteList = (props) =>{
    return(
        <div className='del-wrapper'>
            <div className='del-header'>
                Do you really want to delete this item?
             </div>
             <div className='del-content'>
                 <button value='false' style={{backgroundColor:"grey",border:'none',color:'white',width:'66px',height:'40px',fontSize:'20px',borderRadius:'10%',marginRight:'15px'}} onClick={() =>props.setDeleteToggle(false)}>no</button>
                 <button value='true' style={{backgroundColor:"#012b72",border:'none',color:'white',width:'66px',height:'40px',fontSize:'20px',borderRadius:'10%'}} onClick={() =>props.setDeleteToggle(true)}>yes</button>
             </div>
        </div>
    )
}
export default DeleteList;