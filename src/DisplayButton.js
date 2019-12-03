import React from 'react';

const DisplayButton = (props) =>{
    return(
        <div className='three-btn'>
            {props.display === 0 ? <button className='all-btn active' onClick={() => props.handleDisplay(0)}>All</button> : <button className='all-btn' onClick={() => props.handleDisplay(0)}>All</button>}
            {props.display === 1 ? <button className='active-btn active' onClick={() => props.handleDisplay(1)}>Active</button> : <button className='active-btn' onClick={() => props.handleDisplay(1)}>Active</button>}
            {props.display === 2 ? <button className='comp-btn active' onClick={() => props.handleDisplay(2)}>Completed</button> : <button className='comp-btn' onClick={() => props.handleDisplay(2)}>Completed</button>}
        </div>
    )
}
export default DisplayButton;