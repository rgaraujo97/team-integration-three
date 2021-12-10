import React from 'react';
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import Box from "@mui/material/Box"


const Login = () => {
  return (
   <Box sx={{ margin: "100px"}}>
     <Input error label="Username" style={{ borderColor: "#443DF6"}} helperText="teste" />
   </Box>
  );
}

export default Login;
