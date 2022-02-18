import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import * as React from 'react';
import TextField from '@mui/material/TextField';

// import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const Login = (props) => {


    //vendor and buyer both
 


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [values, setValues] = React.useState({
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };


    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };





    const resetInputs = () => {
      
        setEmail("");
        setPassword("");
    };

    const navigate = useNavigate();




    const onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
       
            email: email,
            password: values.password,
        };

        axios
            .post("/api/user/login", newUser)
            .then((response) => {
                alert("Login successful");
                console.log(response.data);
                // localStorage.setItem("userdata", JSON.stringify(response.data));
                    localStorage.setItem("name", response.data.name);
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("age", response.data.age);
                    localStorage.setItem("service", response.data.service);
                    localStorage.setItem("contact", response.data.contact);
                    localStorage.setItem("batchName", response.data.batchName);
                    localStorage.setItem("shopName", response.data.shopName);
                    localStorage.setItem("password", response.data.password);
                    localStorage.setItem("confirmPassword", response.data.confirmPassword);
                    localStorage.setItem("shopOpeningTime", response.data.shopOpeningTime);
                    localStorage.setItem("shopClosingTime", response.data.shopClosingTime);
                    localStorage.setItem("wallet", response.data.wallet);
                    navigate("/profile")
            })
            .catch((err) => console.log(err));

        resetInputs();
    };

    return (
        <Grid container style={{ marginTop: "80px" }} align={"center"} spacing={2}>
            <Box sx={{ flexGrow: 1 }} style={{ background: "#7e9484" }}>
            <AppBar position="fixed" style={{ background: "#1f3024" }} >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigate("/")}
                    >
                        Canteen Portal
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="inherit" onClick={() => navigate("/home")}>
                        Home
                    </Button>
                    {/* <Button color="inherit" onClick={() => navigate("/users")}>
              Users
            </Button> */}
                    <Button color="inherit" onClick={() => navigate("/register")}>
                        Register
                    </Button>
                    <Button color="inherit" onClick={() => navigate("/login")}>
                        Login
                    </Button>
                    {/* <Button color="inherit" onClick={() => navigate("/profile")}>
              My Profile
            </Button> */}
                    {/* <Button color="inherit" onClick={() => navigate("/food_add")}>
            Food add
          </Button> */}
                    {/* <Button color="inherit" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button> */}
                </Toolbar>
            </AppBar>
        </Box>

            <Grid container align={"center"} spacing={2}>
            <Grid item xs={12} style={{marginTop:"40px"}}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Grid>
                   
           
            <Grid item xs={12}>
                    <Button variant="contained" style={{ background: "#1f3024"}}  onClick={onSubmit}>
                    Login
                </Button>
            </Grid>
            </Grid>
            </Grid>
        // {/* </LocalizationProvider> */}
    );
};

export default Login;
