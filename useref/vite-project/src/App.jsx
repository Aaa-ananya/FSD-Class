import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRefComponent from './components/useref'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <UseRefComponent />
    </>
  )
}

export default App