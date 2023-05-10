import { Navigate } from "react-router-dom";
import { useAuth } from "../../utils/auth";


function RequireAuth({children}) {

    const auth = useAuth()
   
    const checkLocal = localStorage.getItem("accessToken")

    if (!auth.user && !checkLocal) {
      
        return <Navigate to="/"/>
    }
  return children
}

export default RequireAuth;
