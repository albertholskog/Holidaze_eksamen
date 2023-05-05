import { Grid } from "@mui/material";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../components/ProfileInfo";
import ProfileVenues from "../components/ProfileVenues";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handelLogout = () => {
    auth.logout();
    localStorage.clear();
    navigate("/");
  };
  return (
    <Grid container>
      <ProfileInfo /> 
      <ProfileVenues />
    </Grid>
  );
}

export default Profile;
