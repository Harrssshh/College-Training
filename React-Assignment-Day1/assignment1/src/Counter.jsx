import React, { useState } from 'react'

function Counter() {
    const [count ,setCount]=useState(0);
  return (
    <div>
      <center>
      <button onClick={()=>setCount((count)=>count+1)}>
        Count is :{count}
      </button>
      </center>
    </div>
  )
}

export default Counter
