import React, { useState } from 'react'

function Counter() {
    const [counter,setCounter]=useState(0);
    const add=()=>{
        setCounter(counter+1);
    }
    const minus=()=>{
      counter>1?setCounter(counter-1):setCounter(counter);
  }
  return (
    <div>
        <button onClick={minus} >-</button>
        <p> { counter}</p>
        <button onClick={add}>+</button>
    </div>
  )
}

export default Counter