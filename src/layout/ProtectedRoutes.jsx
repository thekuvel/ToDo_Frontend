import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({component}){
    try {
        let jwtToken = localStorage.getItem("token");
        let token = jwtDecode(jwtToken);
        localStorage.setItem("email",token.email);

        let currnetTime = Date.now() / 1000; 
        if(token.exp<currnetTime){
            localStorage.clear();
            return <Navigate to="/signin" />
        }

        if(token.isSignedIn){
            return component
        }
        else return <Navigate to="/signin" />

    } catch (error) {
        return <Navigate to="/signin" />
    }
}

export default ProtectedRoutes