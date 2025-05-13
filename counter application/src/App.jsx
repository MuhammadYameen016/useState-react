import { useState } from 'react'
import './App.css'

function App() {
  let [num, setNum] = useState(0)
  function add(){
    num = num + 1
    setNum(num)
  }

  function minus(){
    num = num - 1
    setNum(num)
    if(num == -1){
      alert('is se kam nahin hoga')
      num = 0
      setNum(num)
    }
  }

  function refresh(){
    num = 0
    setNum(num)
    alert('refreshed successfully!')
  }

  return (
    <>
      <h1>Counter Application</h1>
      <p>{num}</p>
      <button onClick={add}> + </button>
      &nbsp;
      <button onClick={minus}> - </button>
      <br /><br />

      <button onClick={refresh}>Refresh</button>
    </>
  )
}

export default App
