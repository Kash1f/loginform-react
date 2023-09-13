import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [fullName, setfullName] = useState("");

    const inputEvent = (event) => {

      setName(event.target.value) 
    }

    const onSubmit = () => {
      setfullName(name)
    }



  return (
    <>
    <div>
    <h1>Hello {fullName}</h1>
    <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
    <button onClick={onSubmit}>Click Me</button>
    
    
    </div>
    </>
  );
}

export default App;
