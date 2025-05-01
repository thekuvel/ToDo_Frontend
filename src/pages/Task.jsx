import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { deleteTaskAPI, updateTaskAPI } from "../api/taskAPI";

function Task() {

    let navigate = useNavigate();

    let location = useLocation();
    let task = location.state;
    console.log(task.isCompleted);

    let [userInput, setUserInput] = useState(task);
    let [isCompleted, setIsCompleted] = useState(task.isCompleted);

    function handleChange(e){
        setUserInput(
            {...userInput,
            [e.target.name]:e.target.value,
        })
    }

    function handleCompleted(e){
        setIsCompleted(!isCompleted);
        setUserInput(
            {...userInput,
            isCompleted:e.target.checked,
        })
    }

    async function handleUpdate(e){
        e.preventDefault();
        console.log(userInput);
        let data = await updateTaskAPI(userInput);
        alert(data.msg);
    }
    async function handleDelete(e){
        e.preventDefault();
        // console.log(userInput);
        let data = await deleteTaskAPI(userInput);
        localStorage.setItem("token",data.token)
        alert(data.msg);
        navigate("/")
    }
    
    
    return(
        <div className="col-span-10">
            <form className="grid gap-[20px]">
                
                <div className="grid">
                    <label htmlFor="title">Title</label>
                    <input className="border rounded-[10px]" type="text" value={userInput.title || ""} onChange={handleChange}/>
                </div>
                <div className="grid">
                    <label htmlFor="description">Description</label>
                    <textarea className="border rounded-[10px]" rows="5" name="description" value={userInput.description || ""} onChange={handleChange}></textarea>
                </div>
                <div className="grid">
                    <label htmlFor="completed">Completed</label>
                    <input className="border rounded-[10px]" type="checkbox" checked={isCompleted} onChange={handleCompleted}/>
                </div>

                <div className="flex gap-[20px]">
                    <button type="submit" className="p-[5px] bg-[#FE7743] rounded-[10px]" onClick={handleUpdate}>Update</button>
                    <button type="submit" className="p-[5px] bg-[#FE7743] rounded-[10px]" onClick={handleDelete}>Delete</button>
                </div>

            </form>
        </div>
    )
}

export default Task