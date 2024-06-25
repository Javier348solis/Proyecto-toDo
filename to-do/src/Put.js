async function uploadCheck(id,estado) {
    try {
        let task = {
            estado: !estado
        };

        const answer = await fetch(`http://localhost:3001/api/task/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(task)
        });

        let data = await answer.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
export {uploadCheck}