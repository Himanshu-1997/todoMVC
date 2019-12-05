import React from 'react';
import './ListOfTitle.scss';

const ListOfTitle = (props) =>{
    return (
        <div className='listOfTitle'>
           {
               props.title.map((d,i) =>{
                   return <div className='listItem'><li onClick={() =>{props.handleFillTitle();props.showTodoWithId(i)}}>{d}</li></div>
               })
           }
        </div>
    )
}
export default ListOfTitle;