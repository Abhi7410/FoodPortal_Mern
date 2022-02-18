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
import { useTheme } from '@mui/material/styles';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import useForm from "react-hook-form";
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const Tags = [
    "spicy",
    "sour",
    "hot",
    "lunch",
    "breakfast",
    "dinner",
    "creamy",
    "cold",
    "brunch",
    "North-Indian",
    "chinese",
    "South-Indian",
    "Moroccan",
    "Thai",
    "Spanish",
    "sweet",
    "snacks",
    "beverages",
    "fast-food",
    "American",
    "Mexican",
    "Italian",
    "Continental",
    "bakery",
    "Hitech-City",

];

const Add_Ons = [
    "Chilly-Jam : 20",
    "Chilly-Sauce: 20",
    "Chocolate : 30",
    "Pickle : 10",
    "Drinks : 50",
    "Cheese : 20",
    "Butter : 12",
    "Lassi : 40",
    "Pepper : 30",
    "Salad : 30",
    "Papad : 10",
    "Rice : 30",
    "Dessert : 100",
    "Raita : 50",
    "Mozzarela : 40",
    "Jalapeno-pepper : 20",
    "Olives : 10",
    "Per-Peri : 20",
    "Soup : 50",
]

const Food = (props) => {

    const navigate = useNavigate();
    //vendor and buyer both
    const [itemName, setitemName] = useState("");

    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("0");
    const [type, setType] = useState("");
    const [addon, setAddon] = useState([]);
    const [vendorName, setvendorName] = useState("");

    const [itemShop, setitemShop] = useState("");
    const [tags, setTags] = useState([]);
    
 



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
        setAddon(typeof value === "string" ? value.split(","):value);
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
        setitemName("");
        setPrice("");
        setRating("0");
        setType("");
        setAddon([]);
        setTags([]);
        setvendorName("");
        setitemShop("");
       

    };


    const onSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            itemName: itemName,
            price: price,
            rating: rating,
            type: type,
            
            addon: addon,
            tags: tags,
            vendorName: localStorage.getItem("name"),
            itemShop: localStorage.getItem("shopName")

        };
        console.log(newItem);
        axios
            .post("/api/food/addItem", newItem)
            .then((response) => {
                alert("Added Successfully\t");
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
            });

        resetInputs();
    };
    function getStyles(name, addon, theme) {
        return {
            fontWeight:
                addon.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    function getStyles2(name, tags, theme) {
        return {
            fontWeight:
                tags.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

   
        const theme = useTheme();
        // const [personName, setPersonName] = React.useState([]);
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
        <Grid container align={"center"} style={{marginTop:"30px"}}spacing={2}>
           
                <Grid container align={"center"} spacing={2}>
                <Grid item xs={12}>
                    <div><h6>Name</h6></div>
                        <TextField
                            // label="Name"
                            variant="outlined"
                            value={itemName}
                            onChange={onChangeitemName}
                        />
                </Grid>
                <Grid item xs={12}>
                    <div><h6>Shop </h6></div>
                    <TextField
                        // label="Name"
                        variant="outlined"
                        value={localStorage.getItem("shopName")}
                        inputProps={{readOnly:true}}
                        // onChange={onChangeitemName}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    
                    <div><h6>Price</h6></div>

                        <TextField
                            // label="Price"
                            variant="outlined"
                            value={price}
                            onChange={onChangePrice}
                        />
                    </Grid>
                <Grid item xs={12}>
                    <div><h6>Type</h6></div>

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        {/* <InputLabel id="demo-simple-select-label">Batch</InputLabel> */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            // label="Batch"
                            onChange={onChangeType}
                        >
                            <MenuItem value={"Veg"}>Veg</MenuItem>
                            <MenuItem value={"Non-Veg"}>Non-Veg</MenuItem>



                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    {/* <div><h6>Add-Ons</h6></div>

                        <TextField
                            // label="Contact Number"
                            variant="outlined"
                            value={addon}
                            onChange={onChangeAddon}
                        /> */}
                       
                        <FormControl sx={{ m: 1, width: 260 }}>
                            <h6>Add-Ons</h6>
                            <InputLabel id="demo-multiple-name-label"></InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={addon}
                                onChange={onChangeAddon}
                                input={<OutlinedInput label="" />}
                                MenuProps={MenuProps}
                            >
                                {Add_Ons.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, addon, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                           
                </Grid>
                <Grid item xs={12}>
                        <FormControl sx={{ m: 1, width: 260 }}>
                            <h6>Tags</h6>
                            <InputLabel id="demo-multiple-name-label"></InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={tags}
                                onChange={onChangeTags}
                                input={<OutlinedInput label="" />}
                                MenuProps={MenuProps}
                            >
                                {Tags.map((na) => (
                                    <MenuItem
                                        key={na}
                                        value={na}
                                        style={getStyles2(na, tags, theme)}
                                    >
                                        {na}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <div><h6>Rating</h6></div>

                    <TextField
                        // label="Contact Number"
                        variant="outlined"
                        value={rating}
                        onChange={onChangeRating}
                    />
                </Grid>
               
                    
                </Grid>
            
            
            <Grid item xs={12}>
                <Button variant="contained" onClick={onSubmit}>
                    Add Item
                </Button>
            </Grid>
            </Grid>
            </Grid>
        // {/* </LocalizationProvider> */}
    );
};

export default Food;