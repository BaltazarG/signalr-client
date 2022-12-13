import React from 'react';

import Message from './Message';

const ChatWindow = ({chat}) => {
    const chatx = chat
        .map(m => <Message 
            key={Date.now() * Math.random()}
            user={m.user}
            message={m.message}/> 
        );

    return(
        <div>
            {chatx}
        </div>
    )
};

export default ChatWindow;