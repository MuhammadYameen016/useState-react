import { useState } from 'react'
import './App.css'

function App() {
  let [url, setUrl] = useState('https://img.freepik.com/premium-photo/switch-turn-3d-illustration_115990-3641.jpg')
  let [button, setButton] = useState('Off')
  function off(){
    if(button === 'Off'){
      url = 'https://cdn-icons-png.freepik.com/512/9400/9400684.png'
      button = 'on'
      setButton(button)
      setUrl(url)
    } else{
      url = 'https://img.freepik.com/premium-photo/switch-turn-3d-illustration_115990-3641.jpg'
      button = 'Off'
      setButton(button)
      setUrl(url)
    }
  }

  return (
    <>
      <img src={url} alt="" />
      <button onClick={off}>{button}</button>
    </>
  )
}

export default App
