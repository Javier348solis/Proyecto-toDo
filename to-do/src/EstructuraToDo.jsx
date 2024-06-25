import React, { useEffect, useState } from 'react'
import Tarea from './Components/Tarea'
import { darDatos } from './post'
import { getDatos } from './Get'
import ContedorTareas from './Components/ContenedorTareas'

export default function EstructuraList() {
    const [tituloTarea,setTitulo] = useState("")
    const [listaTareas,setListaTareas]=useState([])
    const [contador,setContador] = useState(0)
    const agregaTarea = async(e)=>{
        e.preventDefault()
        console.log(tituloTarea);
    
        const tarea = {
            titulo: tituloTarea,
            estado:false
        }
        await darDatos(tarea)
    }

    useEffect(()=>{
        const traeTareas = async()=>{
            const data = await getDatos()
            const tareasHechas = data.filter(tarea=>tarea.estado===true).length
            setContador(tareasHechas)
            setListaTareas(data)
        }
        traeTareas()
    },[listaTareas])

  return (
<div className='container'>
<form className='container-inp'>
      <div>
        <input className='spacetask' type="text" onChange={(e)=>setTitulo(e.target.value)}/>
        <button type='button' className='boton1' onClick={agregaTarea}>Add task</button>
      </div>
     <div>
        <input value={contador} className='Counter' type="number" />
     </div>
  </form>
    <ContedorTareas listaTareas={listaTareas}/>
    <div>
    
    <p>No tasks added</p>
    </div>
</div>
  )
}


