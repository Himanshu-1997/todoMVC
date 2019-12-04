import React from 'react';
import './ListOfTitle.scss';

const ListOfTitle = (props) =>{
    return (
        <div className='listOfTitle'>
           {
               props.title.map((d,i) =>{
                   return <li onClick={() =>props.showTodoWithId(i)}>{d}</li>
               })
           }
        </div>
    )
}
export default ListOfTitle;