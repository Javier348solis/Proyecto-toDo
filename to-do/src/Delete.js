async function deleteTask(id) {
    try {
        const deleteApp = await fetch( `http://localhost:3001/api/task/${id}`,{ 
        method: "Delete"
    });
    if (deleteApp.ok) {
        await getDatos();
    await Toast.fire({
        icon: 'error',
        title: 'Succesfully task delete',
      })
    }
    else{
    }
    } catch (error) {
        console.error(error);
    }
}
export {deleteTask, darDatos}