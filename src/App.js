import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [fullName, setfullName] = useState("");

    const inputEvent = (event) => {

      setName(event.target.value) //here event object will find the target in the event object and value in this case which will let us access what the user will enter

      //and setName will change the state and this will become the current state as its the updated function
    }

    //here this onSubmit function will be called upon clicking the button which will then display the fullname
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
