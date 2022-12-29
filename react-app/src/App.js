import { useState, useEffect } from 'react';
import './App.css';
import DPad from './components/DPad';
import Video from './components/Video';

import io from 'socket.io-client';

const SOCKET_URL = '/';
const socket = io(SOCKET_URL);

function App() {
  const [isConnected, setIsConnected] = useState(socket.isConnected);
  const [message, setMessage] = useState('');
  const [isHuman, setIsHuman] = useState(false);

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
    <div className="App">
      <div className="container">
      <Video 
        data={message}
      />
        <div className="buttonDiv">
          
          <DPad isActive={isHuman} />

          <div style={{display:'flex', flexDirection: 'column', width: 200, marginLeft:100}}>
            <h1>Connected: {isConnected ? "Yes" : "No"}</h1>
            <h1>Mode: {isHuman ? "Human" : "Machine"}</h1>

            <button onClick={() => setIsHuman(!isHuman)}>Humanize</button>
          </div>

        </div>
    
      </div>

    </div>
  );
}


export default App;
