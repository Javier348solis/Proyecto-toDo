//POST
async function darDatos(tarea){ 
    try {
        const respuesta = await fetch("http://localhost:3001/api/task",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        })
        let data = await respuesta.json()
         console.log(data);
    } catch (error) {
        console.log(error);
    }
} 
export {darDatos}