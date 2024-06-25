import { useState } from 'react'
import './App.css'
import EstructuraList from './EstructuraToDo'
import { darDatos } from './post'
import { getDatos } from './Get'
import { uploadCheck } from './Put'
import { deleteTask } from './Delete'
function App() {

  return (
    <>
      <h1>TO-DO LIST</h1>
      <EstructuraList/>
    
    </>
  )
}

export default App
