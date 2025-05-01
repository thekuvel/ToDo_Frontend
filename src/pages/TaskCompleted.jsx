import { useEffect, useState } from "react";
import { getCompletedTaskAPI } from "../api/taskAPI.js";
import { Link } from "react-router-dom";

function TaskCompleted() {

    let email = localStorage.getItem("email");

    let [taskArray,setTaskArray] = useState([]);

    async function getCompletedTasks(){
        console.log(email);
        let data = await getCompletedTaskAPI({email});
        console.log(data);
        setTaskArray(data.taskArray);
    }

    useEffect(()=>{
        getCompletedTasks();
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

export default TaskCompleted