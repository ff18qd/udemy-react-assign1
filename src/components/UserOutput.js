import React from 'react';

const pStyle = {
    fontSize: '20px',
    textAlign: 'center',
    color: 'red',
};

const UserOutput = (props) => 
    <div>
        <h4>{props.username}</h4>
        <p>Schduled Event</p>
        <p style={pStyle}>Time</p>
    </div>
    
export default UserOutput;