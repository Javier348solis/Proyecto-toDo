const Tarea = ({titulo,eliminar,completado})=>{
    return(
        <>
        <h2>{titulo}</h2>
        <input type="checkbox"/>
        <button onClick={eliminar}>ELIMINAR</button>
        </>
    )
}
export default Tarea