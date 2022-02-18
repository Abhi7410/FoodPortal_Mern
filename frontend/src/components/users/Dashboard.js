import { useState,useEffect } from "react";
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

import { useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";


const Dashboard = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setName("Dass TAs");
    }, []);

    // return <div style={{ textAlign: "center" }}>Happy Coding - {name}</div>;
    return (
        // <Grid container align={"center"} spacing={2}>

        //     {localStorage.getItem("service") == "1" &&
        //         <Grid container style={{ marginTop: "80px" }} align={"center"} spacing={2}>
                
                    
        //             </Grid>

                


        //     }
        //     </Grid>
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
        <div style={{  background:"#7e9484" }} className="container valign-wrapper">
            <div className="row">
                <div className="col s12 center-align">

                    <h6>

                    </h6>
                    <Card sx={{ minwidth: 350, background:"#81f09f" ,marginTop:"120px",fontSize:"25px"}}>
                        <CardContent>
                            <h4>
                                <b>Hello {localStorage.getItem("name").split(" ")[0]} !</b>

                            </h4>
                       

                                <p className="flow-text grey-text text-darken-1">
                                    You are logged into the canteen portal{" "}
                                    <span style={{ fontFamily: "monospace" }}><b>THE FOOD CAST</b></span>
                            </p>
                            {localStorage.getItem("service") == "1" &&
                                <ul>
                                    <li><a href="/profile">My Profile</a></li>
                                    <li><a href="/buyermenu">View Food Items</a></li>
                                    <li><a href="/myOrders">My Orders</a></li>
                                </ul>
                            }
                            {localStorage.getItem("service") == "2" &&
                                <ul>
                                    <li><a href="/profile">My Profile</a></li>
                                    <li><a href="/food_add">Add Food Item</a></li>
                                    <li><a href="/vendormenu">My Food Menu</a></li>
                                    <li><a href="/vendorOrders">Orders</a></li>
                                    <li><a href="/stats">Statistics</a></li>
                                </ul>
                            }
                            
                            </CardContent>
                    </Card>

                    <br></br>
                    
                </div>
            </div>
            </div>
            </Grid>
    )
};

export default Dashboard;
 