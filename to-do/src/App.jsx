import { useState } from 'react'
import './App.css'
import EstructuraList from './EstructuraToDo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TO-DO LIST</h1>
    <EstructuraList/>
    </>
  )
}

export default App
