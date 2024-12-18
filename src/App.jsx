import React from 'react'
import { useState } from 'react'
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



function App() {

 const [count,setCount]=useState(0);

  return (
    <div className='w-full h-screen bg-gray-900'>
      <div className='w-2/4 md:w-1/4 h-1/2  m-auto relative top-44 border-2 border-gray-400 text-white	text-center pt-8'>
      <p className='text-2xl sm:text-4xl'> {count}</p>
<div className='	 mt-16 flex justify-evenly text-2xl md:text-3xl'>
    <button onClick={()=> setCount(count + 1)}>  +</button>
    <button onClick={()=> setCount(count - 1)}>-</button>
    <button onClick={()=> setCount(0)}>reset</button>
    </div>
      </div>
    </div> 
  )
}

export default App
