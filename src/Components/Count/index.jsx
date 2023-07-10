import React, { useState } from 'react'

export default function Count() {
  const [ count, setCount] = useState(0);

  const handelClick =()=>{
    setCount(count +1);
  }

  
  return (
    <button onClick={handelClick}>
      <p>Count is {count}</p>
    </button>
  )
}
