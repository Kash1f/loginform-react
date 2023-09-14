import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [fullName, setfullName] = useState("");

    const inputEvent = (event) => {
      setName(event.target.value) 
    }

    const onSubmit = (event) => {
      event.preventDefault();
      setfullName(name)
    }

  return (
    <>
    <div className='main_div'>
      <form onSubmit={onSubmit}>
    <div>
    <h1>Hello {fullName}</h1>
    <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
    <button type='submit'>Click Me</button>
  
    </div>
    </form>
    </div>
    </>
  );
}

export default App;
