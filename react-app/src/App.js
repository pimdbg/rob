import './App.css';
import DPad from './components/DPad';
import Video from './components/Video';

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <Video />
        
        <div>
          <DPad />
        </div>
      </div>

    </div>
  );
}


export default App;
