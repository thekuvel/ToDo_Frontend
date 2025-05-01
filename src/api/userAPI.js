let url = import.meta.env.VITE_Backend_URL;

async function createUserAPI(payload) {
    // console.log(payload);
    
    let res = await fetch(`${url}/authentication/signup`, {
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

async function signInUserAPI(payload) {
    // console.log(payload);
    
    let res = await fetch(`${url}/authentication/signin`, {
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

export {createUserAPI, signInUserAPI}