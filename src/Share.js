import React from 'react';

const Share = (props) =>{
    let todolist = props.data;
    const handleShare = () =>{
        let c=1;
        let Completedlist = [];
        let Incompletedlist = []; 
        todolist.map((d) => {
            if(d.completed===true){
              Completedlist.push(`${String(c++)} .) ${String(d.list)} ${'\n'}`)
            }
            return null;
            });
        c=1;
        todolist.map((d) => {
          if(d.completed===false){
            Incompletedlist.push(`${String(c++)} .) ${String(d.list)} ${'\n'}`)
          }
          return null;
          });
        let cl = Completedlist.join('\n');
        let icl = Incompletedlist.join('\n');
        let finalData;
        if(Completedlist.length===0)
          finalData = `TODO LIST${'\n\n'}${icl}`;
        else if(Completedlist.length>0)
          finalData = `TODO LIST${'\n\n'}${icl}${'\n\n'}COMPLETED LIST${"\n\n"}${cl}`; 
        
        if(navigator.share!==undefined){
          navigator.share({
            title:'Todolist',
            text:finalData,
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
        }
        else{
          console.log('Your system doesnot support sharing files.');
        }
      }
    return (
        <img src='share.svg' alt='Share' className='share' onClick={handleShare}></img>
    )
}
export default Share;