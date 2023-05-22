import { useAuth } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Logout() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.clear();
    auth.logout();
    navigate("/");
  };

  return <Button onClick={handelLogout} sx={{mt:1}}>Sign out</Button>;
}

export default Logout;
