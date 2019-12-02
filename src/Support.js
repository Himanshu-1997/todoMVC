import React from 'react';
import './Support.scss';

const Support  = (props) =>{
    return (
        <div className='sp-wrapper'>
            <div className='sp-headerWrapper'>
                <div className='sp-header'>
                    Instructions
                </div>
                <div className='closebutton' onClick={() => props.handleSupport(false)}>&#10005;</div>
            </div>
            <div className='sp-body'>
                <div className='sp-listitem'><div className='sp-listitemnum'>1.</div><div><li>Click on any list item to edit it.</li></div></div>
                <div className='sp-listitem'><div className='sp-listitemnum'>2.</div><div><li>To mark item as completed, tap on the icon on the left of Todo.</li></div></div>
                <div className='sp-listitem'><div className='sp-listitemnum'>3.</div><div><li>List item can be deleted by clicking on the button on the right of Todo.</li></div></div>
                <div className='sp-listitem'><div className='sp-listitemnum'>4.</div><div><li>Hold and drag the item to re-order the list.</li></div></div>
                <div className='sp-listitem'><div className='sp-listitemnum'>5.</div><div><li>Filter the item based on the tabs at the bottom.</li></div></div>
            </div>
        </div>
    )
}
export default Support;