import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    const [lastHeartbeat, setLastHeartbeat] = useState(Date.now());
    const backend = import.meta.env.VITE_BACKEND_URL;
    const socket = io(backend);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to the socket!');
        });

        socket.on('testEvent', (data) => {
            console.log(data.msg);
        });

        socket.on('heartbeat', (data) => {
            console.log('Heartbeat received:', data.timestamp);
            setLastHeartbeat(data.timestamp); // Update the last heartbeat timestamp
        });
       
        return () => {
            socket.off('connect');
            socket.off('testEvent');
        };
    }, [socket]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
