import { useState, useEffect } from 'react';
import './App.css';
import DPad from './components/DPad';
import Video from './components/Video';

import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000';
const socket = io(SOCKET_URL);

import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000';
const socket = io(SOCKET_URL);

function App() {
  const [isConnected, setIsConnected] = useState(socket.isConnected);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('connect', () => { 
      setIsConnected(true);
    });
    
    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on("test", (data) => {
      setMessage(data);
    });

    // clean up
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('test');
    };
  }, []);
  
  return (
    <div className="App"><div className="container">
    <Video />
    
    <div>
      <DPad />
    </div>
    <h1>Connected: {isConnected ? "true":"false"}</h1>

        <h2>message: {message}</h2>
    
  </div>

</div>
  );
}


export default App;
