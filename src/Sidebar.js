import React from 'react';
import './Sidebar.scss';



const Sidebar = (props) =>{
    return(
        <div className='sb-wrapper'>
            <div className='sb-header'>
                Welcome to TodoApp!!
            </div>
            <div className='sb-body'>
                <div className='sb-content' onClick={()=>props.handleSidebar(false)}>
                    How to use it ?</div>
                <div className='sb-content'>
                &#8853; create new todolist </div>
            </div>
            <div className='sb-footer'>
                    &#169; Himanshu Kumar, 2019
            </div>
        </div>
    )
}
export default Sidebar;