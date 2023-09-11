import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");


    const inputEvent = (event) => {

      setName(event.target.value)
    }

  return (
    <>
    <div>
    <h1>Hello {name}</h1>
    <input type="text" placeholder="Enter Your Name" onChange={inputEvent}
    
    /><button>Click Me</button>
    </div>
    </>
  );
}

export default App;
