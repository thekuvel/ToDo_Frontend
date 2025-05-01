import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllTaskAPI } from "../api/taskAPI.js";

function HomePage() {

    let email = localStorage.getItem("email");

    let [taskArray,setTaskArray] = useState([]);

    async function getAllTasks(){
        console.log(email);
        let data = await getAllTaskAPI({email});
        console.log(data);
        setTaskArray(data.taskArray);
    }

    useEffect(()=>{
        getAllTasks();
    },[0])

    return(
        <div className="my-[10px] col-span-10">
            <div className="grid gap-[20px]">

                {
                    taskArray.map(task => (
                        <Link to="/task" state={task} className="p-[10px] border rounded-[10px]" key={task._id} >
                            <p>{task.title}</p>
                        </Link>
                    ))
                }
                
            </div>
        </div>
    )
}

export default HomePage