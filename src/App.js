import { useState } from 'react';
import './App.css';

function App() {
  const [hex,setHex] = useState("#ffffff");

  function randomHexx(){
    const randomHex = "#" + Math.floor(Math.random() * 16777721).toString(16);
    setHex(randomHex);
  }
  return (
    <div className="App" style={{backgroundColor:`${hex}`}}>
      <h1>{hex}</h1>
      <button onClick={randomHexx}>click for new Background</button>
      <button onClick={() => navigator.clipboard.writeText(hex)}>Copy the hex value</button>
     
    </div>
  );
}

export default App;
