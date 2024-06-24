import Tarea from "./Tarea"

const ContedorTareas = ({listaTareas})=>{
    return(
        <>
            {listaTareas.map((tarea,index)=>(
                <Tarea
                key={index}
                titulo={tarea.titulo}
                />
            ))}
        </>
    )
}
export default ContedorTareas