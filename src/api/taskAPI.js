
let url = import.meta.env.VITE_Backend_URL;

async function createTaskAPI(payload) {
    let res = await fetch(`${url}/task`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    })

    let data = await res.json();
    console.log(data);
    return data;
}

async function getAllTaskAPI(payload) {
    let res = await fetch(`${url}/task/alltask`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    })

    let data = await res.json();
    console.log(data);
    return data;
    
}

async function updateTaskAPI(payload) {
    let res = await fetch(`${url}/task/update`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    })

    let data = await res.json();
    console.log(data);
    return data;
}

async function deleteTaskAPI(payload) {
    let res = await fetch(`${url}/task/delete`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    })

    let data = await res.json();
    console.log(data);
    return data;
}

async function getCompletedTaskAPI(payload) {
    let res = await fetch(`${url}/task/completedtask`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    })

    let data = await res.json();
    console.log(data);
    return data;
    
}

export {createTaskAPI, getAllTaskAPI, updateTaskAPI, deleteTaskAPI, getCompletedTaskAPI}
