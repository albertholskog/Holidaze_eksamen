import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = useAuth();
const navigate = useNavigate()
  const handelLogout = () => {
    auth.logout();
    localStorage.clear()
    navigate("/")
  };
  return (
    <div>
      <button onClick={handelLogout}>logout</button>
    </div>
  );
}

export default Profile;
