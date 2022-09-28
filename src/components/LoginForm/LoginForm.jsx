import React from "react";
import PTextField from "./organs/PTextField";
import "./LoginForm.css";
import { Typography, Box, Button, Container } from "@mui/material";

const LoginForm = () => {
  return (
    <div className="container">
      <Box className="box">
        <Typography className="logo" variant="h5">
          Logo
        </Typography>
        <Typography className="heading-text" variant="h6">
          Sign In
        </Typography>
        <div className="sub-heading">
          <Typography>use your account</Typography>
        </div>
        <Box className="sect">
          <PTextField placeholderString="Email" />
          <PTextField placeholderString="Password" typeString="password" />
          <Button id={"login-btn"} variant="contained">
            Login
          </Button>
          <Box className="containment">
            <Typography variant="body2">don't have an account?</Typography>
            <Button variant="text" sx={{ fontWeight: 900, fontSize: "0.8rem" }}>
              create account
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LoginForm;
