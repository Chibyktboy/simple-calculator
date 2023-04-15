import React, { useState } from 'react'

const App = () => {
  const [x,setX] = useState("");
  const [y,setY] = useState("");
  const [value,setValue] = useState("");

  function add(){
    const addValue = Number(x + y)
    setX("");
    setY("");

   setValue(addValue)
  }
  function subtract(){
    const addValue = (x - y)
    setX("");
    setY("");
   setValue(addValue)
  }
  function divide(){
    const addValue = (x / y)
    setX("");
    setY("");
   setValue(addValue)
  }
  function multiply(){
    const addValue = (x * y);
    setX("");
    setY("");
   setValue(addValue)
  }
  
  function squareRoot(){
    const addValue = Math.sqrt(x,y);
    setX("");
    setY("");
   setValue(addValue)
  }
  function squared(){
    const addValue = (x * x);
    setX("");
    setY("");
   setValue(addValue)
  }
  

  return (
    <>
    <div>
      <input type = "number" placeholder=' x' value={x} onChange={(e) => setX(e.target.value)} />
      <input type = "number" placeholder='y' value={y} onChange={(e) => setY(e.target.value)} />
    </div>
    <button onClick={add}>Add + </button>
  <button onClick ={subtract}>Sub -</button>
    <button onClick={multiply}>Mult x</button>
    <button onClick={divide}>Div /</button>
    <button onClick={squareRoot}>sqrRt  x</button>
    <button onClick={squared}>x sqrd</button>
   
    <div>
      <h3>Your Answer Is : {value}</h3>
    </div>
    </>
  )
}

export default App