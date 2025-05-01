import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

function Layout() {

    let email = localStorage.getItem("email")

    let navigate = useNavigate();

    let location = useLocation();
    console.log(location.pathname);
    

    let [settings, setSetting] = useState(false)

    function handleSettingsClick(e){
        // e.preventDefault();
        setSetting(!settings);
    }

    function handleLogOut(e){
        e.preventDefault();
        localStorage.clear();
        navigate("/signin")
    }

    return(
        <div className="min-h-dvh relative">

            <div className="my-[10px] mx-[50px] sm:grid grid-cols-12 gap-[20px]">

                {/* Header */}
                <div className="col-span-12">
                <div className="py-[20px] flex justify-between items-center border border-[#fff] border-b-[#FE7743]">
                    <div>
                        {/* <img src="" alt="logo" /> */}
                        <Link to="/">
                        <p className="text-[24px]">To Do</p>
                        </Link>
                    </div>

                    <div className="hidden sm:block">
                        <Link to="/profile">
                            <p>{email}</p>
                        </Link>
                    </div>

                    <div className="block sm:hidden">
                        <button onClick={handleSettingsClick}>
                            <p>Settings</p>
                        </button>
                    </div>

                </div>
                </div>

                {/* Sidebar */}
                <span className={`col-span-2 ${location.pathname==="/signup" || location.pathname==="/signin"?"hidden":""}`}>
                    <div className={`${settings? "block": "hidden"} sm:block`}>
                        <ul className="grid gap-[20px]">
                            <li><Link to="/" onClick={handleSettingsClick}>Home</Link></li>
                            <li><Link to="/newtask" onClick={handleSettingsClick}>New Task</Link></li>
                            <li><Link to="/taskcompleted" onClick={handleSettingsClick}>Task completed</Link></li>
                            {/* <li><Link to="/profile" onClick={handleSettingsClick}>Profile</Link></li> */}
                            <button className="w-[100px] p-[5px] bg-[#FE7743] border border-[#FE7743] rounded-[10px]" onClick={handleLogOut}>
                                Log out
                            </button>
                        </ul>
                    </div>
                </span>

                <Outlet/>

                <div className="block sm:hidden fixed bottom-0 right-0 left-0 p-[20px]">
                    <div className="flex justify-center">
                        <Link to="/newtask" className="bg-[#FE7743] p-[10px] rounded-[10px]">Add Task</Link >
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Layout