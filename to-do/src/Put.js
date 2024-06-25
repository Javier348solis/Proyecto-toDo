async function uploadCheck(id) {
    try {
        let task = {
            estado:true
        }
    const answer = await fetch(`http://localhost:3000/api/task/${id}`,{
        method:"PUT",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(task)
    })
    let data = await answer.json()
    console.log(data)
    } catch (error) {
        console.log(error);
    }
}
getDatos()