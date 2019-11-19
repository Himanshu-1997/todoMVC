import React from 'react';
import './Sidebar.scss';

const Sidebar = () =>{
    return(
        <div className='sb-wrapper'>
            <div className='sb-header'>
                Welcome to TodoApp!!
            </div>
            <div className='sb-body'>
                <div className='sb-content'>
                    Help us</div>
            </div>
            <div className='sb-footer'>
                    &#169; Himanshu Kumar, 2019
            </div>
        </div>
    )
}
export default Sidebar;