 async function getDatos() {
    try {
        const respuesta = await fetch("http://localhost:3001/api/task")
        let datosFetch = await respuesta.json()
        return datosFetch
    }catch(error) {
    console.log("Error")
    }
};
export {getDatos}