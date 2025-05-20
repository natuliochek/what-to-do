import { useState } from 'react';
import { useEffect } from 'react';
import pictureUp from './faultier.png';
import pictureDown from './relax.png';
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
      </div>
      <img className='picUp' src={pictureUp} width="150px" />
      <div className='par'>
        <p>and you are thinking, what else you don´t want to do,</p>
        <p>let´s see, what could be randomly offered...</p>
      </div>
      <button onClick={getAdvice}>press here</button>
      <div className='box'>
        <h2>"{advice}"</h2>
      </div>
      <img className='picDown' src={pictureDown} width="150px" />
    </div>
  )
}

export default App;