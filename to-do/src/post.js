//POST
async function darDatos(){ 
    try {
        let tarea ={
            id:Date.now(),
            nombre:inputTask.value,
            estado:false
        }
        const respuesta = await fetch("http://localhost:3000/api/task",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        })
        let data = await respuesta.json()
        getDatos()
         console.log(data);
    } catch (error) {
        console.log(error);
    }
} 