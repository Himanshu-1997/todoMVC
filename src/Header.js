import React from 'react';
import Share from './Share';
import './Header.scss';

const Header = (props) =>{
    return (
        <div className='title'>
             <div className='newMenu'>
                <div className='menu' onClick={() =>{props.handleMenuClick(!props.isSideOpen)}}>&#9776;</div>
             </div>
             <div className='menu2'>todos</div>
             {props.data.length>0 && <Share data={props.data}/>}
             <div className='help' onClick={() => props.handleHelp(!props.IsHelp)}>&#x3f;</div>
        </div>
    )
}
export default Header;