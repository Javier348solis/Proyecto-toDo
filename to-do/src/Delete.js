import { getDatos } from "./Get";

async function deleteTask(id) {
    try {
        const deleteApp = await fetch(`http://localhost:3001/api/task/${id}`, {
            method: "DELETE"
        });

        if (deleteApp.ok) { 
            await this.getDatos(); // Usar this para llamar a métodos de la misma instancia
            await Toast.fire({
                icon: 'error',
                title: 'Successfully task deleted',
            });
            await getDatos()
        } else {
            // Manejar respuesta no exitosa si es necesario
        }
    } catch (error) {
        console.log(error);
    }
}
export { deleteTask}