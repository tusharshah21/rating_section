import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rating from './components/Rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Rating/>
      </div>
    </>
  )
}

export default App
