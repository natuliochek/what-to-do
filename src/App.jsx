import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App () {
  const[advice, setAdvice] = useState("");

  useEffect (()=> {
    getAdvice();
  }, [])

  const getAdvice = async ()=> {
    const response = await fetch (`https://bored.api.lewagon.com/api/activity`);
    const data = await response.json();
    console.log(data.activity);
    setAdvice(data.activity)
  }

  return(
    <div className='main-box'>
      <div className='box'>
        <h1>When you feel lazy and bored...  </h1>
        <h2>and you are thinking, what else you don´t want to do,</h2>
        <h2>let´s see, what could be randomly offered...</h2>
      </div>
      <div className='box'>
        <button onClick={getAdvice}>press here</button>
      </div>
      <div className='box'>
        <p>"{advice}"</p>
      </div>
    </div>
  )
}

export default App;