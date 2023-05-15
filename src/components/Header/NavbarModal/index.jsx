import { useState } from "react";
import RegisterForm from "../../Form/RegisterForm";
import LoginForm from "../../Form/LoginForm";
import { Box, Typography } from "@mui/material";
import ScrollDialog from "../../ScrollDialog";

function NavbarModal({ icon, text }) {
  const [title, setTitle] = useState("Login");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const handleFormSwitch = () => {
    setIsLoginForm(!isLoginForm);
    setTitle(isLoginForm ? "Sign up" : "Sign in");
  };
  return (
    <ScrollDialog icon={icon} title={title} navbarTitle={text}>
      {isLoginForm ? <LoginForm /> : <RegisterForm />}
      <Box textAlign="center" sx={{ mt: 2 }}>
        <Typography
          variant="p"
          sx={{ mt: 2,cursor: "pointer" }}
          onClick={handleFormSwitch}
        >
          {isLoginForm ? "Don't have an account?" : "Already have an account?"}
        </Typography>
      </Box>
    </ScrollDialog>
  );
}

export default NavbarModal;
