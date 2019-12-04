import React,{useState} from 'react';
import './Sidebar.scss';
import ListOfTitle from './ListOfTitle';



const Sidebar = (props) =>{
    const [showTitleList,setShowTitleList]=useState(false);
    const handleClick = () =>{
        setShowTitleList(!showTitleList);
    }
    const handleclickEvent = () =>{
        props.handleSetID();
        props.handleSidebar(false);
    }
    return(
        <div className='sb-wrapper'>
            <div className='sb-header'>
                TODOS
            </div>
            <div className='sb-body'>
                {/* <div className='sb-content' onClick={()=>props.handleSidebar(false)}>
                    How to use it. &#9432;</div> */}
                <div className='sb-content' onClick={handleclickEvent}>
                create new todolist</div>
                <div className='sb-content' onClick={handleClick}> List of Todos<span className='downArrow'>&#9661;</span></div>
                {showTitleList && <ListOfTitle showTodoWithId={props.showTodoWithId} title={props.title}/>}
            </div>
            <div className='sb-footer'>
                    &#169; Himanshu Kumar, 2019
            </div>
        </div>
    )
}
export default Sidebar;