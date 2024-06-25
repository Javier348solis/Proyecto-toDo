import { deleteTask } from "../Delete"
import { uploadCheck } from "../Put"
import Tarea from "./Tarea"

const ContedorTareas = ({listaTareas})=>{

    const eliminaTarea = async(id)=>{
        await deleteTask(id)
    }

    const actualizaTarea = async(id,estado)=>{
        await uploadCheck(id,estado)
    }


    return(
        <div className='squad'>
            {listaTareas.map((tarea,index)=>(
                <Tarea
                key={index}
                titulo={tarea.titulo}
                eliminar={()=>{
                    eliminaTarea(tarea.id)
                }}
                checked={tarea.estado}
                completado={()=>{
                    actualizaTarea(tarea.id,tarea.estado)
                }}
                />
            ))}
        </div>
    )
}
export default ContedorTareas