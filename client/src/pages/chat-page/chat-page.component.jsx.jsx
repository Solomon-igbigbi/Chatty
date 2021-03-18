import React from 'react';

import Chat from '../../components/Chat/chat.component'



const ChatPage = ({ location }) => {
    console.log(location)
    return (
        <div>
            <Chat location={location} />
        </div>
    )
}

export default ChatPage;