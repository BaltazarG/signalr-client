import React, { useState } from 'react';

const ChatInput = ({sendMessage}) => {
    const [message, setMessage] = useState('');
    const [user, setUser] = useState("")
    const onSubmit = (e) => {
        e.preventDefault();
        const isMessageProvided = message && message !== '';
        const isUserProvided = user && user !== '';
        if (isMessageProvided &&  isUserProvided) {
            sendMessage(message, user);
            setMessage("")
            setUser("")
        } 
        else {
            alert('Please insert a message and/or user.');
        }
    }
    const onMessageUpdate = (e) => {
        setMessage(e.target.value);
    }
    const onUserUpdate = (e) => {
        setUser(e.target.value);
    }
    return (
        <form 
            onSubmit={onSubmit}>
            <br />
            <div style={{display:"flex", justifyContent: "space-between", width:"100%"}}>
<label htmlFor="user">User:</label>
            <input 
                type="text"
                id="user"
                name="user" 
                value={user}
                placeholder="User..."
                style={{padding:"5px", marginLeft:"10px"}}
                onChange={onUserUpdate} />
            </div>
            

                
            <br/>
            <br />            
            <div style={{display:"flex", justifyContent: "space-between", width:"100%"}}>

            <label htmlFor="message">Message:</label>

            <input 
                type="text"
                id="message"
                placeholder="Message..."
                style={{padding:"5px", marginLeft:"10px"}}
                name="message" 
                value={message}
                onChange={onMessageUpdate} />
                            </div>

            <br/><br/>
            <div style={{display:"flex", justifyContent:"flex-end", width:"100%"}}>
            <button style={{padding:"10px", backgroundColor:"#3498DB", borderRadius: "6px"}}>Enviar</button>
            </div>
        </form>
    )
};

export default ChatInput;