import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


import Button from "@mui/material/Button";
import * as React from 'react';
import TextField from '@mui/material/TextField';

// import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import fuzzy from "fuzzy";
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
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { getStepButtonUtilityClass } from "@mui/material";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const FoodMenu = (props) => {


    //vendor and buyer both
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);
    const [users, setUsers] = useState([]);
    const [itemName, setitemName] = useState("");
    // const [addonbuyer, setAddonBuyer] = useState([]);
    const [tagArray, setTagArray] = useState([]);


    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [type, setType] = useState("");
    const [addon, setAddon] = useState([]);
    const [vendorName, setvendorName] = useState("");

    const [itemShop, setitemShop] = useState("");
    const [tags, setTags] = useState([]);
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("");

    const [totalCost, setTotalCost] = useState("");

    const [buyfood, setBuy] = useState(false);
    const [delfood, setDel] = useState(0);
    const [mn, setMn] = useState("");
    const [mx, setMx] = useState("");
    const [sortedUsers, setSortedUsers] = useState([]);
    const [sortName, setSortName] = useState(true);
    const [sortName2, setSortName2] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [tagsadd, setTagsAdd] = useState([]);
    const [addon_buyer, setAddon_Buyer] = useState([]);

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
        "Peri-Peri : 20",
        "Soup : 50",
    ];
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

    useEffect(() => {
        axios
            .get("/api/food")
            .then((response) => {
                setUsers(response.data);
                setSortedUsers(response.data);
                setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const sortChange = () => {
        let usersTemp = users;
        const flag = sortName;
        usersTemp.sort((a, b) => {
            if (flag == true) {
                return Number(a.price) < Number(b.price);
            } else {
                return Number(b.price) < Number(a.price);
            }
        });
        setUsers(usersTemp);
        setSortName(!sortName);
    };
    const sortChange2 = () => {
        let usersTemp = users;
        const flag = sortName2;
        usersTemp.sort((a, b) => {
            if (flag == true) {
                return Number(a.rating) < Number(b.rating);
            } else {
                return Number(b.rating) < Number(a.rating);
            }
        });
        setUsers(usersTemp);
        setSortName2(!sortName2);
    };

    const customFunction = (event) => {
        console.log(event.target.value);
        setSearchText(event.target.value);
    };


    const onChangeTagsAdd = (event) => {
        
        const {
            target: { value },
        } = event;
        setTagsAdd(typeof value === "string" ? value.split(",") : value);
        setTagArray(value);
    };

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

    const onChangeQuantity = (event) => {
        setQuantity(event.target.value);
        localStorage.setItem("quantity", event.target.value);

        let sum = 0;
        for (let i = 0; i < addon_buyer.length; i++) {
            sum += Number(addon_buyer[i].split(":")[1]);
        }
        let t = Number(event.target.value) * (Number(price) + Number(sum));
        setTotalCost(t);
        localStorage.setItem("totalCost", t);
        console.log(addon_buyer);

    };
    const onChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    const onChangeTotalCost = (event) => {
        setTotalCost(event.target.value);
    };
    const onChangemn = (event) => {
        setMn(event.target.value);
    };
    const onChangemx = (event) => {
        setMx(event.target.value);
    };
 
    const onChangeAddon = (event) => {
        const {
            target: { value },
        } = event;
        setAddon(typeof value === "string" ? value.split(",") : value);
        // let sum = 0;
        // for (let i = 0; i < value.length; i++) {
        //     sum += Number(value[i].split(":")[1]);
        // }
        // let t = Number(quantity) * (Number(price) + Number(sum));
        // setTotalCost(t);

    };
            
    function getStyles2(name, tags, theme) {
        return {
            fontWeight:
                tags.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }     
    function findCommonElement(array1, array2) {

        // Loop for array1
        for (let i = 0; i < array1.length; i++) {

            // Loop for array2
            for (let j = 0; j < array2.length; j++) {


                if (array1[i] === array2[j]) {

                    // Return if common element found
                    return true;
                }
            }
        }

        // Return if no common element exist
        return false;
    }
   
    const onChangeAddon_Buyer = (event) => {
        const {
            target: { value },
        } = event;
        setAddon_Buyer(typeof value === "string" ? value.split(",") : value);
        // let sum = 0;
        // for (let i = 0; i < value.length; i++) {
        //     sum += Number(value[i].split(":")[1]);
        // }
        // let t = Number(quantity) * (Number(price) + Number(sum));
        // setTotalCost(t);
        // localStorage.setItem("totalCost", t);
        // setAddon_Buyer(value);
        // localStorage.setItem("addon_Buyer", value).split(",");
        
        localStorage.setItem("addon_Buyer", JSON.stringify(value));
        // console.log("buyer add on", value);

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
        setitemShop(localStorage.getItem("itemShop"));
        setQuantity(0);
        setStatus("Placed");
        setTotalCost(0);



    };


    const onSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            itemName: localStorage.getItem("itemName"),
            price: localStorage.getItem("price"),
            rating: localStorage.getItem("rating"),
            type: localStorage.getItem("type"),
            addon: localStorage.getItem("addon"),
            addon_buyer: JSON.parse(localStorage.getItem("addon_Buyer")),
            tags: localStorage.getItem("tags"),
            vendorName: localStorage.getItem("vendorName"),
            itemShop: localStorage.getItem("itemShop"),
            quantity: quantity,
            status: localStorage.getItem("status"),
            totalCost: localStorage.getItem("totalCost"),
            emailBuyer: localStorage.getItem("email"),

        };
        console.log(newItem);

        const newItem1 = {
            email: localStorage.getItem("email"),
            totalCost: localStorage.getItem("totalCost"),

            
        };
        console.log(localStorage.getItem("email"));
        console.log(localStorage.getItem("totalCost"));

        if (Number(totalCost) > Number(localStorage.getItem("wallet"))) {
            alert("Insufficient Balance");
            return;
        } else {
            axios
                .post("/api/order/ItemBuy", newItem)
                .then((response) => {

                    alert("Item Ordered\t\n Total Price: Rs." + totalCost);
                    console.log(response.data);
                    
                    localStorage.setItem("totalCost", response.data.totalCost);
                    // localStorage.setItem("status", response.data.status);
                    

                    // window.location = "/vendormenu"
                });
            axios
                .post("/api/user/reduceWallet", newItem1)
                .then((response) => {
                    localStorage.setItem("wallet", response.data.wallet);
                    // alert("Item Ordered\t\n Total Price: Rs." + totalCost);
                    console.log(response.data);

                    // localStorage.setItem("totalCost", response.data.totalCost);
                    // localStorage.setItem("status", response.data.status);


                    // window.location = "/vendormenu"
                });

                
        }
        // console.log(newItem);
        // axios
        //     .post("/api/order/ItemBuy", newItem)
        //     .then((response) => {
                
        //         alert("Item Ordered\t\n Total Price: Rs." + totalCost);
        //         console.log(response.data);
        //         // localStorage.setItem("_id", response.data._id);
        //         // localStorage.setItem("itemName", response.data.itemName);
        //         // localStorage.setItem("price", response.data.price);
        //         // localStorage.setItem("rating", response.data.rating);
        //         // localStorage.setItem("type", response.data.type);
        //         // localStorage.setItem("addon", response.data.addon.join(","));
        //         // localStorage.setItem("tags", response.data.tags.join(","));
        //         // localStorage.setItem("vendorName", response.data.vendorName);
        //         // localStorage.setItem("itemShop", response.data.itemShop);
        //         // localStorage.setItem("quantity", response.data.quantity);
        //         localStorage.setItem("totalCost", response.data.totalCost);
        //         // localStorage.setItem("status", response.data.status);


        //         // window.location = "/vendormenu"
        //     });
        // handleClose();
        resetInputs();
        // window.location = "/vendormenu"
    };
    // useEffect(() => {
    //     axios
    //         .get("/api/food")
    //         .then((response) => {
    //             setFoods(response.data);
    //             // setSortedUsers(response.data);
    //             // setSearchText("");
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function getStyles(name, addon_buyer, theme) {
        return {
            fontWeight:
                addon_buyer.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    function getStyles3(name, tagsadd, theme) {
        return {
            fontWeight:
                tagsadd.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,

        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    const [lol, setlol] = React.useState('');

    const handleChange = (event) => {
        setlol(event.target.value);
    };

    function check(userTagStr) {
        const userTags = userTagStr[0].split(',');
        // console.log("IN FUNC: ", userTags);
        for (let i = 0; i < tagArray.length; i++) {
            let good = false;
            for (let j = 0; j < userTags.length; j++) {
                if (userTags[j] === tagArray[i]) {
                    good = true; break;
                }
            }
            if (!good) return false;
        }
        return true;
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
        <div>
            <Grid container>
                <Grid item xs={12} md={3} lg={3}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem text>
                            <h1>Filters</h1>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={9} lg={9}>
                    <List component="nav" aria-label="mailbox folders">
                        <TextField
                            id="standard-basic"
                            label="Search"
                            fullWidth={true}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        onChange={customFunction}
                        />
                    </List>
                    </Grid>

                    <Grid item xs={12} md={9} lg={9}>
                            <h6>Balance</h6>
                            <TextField
                                id="standard-basic"
                                // label="Search"
                                
                                value={localStorage.getItem("wallet")}
                                InputProps={{
                                    readOnly:true
                                }}
                            />
                        
                    </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={3} lg={3}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    Price
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="standard-basic"
                                        label="Enter Min"
                                        value={mn}
                                        onChange={onChangemn}
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="standard-basic"
                                        label="Enter Max"
                                        fullWidth={true}
                                        value={mx}
                                        onChange={onChangemx}
                                    />
                                </Grid>
                            </Grid>
                            </ListItem>
                            <Grid>
                                <Grid item xs={12}>
                                    Type
                                </Grid>
                                <Box sx={{ width: 100 }}>
                                    <FormControl >
                                        <InputLabel id="demo-simple-select-label"></InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={lol}
                                            label=""
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Veg"}>Veg</MenuItem>
                                            <MenuItem value={"Non-Veg"}>Non-Veg</MenuItem>
                                            {/* <MenuItem value={30}>Thirty</MenuItem> */}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl sx={{ m: 1, width: 260 }}>
                                    <h6>Tags</h6>
                                    <InputLabel id="demo-multiple-name-label"></InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={tagsadd}
                                        onChange={onChangeTagsAdd}
                                        input={<OutlinedInput label="" />}
                                        MenuProps={MenuProps}
                                    >
                                        {Tags.map((na) => (
                                            <MenuItem
                                                key={na}
                                                value={na}
                                                style={getStyles3(na, tagsadd, theme)}
                                            >
                                                {na}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                                
                        <Divider />
                        {/* <ListItem divider>
                            <Autocomplete
                                id="combo-box-demo"
                                options={Tags}
                                getOptionLabel={(option) => option.name}
                                fullWidth
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Select Tags"
                                        variant="outlined"
                                    />
                                )}
                            />
                        </ListItem> */}
                    </List>
                </Grid>
                <Grid item xs={12} md={9} lg={9}>
                    <Paper>
                        <Table size="small" style={{marginTop:"10px"}}>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell> Sr No.</StyledTableCell>
                                    {/* <StyledTableCell>
                                        {" "}
                                        <Button onClick={sortChange}>
                                            {sortName ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                        </Button>
                                        Date
                                    </StyledTableCell> */}
                                    {/* <StyledTableCell>Place Time</StyledTableCell> */}
                                    <StyledTableCell>Name</StyledTableCell>
                                    <StyledTableCell>
                                        {" "}
                                        <Button onClick={sortChange}>
                                            {sortName ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                        </Button>
                                        Price</StyledTableCell>
                                    <StyledTableCell>Type</StyledTableCell>
                                    <StyledTableCell>Addons</StyledTableCell>
                                    <StyledTableCell>Tags</StyledTableCell>
                                    <StyledTableCell>{" "}
                                        <Button onClick={sortChange2}>
                                            {sortName2 ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                        </Button>Rating</StyledTableCell>
                                    <StyledTableCell>Buy</StyledTableCell>

                                
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user, ind) => (
                                    <>
                                        {(tagArray.length === 0 || check(user.tags))&&(user.type === lol || lol === "") && fuzzy.test(searchText, user.itemName) && (Number(user.price) >= mn || mn === "") && (Number(user.price) <= mx || mx === "") &&
                                            <>
                                                <StyledTableRow key={ind}>
                                                <StyledTableCell>{ind + 1}</StyledTableCell>
                                                {/* <StyledTableCell>{user.placeTime}</StyledTableCell> */}
                                                    <StyledTableCell>{user.itemName}</StyledTableCell>
                                                    <StyledTableCell>{user.price}</StyledTableCell>
                                                    <StyledTableCell>{user.type}</StyledTableCell>
                                                    <StyledTableCell>{user.addon}</StyledTableCell>
                                                    <StyledTableCell>{user.tags}</StyledTableCell>
                                                    <StyledTableCell>{user.rating}</StyledTableCell>
                                                    <StyledTableCell> <div class="row">
                                                        <div class="col s4">
                                                            <Button variant="contained" style={{ background: "green" }} onClick={() => {
                                                                // console.log(user);
                                                                localStorage.setItem("id", user._id)
                                                                localStorage.setItem("itemName", user.itemName)
                                                                localStorage.setItem("price", user.price)
                                                                localStorage.setItem("addon", user.addon)
                                                                localStorage.setItem("itemShop", user.itemShop)
                                                                localStorage.setItem("vendorName", user.vendorName)
                                                                localStorage.setItem("itemShop", user.itemShop)

                                                                // localStorage.setItem("tags", user.tags)
                                                                localStorage.setItem("tags", user.tags)

                                                                setBuy(true);
                                                                setStatus("Placed");
                                                                handleClickOpen()
                                                            }}
                                                            >
                                                                Buy

                                                            </Button>
                                                        </div>
                                            
                                                        {buyfood &&
                                         
                                                            <Dialog
                                                                fullScreen={fullScreen}
                                                                open={open}
                                                                onClose={handleClose}
                                                                aria-labelledby="responsive-dialog-title"
                                                            >
                                                                <DialogTitle id="responsive-dialog-title">
                                                                    {"Order Food"}
                                                                </DialogTitle>
                                                                <DialogContent>
                                                                    <Grid container align={"center"} style={{ marginTop: "60px" }} spacing={2}>

                                                                        <Grid container align={"center"} spacing={2}>
                                                                            <Grid item xs={12}>
                                                                                <TextField
                                                                                    label="Quantity"
                                                                                    variant="outlined"
                                                                                    defaultValue={quantity}
                                                                                    onChange={onChangeQuantity}
                                                                                   
                                                                                />
                                                                            </Grid>
                                                                            <Grid item xs={12}>


                                                                                <TextField
                                                                                    label="NAME"
                                                                                    variant="outlined"
                                                                                    defaultValue={localStorage.getItem("itemName")}
                                                                                // onChange={onChangeitemName}
                                                                                />
                                                                            </Grid>

                                                                            <Grid item xs={12}>
                                                                            <FormControl sx={{ m: 1, width: 260 }}>
                                                                                <h6>Add-Ons</h6>
                                                                                <InputLabel id="demo-multiple-name-label"></InputLabel>
                                                                                <Select
                                                                                    labelId="demo-multiple-name-label"
                                                                                    id="demo-multiple-name"
                                                                                    multiple
                                                                                    value={addon_buyer}
                                                                                    onChange={onChangeAddon_Buyer}
                                                                                    input={<OutlinedInput label="" />}
                                                                                    MenuProps={MenuProps}
                                                                                >
                                                                                    {localStorage.getItem("addon").split(",")
                                                                                        .map((name) => (
                                                                                        <MenuItem
                                                                                            key={name}
                                                                                            value={name}
                                                                                            style={getStyles(name, addon_buyer, theme)}
                                                                                        >
                                                                                            {name}
                                                                                        </MenuItem>
                                                                                    ))}
                                                                                </Select>
                                                                            </FormControl>
                                                                            </Grid>

                                                                            <Grid item xs={12}>
                                                                                <Button variant="contained" onClick={onSubmit}>
                                                                                    Order Item
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




                                                    </div>
                                                    </StyledTableCell>
                                        
                                        

                                                </StyledTableRow>
                                
                                            </>
                                        }
                                    </>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        </Grid>
    );
};

export default FoodMenu;