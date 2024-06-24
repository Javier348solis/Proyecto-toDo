import React, { useEffect, useState } from 'react'
import Tarea from './Components/Tarea'
import { darDatos } from './post'
import { getDatos } from './Get'
import ContedorTareas from './Components/ContenedorTareas'

export default function EstructuraList() {
    const [tituloTarea,setTitulo] = useState("")
    const [listaTareas,setListaTareas]=useState([])

    const agregaTarea = async(e)=>{
        e.preventDefault()
        console.log(tituloTarea);
    
        const tarea = {
            titulo: tituloTarea
        }
        await darDatos(tarea)
    }

    useEffect(()=>{
        const traeTareas = async()=>{
            const data = await getDatos()
            setListaTareas(data)
        }
        traeTareas()
    },[])

  return (
<div className=''>
<form>
    
      <input className='spacetask' type="text" onChange={(e)=>setTitulo(e.target.value)}/>
      <button type='button' className='boton1' onClick={agregaTarea}>Add task</button>
      <section className='squad'></section>
    </form>
    <ContedorTareas listaTareas={listaTareas}/>
    <div>
    <input className='Counter' type="number" />
    <p>No tasks added</p>
    </div>
</div>
  )
}


