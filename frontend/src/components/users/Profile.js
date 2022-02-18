import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


const Profile = (props) => {
  const navigate = useNavigate();


  //endor and buyer both
  // const [user,setUser] = useState(JSON.parse(localStorage.getItem("userdata")));
  const [service, setService] = useState(localStorage.getItem("service"));

  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [contact, setContact] = useState(localStorage.getItem("contact"));
  // const [password, setPassword] = useState();
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [age, setAge] = useState(localStorage.getItem("age"));
  const [batchName, setBatchName] = useState(localStorage.getItem("batchName"));
  const [shopName, setShopName] = useState(localStorage.getItem("shopName"));
  const [shopOpeningTime, setShopOpeningTime] = useState(localStorage.getItem("shopOpeningTime"));
  const [shopClosingTime, setShopClosingTime] = useState(localStorage.getItem("shopClosingTime"));
  const [diawallet, setWallet] = useState("0");

  const [wall, setWall] = useState(false);

  // const [values, setValues] = React.useState({
  //   showPassword: false,
  // });
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

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

  const onChangeWallet = (event) => {
    setWallet(event.target.value);
  };
  // const onChangePassword = (event) => {
  //   setPassword(event.target.value);
  // };

  // const onChangeConfirmPassword = (event) => {
  //   setConfirmPassword(event.target.value);
  // };

  const onChangeShopOpeningTime = (event) => {
    setShopOpeningTime(event.target.value);
  };

  const onChangeShopClosingTime = (event) => {
    setShopClosingTime(event.target.value);
  };




  const resetInputs = () => {
    setService(localStorage.getItem("service"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setAge(localStorage.getItem("age"));
    setBatchName(localStorage.getItem("batchName"));
    setShopName(localStorage.getItem("shopName"));
    setContact(localStorage.getItem("contact"));
    // setPassword();
    // setConfirmPassword("");
    setShopOpeningTime(localStorage.getItem("shopOpeningTime"));
    setShopClosingTime(localStorage.getItem("shopClosingTime"));
    setWallet(localStorage.getItem("wallet"));

  };

  const EditBuyer = (event) => {

    event.preventDefault();

    const newUser = {

      name: name,
      service: service,
      email: email,
      contact: contact,
      batchName: batchName,
      shopName: shopName,
      age: age,
      shopOpeningTime: shopOpeningTime,
      shopClosingTime: shopClosingTime,
      password: localStorage.getItem("password"),


    };
    console.log(newUser);
    axios
      .post("/api/user/editProfile", newUser)
      .then((response) => {
        alert("Buyer details updated");
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

        window.location = "/profile"
      })
      .catch((err) => console.log(err));

    resetInputs();

  };

  const EditVendor = (event) => {

    event.preventDefault();

    const newUser = {

      name: name,
      service: service,
      email: email,
      contact: contact,
      batchName: batchName,
      shopName: shopName,
      age: age,
      shopOpeningTime: shopOpeningTime,
      shopClosingTime: shopClosingTime,
      password: localStorage.getItem("password"),

    };
    console.log(newUser);
    axios
      .post("/api/user/editProfile", newUser)
      .then((response) => {
        alert("Vendor details updated");
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

        window.location = "/profile"
      })
      .catch((err) => console.log(err));

    resetInputs();

  };






  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const AddMoney = (event) => {
    const odr = {
      amount: diawallet,
      email:localStorage.getItem("email")
    }
    console.log(odr);
    axios
      .post("/api/user/addmon", odr)
      .then((response) => {
        localStorage.setItem("wallet", response.data.wallet);
        handleClose();
      });
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
            <Button color="inherit" onClick={() => navigate("/profile")}>
              My Profile
            </Button>
            {/* <Button color="inherit" onClick={() => navigate("/users")}>
              Users
            </Button> */}
            <Button color="inherit" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
            <Button color="inherit" onClick={() => navigate("/home")}>
              Logout
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

      {localStorage.getItem("service") == "1" &&
        <Grid container style={{ marginTop: "80px" }} align={"center"} spacing={2}>
          <Grid item xs={12}>
            <p> Wallet:{localStorage.getItem("wallet")}</p>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" style={{ background: "green" }} onClick={() => {
              // console.log(user);


              // localStorage.setItem("tags", user.tags)


              setWall(true);

              handleClickOpen()
            }}
            >
              Add Money

            </Button>
          </Grid>

          {wall &&

            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Add Money"}
              </DialogTitle>
              <DialogContent>
                <Grid container align={"center"} style={{ marginTop: "60px" }} spacing={2}>

                  <Grid container align={"center"} spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Wallet"
                        variant="outlined"
                        value={diawallet}
                        onChange={onChangeWallet}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        onClick={AddMoney}
                        autoFocus>
                        Submit
                      </Button>      
                    </Grid>

                  </Grid>
                </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Button
                  onClick={handleClose}
                  autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          }

          <Grid item xs={6}>
            <div><h3>Name</h3></div>
            <TextField
              // label=""
              variant="outlined"
              defaultValue={name}
              inputProps={{ readOnly: true }}


            />
          </Grid>
          <Grid item xs={6}>
            <div><h3>Email</h3></div>
            <TextField
              // label="Email"
              variant="outlined"
              defaultValue={email}
              inputProps={{ readOnly: true }}

            />
          </Grid>
          <Grid item xs={4} >
            <div><h3>Age</h3></div>
            <TextField
              // label="Age"
              variant="outlined"
              defaultValue={age}
              inputProps={{ readOnly: true }}

            />
          </Grid>
          <Grid item xs={4}  >
            <div><h3>Contact</h3></div>
            <TextField
              // label="Contact Number"
              variant="outlined"
              defaultValue={contact}
              inputProps={{ readOnly: true }}

            />
          </Grid>

          <Grid item xs={4}>
            <div><h3>Batch</h3></div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel id="demo-simple-select-label">Batch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={batchName}
                label="Batch"
                inputProps={{ readOnly: true }}

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
          <Grid item xs={12} style={{ margin: "10px", padding: "20px" }} >
              <Button variant="contained" style={{ background: "#223026",padding:"10px"}} onClick={EditBuyer}>
              Edit
            </Button>
          </Grid>
          <Grid container align={"center"} spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={onChangeUsername}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={onChangeEmail}
              />
            </Grid>
            <Grid item xs={4}>
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

          </Grid>

        </Grid>


      }
      {localStorage.getItem("service") == "2" &&
        <Grid container style={{ marginTop: "80px" }} align={"center"} spacing={2}>
          <Grid item xs={6}>
            <div><h3>Name</h3></div>
            <TextField
              // label="Name"
              variant="outlined"
              defaultValue={name}
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <div><h3>Email</h3></div>

            <TextField
              // label="Email"
              variant="outlined"
              defaultValue={email}
              inputProps={{ readOnly: true }}

            />
          </Grid>

          <Grid item xs={6}>
            <div><h3>Contact</h3></div>

            <TextField
              // label="Contact Number"
              variant="outlined"
              defaultValue={contact}
              inputProps={{ readOnly: true }}

            />
          </Grid>
          <Grid item xs={6}>
            <div><h3>Shop</h3></div>

            <TextField
              // label="Shop Name"
              variant="outlined"
              defaultValue={shopName}
              inputProps={{ readOnly: true }}

            />
          </Grid>
          <Grid item xs={6}>
            <div><h3>Open Time</h3></div>

            <TextField
              // label="Shop Opening Time"
              variant="outlined"
              defaultValue={shopOpeningTime}
              inputProps={{ readOnly: true }}

            />
          </Grid>
          <Grid item xs={6}>
            <div><h3>Close Time</h3></div>

            <TextField
              // label="Shop Closing Time"
              variant="outlined"
              defaultValue={shopClosingTime}
              inputProps={{ readOnly: true }}

            />
          </Grid>
          <Grid item xs={12} style={{ margin: "10px", padding: "20px" }} >
              <Button variant="contained" style={{ background: "green" }}onClick={EditVendor}>
              Edit
            </Button>
          </Grid>

          <Grid container align={"center"} spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={onChangeUsername}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                inputProps={{ readonly: true }}
              // onChange={onChangeEmail}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Contact Number"
                variant="outlined"
                value={contact}
                onChange={onChangeContact}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Shop Name"
                variant="outlined"
                value={shopName}
                onChange={onChangeShopName}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Shop Opening Time"
                variant="outlined"
                value={shopOpeningTime}
                onChange={onChangeShopOpeningTime}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Shop Closing Time"
                variant="outlined"
                value={shopClosingTime}
                onChange={onChangeShopClosingTime}
              />
            </Grid>

          </Grid>
        </Grid>
      }


      </Grid>
    </Grid>
    // {/* </LocalizationProvider> */}
  );
};

export default Profile;
