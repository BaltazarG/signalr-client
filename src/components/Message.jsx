import React from 'react';

const Message = ({message,user}) => (
    <div style={{ background: "#3498DB", borderRadius: '5px',marginTop:"5px", padding: '10px', color:"white", border:"1px solid #344955"}}>
        <p ><span style={{color:"#34495E", fontWeight:"bold"}}>{user}: </span>{message}</p>
    </div>
);

export default Message;