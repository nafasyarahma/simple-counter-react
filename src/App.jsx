import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount (count + 1)
  }
  
  const decrease = () => {
    setCount (count - 1)
  }

  const reset = () => {
    setCount (0)
  }

  return (
    <>
      <h1>Simple Counter App </h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={decrease}> - </button> 
        <button onClick={reset}> RESET </button> 
        <button onClick={increase}> + </button>
      </div>
    </>
  )
}

export default App
