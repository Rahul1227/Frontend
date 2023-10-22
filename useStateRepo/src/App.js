import './App.css';
import Header from './components/Header';
import React,  {useState} from 'react';
function App() {
  const[num, setnum]=useState(1);
  
  function inc(){
    setnum(num+1);
  }
  function dec(){
    setnum(num-1);
  }

  return (
    <div className="App">
      <Header/>
      <header className="mainDiv">
      <h1 className='content'>{num}</h1>
        <button className='btn' onClick={inc}>increment</button>
        <button className='btn' onClick={dec}>decrement</button>
        
      </header>
    </div>
  );
}

export default App;
