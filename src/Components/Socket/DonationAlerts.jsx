import React from 'react';
import React, { useEffect } from 'react';
import { useSocket } from './SocketProvider';

const DonationAlerts = () => {
    const { socket } = useSocket();
    useEffect(() => {
        if (socket == null) return;
    
        socket.on('donation-success', (message) => {
          alert(message.data); 
        });
    
        return () => {
          socket.off('donation-success');
        };
      }, [socket]);

    return (
        <div>
            {/*listening for sucesss */}
        </div>
    );
};

export default DonationAlerts;