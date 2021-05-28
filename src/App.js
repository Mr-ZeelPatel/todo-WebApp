import React, { useState } from 'react';
import ItemList from './ItemList';
import './index.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const App = ()=>{
  const [item,setItem] = useState('')
  const [listofitems,setlistofitems] = useState([])
  const itemChange = (event)=>{
    setItem(event.target.value);
  }

  const addItem = () =>{
    if(item===''){
      alert('Please write something')
    }
    else{
    setlistofitems((prev)=>{
        return[...prev,item];
  });}
  setItem('');
  };

  const deleteItem = (id) =>{
     setlistofitems((prev)=>{
       return prev.filter((arrayele, index)=>{
         return index!==id;
       }
      )
     });
    }
       
  return (
    <div className='main_div'>
      <div className='center_div'>
        <h1>TODO LIST</h1>
    <input type="text" onChange={itemChange} value={item} placeholder='Add item here'/>
    <Tooltip title='Add'>
    <Button className='btn_add' onClick={addItem} style={{cursor:'hand'}}><AddIcon/></Button>
    </Tooltip>
    <ol>
     {listofitems.map((itm,idx)=>{
       return <ItemList item={itm} id={idx} key={idx} onSelect={deleteItem}/>; 
     })}
    </ol>

    </div>
    </div>
  )
} 

export default App;