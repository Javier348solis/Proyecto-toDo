const Tarea = ({titulo,eliminar,completado,checked})=>{
    return(
        <>
        <h2>{titulo}</h2>
        <input type="checkbox" checked={checked} onChange={completado}/>
        <button onClick={eliminar}>ELIMINAR</button>
        </>
    )
}
export default Tarea