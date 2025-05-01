import { useState } from "react";
import { signInUserAPI } from "../../api/userAPI.js";
import { useNavigate } from "react-router-dom";

function SignIn() {

    let navigate = useNavigate();

    let [userInput, setUserInput] = useState({});

    function handleChange(e){
        setUserInput(
            {...userInput,
            [e.target.name]:e.target.value,
        })
    }

    async function handleSignIn(e){
        e.preventDefault();
        console.log(userInput);
        let data = await signInUserAPI(userInput)
        console.log(data);
        if(data.code){
            alert(data.msg);
            localStorage.setItem("email",data.userObj.email);
            localStorage.setItem("token",data.token)
            navigate("/");
        }
    }

    async function handleSignUp(e){
        e.preventDefault();
        navigate("/signup");
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
                    

                    <div className="grid gap-[20px]">
                        <button className="p-[5px] bg-[#FE7743] rounded-[10px]" onClick={handleSignIn}>Sign in</button>
                        <button className="p-[5px] bg-[#FE7743] rounded-[10px]" onClick={handleSignUp}>Sign up</button>
                    </div>
            </form>
        </div>
    )
}

export default SignIn