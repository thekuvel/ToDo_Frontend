import { useState } from "react";
import { createTaskAPI } from "../api/taskAPI.js";
import { useNavigate } from "react-router-dom";

function NewTask() {
    let navigate = useNavigate();
    let email = localStorage.getItem("email")
    let [userInput, setUserInput] = useState({email});

    function handleChange(e){
        setUserInput(
            {...userInput,
            [e.target.name]:e.target.value,
        })
    }

    async function handleSave(e){
        e.preventDefault();
        // console.log(userInput);
        let data = await createTaskAPI(userInput);
        console.log(data);
        navigate("/")
    }
    

    return(
        <div className="col-span-10">
            <form className="grid gap-[20px]">
                
                <div className="grid">
                    <label htmlFor="title">Title</label>
                    <input name="title" className="border rounded-[10px]" type="text" onChange={handleChange}/>
                </div>
                <div className="grid">
                    <label htmlFor="description">Description</label>
                    <textarea className="border rounded-[10px]" rows="5" name="description" onChange={handleChange}></textarea>
                </div>

                <div>
                    <button className="p-[5px] bg-[#FE7743] rounded-[10px]" onClick={handleSave}>Save</button>
                </div>

            </form>
        </div>
    )
}

export default NewTask