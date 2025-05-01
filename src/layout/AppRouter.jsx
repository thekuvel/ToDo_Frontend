import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "../pages/Home.jsx";
import NewTask from "../pages/NewTask.jsx";
import Task from "../pages/Task.jsx";
import TaskCompleted from "../pages/TaskCompleted.jsx";
import Profile from "../pages/Profile.jsx";
import SignIn from "../pages/authentication/SignIn.jsx";
import SignUp from "../pages/authentication/SignUp.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

function AppRouter(component) {

    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Layout/>}>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Route>

                <Route path="/" element={<ProtectedRoutes component={<Layout/>}/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/newtask" element={<NewTask/>}/>
                    <Route path="/task" element={<Task/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/taskcompleted" element={<TaskCompleted/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
    
}

export default AppRouter