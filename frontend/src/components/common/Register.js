import { useState,useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import * as React from 'react';
import TextField from '@mui/material/TextField';

// import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

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


const Register = (props) => {
  const navigate = useNavigate();

  


  //vendor and buyer both
  const [service, setService] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [age, setAge] = useState("");
  const [batchName, setBatchName] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopOpeningTime, setShopOpeningTime] = useState("");
  const [shopClosingTime, setShopClosingTime] = useState("");

  const [values, setValues] = React.useState({
    password:"",
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

  const onChangeService = (event) => {
    setService(event.target.value);
  };

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeContact = (event) => {
    setContact(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeBatchName = (event) => {
    setBatchName(event.target.value);
  };

  const onChangeShopName = (event) => {
    setShopName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onChangeShopOpeningTime = (event) => {
    setShopOpeningTime(event.target.value);
  };

  const onChangeShopClosingTime = (event) => {
    setShopClosingTime(event.target.value);
  };




  const resetInputs = () => {
    setService("");
    setName("");
    setEmail("");
    setAge("");
    setBatchName("");
    setShopName("");
    setContact("");
    setPassword("");
    setConfirmPassword("");
    setShopOpeningTime("");
    setShopClosingTime("");

  };






  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      service: service,
      name: name,
      email: email,
      age: age,
      batchName: batchName,
      contact: contact,
      password: values.password,
      confirmPassword: confirmPassword,
      shopName: shopName,
      shopOpeningTime: shopOpeningTime,
      shopClosingTime: shopClosingTime,

    };

    axios
      .post("/api/user/register", newUser)
      .then((response) => {
        alert("Registered Successfully\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
  };

  return (
    <Grid container style={{marginTop:"80px"}} align={"center"} spacing={2}>
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
      <Grid item xs={12}>
        <FormControl sx={{ m: 2, width: '25ch' ,right: '1ch',align:'center' }} variant="outlined">
          <InputLabel id="demo-simple-select-label">User</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={service}
            label="USER"
            onChange={onChangeService}
          >
            <MenuItem value={"1"}>Buyer</MenuItem>
            <MenuItem value={"2"}>Vendor</MenuItem>

          </Select>
        </FormControl>
      </Grid>
      {service == "1" &&
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={onChangeUsername}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={onChangeEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              variant="outlined"
              value={age}
              onChange={onChangeAge}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Number"
              variant="outlined"
              value={contact}
              onChange={onChangeContact}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel id="demo-simple-select-label">Batch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={batchName}
                label="Batch"
                onChange={onChangeBatchName}
              >
                <MenuItem value={1}>UG1</MenuItem>
                <MenuItem value={2}>UG2</MenuItem>
                <MenuItem value={3}>UG3</MenuItem>
                <MenuItem value={4}>UG4</MenuItem>
                <MenuItem value={5}>UG5</MenuItem>
                <MenuItem value={5}>PG1</MenuItem>
                <MenuItem value={6}>PG2</MenuItem>


              </Select>
            </FormControl>
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
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'confirmPassword'}
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
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
                label="Confirm Password"
              />
            </FormControl>

          </Grid>
        </Grid>
      }
      {service == "2" &&
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={onChangeUsername}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={onChangeEmail}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contact Number"
              variant="outlined"
              value={contact}
              onChange={onChangeContact}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Shop Name"
              variant="outlined"
              value={shopName}
              onChange={onChangeShopName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Shop Opening Time"
              variant="outlined"
              value={shopOpeningTime}
              onChange={onChangeShopOpeningTime}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Shop Closing Time"
              variant="outlined"
              value={shopClosingTime}
              onChange={onChangeShopClosingTime}
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
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'confirmPassword'}
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
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
                label="Confirm Password"
              />
            </FormControl>

          </Grid>
        </Grid>
      }

      <Grid item xs={12}>
        <Button variant="contained" style={{ background:"#223026"}}onClick={onSubmit}>
          Register
        </Button>
      </Grid>
    </Grid>
     {/* </LocalizationProvider> */}
      </Grid>
  );
};

export default Register;
