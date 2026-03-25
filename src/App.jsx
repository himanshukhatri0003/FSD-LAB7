import 'aframe'
import { useState } from 'react'
import ARScene from './components/ARScene'

export default function App() {
  const [clr, setClr] = useState('#4CC3D9')

  const toggle = () => setClr(c => (c === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'))

  // Using their exact logic for direct DOM attribute updates
  if (document.querySelector('#box')) {
    document.querySelector('#box').setAttribute('color', clr)
  }

  return (
    <>
      <h1 className="app-title">My WebXR AR App</h1>
      
      <button className="toggle-btn" onClick={toggle}>
        Toggle Box Color
      </button>

      <div className="scene-wrapper">
        <ARScene />
      </div>
    </>
  )
}
