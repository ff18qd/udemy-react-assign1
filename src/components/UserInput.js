import React from 'react';
import './UserInput.css';

const UserInput = (props) => 
    <div>
        <label>Input</label>
        <input 
            type='text' 
            value={props.currentName} 
            onChange={props.change}/>
    </div>
    
export default UserInput;