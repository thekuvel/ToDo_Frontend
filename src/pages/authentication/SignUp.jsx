import { useState } from "react";
import { createUserAPI } from "../../api/userAPI.js";
import { useNavigate } from "react-router-dom";

function SignUp() {

        let navigate = useNavigate();

        let [userInput, setUserInput] = useState({});
    
        function handleChange(e){
            setUserInput(
                {...userInput,
                [e.target.name]:e.target.value,
            })
        }
    
        async function handleSignUp(e){
            e.preventDefault();
            console.log(userInput);
            let data = await createUserAPI(userInput);
            console.log(data);
            alert(data.msg)
            navigate("/signin")
        }
    
        return(
            <div className="col-span-12">
                <form className="grid gap-[20px] justify-center">
                        <div className="grid">
                            <label htmlFor="email">Email</label>
                            <input name="email" className="border rounded-[10px]" type="text" onChange={handleChange}/>
                        </div>
    
                        <div className="grid">
                            <label htmlFor="password">Password</label>
                            <input name="password" className="border rounded-[10px]" type="password" onChange={handleChange}/>
                        </div>
                        
    
                        <div className="grid">
                            <button className="p-[5px] bg-[#FE7743] rounded-[10px]" onClick={handleSignUp}>Sign up</button>
                        </div>
                </form>
            </div>
        )
}

export default SignUp