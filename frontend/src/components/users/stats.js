import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

// import { Bar, Line, Pie } from 'react-chartjs-2';
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
// import TableCell from "@mui/material/TableCell";
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


const BuyerOrder = (props) => {

    let order_placed = 0;
    let order_pending = 0;
    let order_completed = 0;
    //vendor and buyer both
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);
    const [users, setUsers] = useState([]);
    const [itemName, setitemName] = useState("");

    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [type, setType] = useState("");
    const [addon, setAddon] = useState("");
    const [vendorName, setvendorName] = useState("");

    const [itemShop, setitemShop] = useState("");
    const [tags, setTags] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("");

    const [totalCost, setTotalCost] = useState("");

    const [buyfood, setBuy] = useState(false);
    const [delfood, setDel] = useState(0);

    const [sortedUsers, setSortedUsers] = useState([]);
    const [sortName, setSortName] = useState(true);
    const [searchText, setSearchText] = useState("");
    var frq = new Map();
    useEffect(() => {
        axios
            .get("/api/order")
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
            if (a.date != undefined && b.date != undefined) {
                return (1 - flag * 2) * (new Date(a.date) - new Date(b.date));
            } else {
                return 1;
            }
        });
        setUsers(usersTemp);
        setSortName(!sortName);
    };

    const customFunction = (event) => {
        console.log(event.target.value);
        setSearchText(event.target.value);
    };

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
    };
    const onChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    const onChangeTotalCost = (event) => {
        setTotalCost(event.target.value);
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
        setitemShop(localStorage.getItem("itemShop"));
        setQuantity(0);
        setStatus("");
        setTotalCost(0);



    };


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
            itemShop: itemShop,
            quantity: quantity,
            status: status,
            totalCost: totalCost,

        };
        console.log(newItem);
        axios
            .post("/api/order/ItemBuy", newItem)
            .then((response) => {
                alert("Item Ordered\t");
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
                localStorage.setItem("quantity", response.data.quantity);
                localStorage.setItem("totalCost", response.data.totalCost);
                localStorage.setItem("status", response.data.status);


                // window.location = "/vendormenu"
            });
        handleClose();
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

//     constructor(props){
//     super(props);
//     this.state = {
//       chartData:props.chartData
//     }
//   }

//   static defaultProps = {
//     displayTitle:true,
//     displayLegend: true,
//     legendPosition:'right',
//     location:'City'
//   }




    return (
        <Grid styleTop={{marginTop:"40px"}}>
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

                <Grid item xs={12} md={12} lg={12}>
                    <Paper>
                            <Table size="small" style={{ marginTop: "40px" }}>
                            <TableHead style={{background:"blue",color:"white",width:"20px"}}>
                                <TableRow>
                                    <StyledTableCell> Order Placed</StyledTableCell>
                                    <StyledTableCell>Order Pending</StyledTableCell>
                                    <StyledTableCell>Order Completed</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.forEach((user) => {
                                    if (user.status == "Completed") order_completed++;
                                    if (user.status == "Placed") order_placed++;
                                    else order_pending++;
                                })
                                }
                                <StyledTableRow>
                                    <StyledTableCell>{order_placed}</StyledTableCell>
                                    <StyledTableCell>{order_pending}</StyledTableCell>
                                    <StyledTableCell>{order_completed}</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                        </Paper>
                        </Grid>
                        <Grid>
                    <div style={{display:"flex",margin:"20px",justifyContent:"center",alignItems:"center"}}>
                        <h4>Top 5 Items </h4>
                   </div>
                </Grid>
                
                <Grid container>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper>
                            <Table size="small">
                                <TableHead style={{background:"blue",fontSize:"30px"}}>
                                    <StyledTableRow>
                                        <StyledTableCell>Food Name</StyledTableCell>
                                        <StyledTableCell>No. of Orders</StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        users.forEach((user) => {
                                            const t = frq.get(user.itemName);
                                            if (user.itemName    != "") frq.set(user.itemName, (t === undefined ? 0 : t) + 1);
                                        }
                                        )}

                                    {
                                        (Array
                                            .from(frq.entries(), ([k, v]) => [k, v])).sort((a, b) => (b[1] - a[1]))
                                            .filter((val, i) => { if (i < 5) return val; })
                                            .map((ele) => (
                                                <StyledTableRow>
                                                    <StyledTableCell>{ele[0]}</StyledTableCell>
                                                    <StyledTableCell>{ele[1]}</StyledTableCell>
                                                    {/* <StyledTableCell>

                                                    </StyledTableCell> */}
                                                </StyledTableRow>)
                                            )

                                    }

                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            {/* <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Largest Cities In ' + this.props.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />

                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Largest Cities In ' + this.props.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />

                <Pie
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Largest Cities In ' + this.props.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div> */}
        </div>
</Grid>
        
    );
};

export default BuyerOrder;