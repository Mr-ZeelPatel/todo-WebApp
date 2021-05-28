import React from 'react';
import './index.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const ItemList = (props) =>{
    return(<div className='todo_style'>
        <Tooltip title="Delete">
       <Button className='btn_del' onClick={()=>{props.onSelect(props.id)}} style={{cursor:'hand'}}><DeleteIcon /></Button>
       </Tooltip>
       <li> {props.item}</li>
       </div>
    );
}

export default ItemList;