import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from "@mui/material/";
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';

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
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
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

const FoodMenu = (props) => {


    //vendor and buyer both
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);
    const [itemName, setitemName] = useState("");

    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [type, setType] = useState("");
    const [addon, setAddon] = useState("");
    const [vendorName, setvendorName] = useState("");

    const [itemShop, setitemShop] = useState("");
    const [tags, setTags] = useState("");

    const [editfood, setEdit] = useState();
    const [delfood, setDel] = useState(0);


    // const useStyles = makeStyles(theme => ({
    //     root: {
    //         maxWidth: 345,
    //         [theme.breakpoints.down("md")]: {
    //             maxWidth: 200
    //         }
    //     },
    //     media: {
    //         height: 140
    //     }
    // }));



    const onChangeitemName = (event) => {
        setitemName(event.target.value);
    };

    const onChangePrice = (event) => {
        setPrice(event.target.value);
    };

    const onChangeRating = (event) => {
        setRating(event.target.value);
    };

    const onChangeType = (event) => {
        setType(event.target.value);
    };

    const onChangeAddon = (event) => {
        const {
            target: { value },
        } = event;
        setAddon(typeof value === "string" ? value.split(",") : value);
    };

    const onChangeitemShop = (event) => {
        setitemShop(event.target.value);
    };

    const onChangeTags = (event) => {
        const {
            target: { value },
        } = event;
        setTags(typeof value === "string" ? value.split(",") : value);
    };


    const resetInputs = () => {
        setitemName(localStorage.getItem("itemName"));
        setPrice(localStorage.getItem("price"));
        setRating(localStorage.getItem("rating"));
        setType(localStorage.getItem("type"));
        setAddon(localStorage.getItem("addon"));
        setTags(localStorage.getItem("tags"));
        setvendorName(localStorage.getItem("vendorName"));
        setitemShop(localStorage.setItem("shopName"));


    };
    // const classes = useStyles();
    const theme = useTheme();

    const onSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            _id: localStorage.getItem("id"),
            itemName: itemName,
            price: price,
            rating: rating,
            type: type,
            addon: addon,
            tags: tags,
            vendorName: vendorName,
            itemShop: itemShop

        };
        console.log(newItem);
        axios
            .post("/api/food/editItem", newItem)
            .then((response) => {
                alert("Updated Successfully\t");
                console.log(response.data);
                localStorage.setItem("_id", response.data._id);
                localStorage.setItem("itemName", response.data.itemName);
                localStorage.setItem("price", response.data.price);
                localStorage.setItem("rating", response.data.rating);
                localStorage.setItem("type", response.data.type);
                localStorage.setItem("addon", response.data.addon.join(","));
                localStorage.setItem("tags", response.data.tags.join(","));
                localStorage.setItem("vendorName", response.data.vendorName);
                localStorage.setItem("itemShop", response.data.itemShop);

                // window.location = "/vendormenu"
            });
        handleClose();
        resetInputs();
        // window.location = "/vendormenu"
    };
    useEffect(() => {
        axios
            .get("/api/food")
            .then((response) => {
                setFoods(response.data);
                // setSortedUsers(response.data);
                // setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const [open, setOpen] = React.useState(false);
    // const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onDel = (event) => {
        // event.preventDefault();

        const newItem = {
            _id: localStorage.getItem("id"),
        };
        console.log(newItem);
        axios
            .post("/api/food/delItem", newItem)
            .then((response) => {
                alert("Deleted Successfully\t");
                window.location = "/vendormenu"
            });
        // window.location = "/vendormenu"
    };


    return (

        <Grid >
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
            <div>
               
                <Grid item xs={12} md={12} lg={12}>
                    <Paper style={{marginTop:"100px"}}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {foods.map((foods, ind) => (
                                    <>
                                        {
                                            
                                        foods.itemShop === localStorage.getItem("shopName") &&
                                            <>
                                              
                                            <TableRow key={ind}>
                                                {/* <Card className={classes.root}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={classes.media}

                                                            title="Contemplative Reptile"
                                                        />
                                                        <CardContent> */}
                                                            {/* <TableCell>{ind}</TableCell>
                                        <TableCell>{foods.itemName}</TableCell>
                                        <TableCell>{foods.type}</TableCell>
                                        <TableCell>{foods.price}</TableCell> */}
                                                            <ul>
                                                                <li style={{listStyleType:"none"}}>{ind + 1}</li>
                                                                <li><b>Name : </b>{foods.itemName}</li>
                                                                <li><b>Price : </b>{foods.price}</li>
                                                                <li><b>Veg/Non : </b>{foods.type}</li>
                                                                <li><b>Addons : </b>{foods.addon}</li>
                                                                <li><b>Tags :  </b>{foods.tags}</li>
                                                                <li><b>Rating : </b>{foods.rating}</li>
                                                            </ul>
                                                            <div class="row">
                                                                <div class="col s4">
                                                                    <Button variant="contained" style={{ background: "green" }} onClick={() => {
                                                                        localStorage.setItem("id", foods._id)
                                                                        setitemName(foods.itemName)
                                                                        setPrice(foods.price)
                                                                        setType(foods.type)
                                                                        setAddon(foods.addon)
                                                                        setTags(foods.tags)
                                                                        handleClickOpen()
                                                                    }}
                                                                    >
                                                                        Edit

                                                                    </Button>
                                                                </div>
                                                                <div class="col s4">
                                                                    <Button variant="contained" style={{ background: "red" }} onClick={() => {
                                                                        localStorage.setItem("id", foods._id)
                                                                        onDel();
                                                                    }}>
                                                                        Delete

                                                                    </Button>
                                                                </div>

                                                                <Dialog
                                                                    fullScreen={fullScreen}
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    aria-labelledby="responsive-dialog-title"
                                                                >
                                                                    <DialogTitle id="responsive-dialog-title">
                                                                        {"Edit Food"}
                                                                    </DialogTitle>
                                                                    <DialogContent>
                                                                        <Grid container align={"center"} style={{ marginTop: "60px" }} spacing={2}>

                                                                            <Grid container align={"center"} spacing={2}>
                                                                                <Grid item xs={12}>
                                                                                    <TextField
                                                                                        label="Name"
                                                                                        variant="outlined"
                                                                                        value={itemName}
                                                                                        onChange={onChangeitemName}
                                                                                    />
                                                                                </Grid>


                                                                                <Grid item xs={12}>


                                                                                    <TextField
                                                                                        label="Price"
                                                                                        variant="outlined"
                                                                                        value={price}
                                                                                        onChange={onChangePrice}
                                                                                    />
                                                                                </Grid>
                                                                                <Grid item xs={12}>

                                                                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                                                                        <Select
                                                                                            labelId="demo-simple-select-label"
                                                                                            id="demo-simple-select"
                                                                                            value={type}
                                                                                            label="Type"
                                                                                            onChange={onChangeType}
                                                                                        >
                                                                                            <MenuItem value={"Veg"}>Veg</MenuItem>
                                                                                            <MenuItem value={"Non-Veg"}>Non-Veg</MenuItem>



                                                                                        </Select>
                                                                                    </FormControl>
                                                                                </Grid>

                                                                                <Grid item xs={12}>

                                                                                    <TextField
                                                                                        label="Add-Ons"
                                                                                        variant="outlined"
                                                                                        value={addon}
                                                                                        onChange={onChangeAddon}
                                                                                    />
                                                                                </Grid>
                                                                                <Grid item xs={12}>

                                                                                    <TextField
                                                                                        label="Tags"
                                                                                        variant="outlined"
                                                                                        value={tags}
                                                                                        onChange={onChangeTags}
                                                                                    />
                                                                                </Grid>



                                                                            </Grid>


                                                                            <Grid item xs={12}>
                                                                                <Button variant="contained" onClick={onSubmit}>
                                                                                    Edit Item
                                                                                </Button>
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





                                                            </div>
                                                        {/* </CardContent>
                                                    </CardActionArea>


                                                </Card> */}
                                                <br></br>
                                            
                                        </TableRow>
                                        </>
                                    }
                                    </>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>

            </div>
        </Grid>
    );
};

export default FoodMenu;