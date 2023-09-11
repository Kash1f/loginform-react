import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");


    const inputEvent = (event) => {

      setName(event.target.value) //here event object will find the target in the event object and value in this case which will let us access what the user will enter

      //and setName will change the state and this will become the current state as its the updated function
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
