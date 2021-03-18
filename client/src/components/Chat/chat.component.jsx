import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [ room, setRoom] = useState('');
    const SERVER = "localhost:8000"

    

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        
        socket = io(SERVER, {
            withCredentials: true,
            extraHeaders: {
              "my-custom-header": "abcd"
            }
            });
        
        setName(name);
        setRoom(room)

        socket.emit('join', { name, room })
    }, [SERVER, location.search])

    return (
        <div>
            <h1>Chat</h1>
        </div>
    )
}

export default Chat;