import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";



const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setName("Dass TAs");
    // navigate("/home");
  }, []);

  // return <div style={{ textAlign: "center" }}>Happy Coding - {name}</div>;
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
    <Grid style={{ background:"#78947f",padding:"50px" }}>
      <h1 style={{ fontFamily: "monospace", background:"#4a8f5d",padding:"20px"}}>Welcome to IIIT's biggest Canteen Portal</h1>
      <p>
        <h4><b><i>Good food within minutes</i></b></h4>
        {/* <FontAwesomeIcon icon={["fas", "fa-pizza-slice"]} /> */}

      </p>
      {/* <Grid item xs={12}>
        <Button variant="contained" onClick={"/login"}>
          Login
        </Button>
      </Grid> */}
      <Link to="/login">
        <Button
          renderAs="button"
          style={{
            width: "150px",
            borderRadius: "5px",
            letterSpacing: "1.5px",
            marginTop: "2rem",
            fontSize: "20px",
            color: "#243027",
            textDecoration:'underline black'
            
          }}
        >
          <span>Login</span>
        </Button>
      </Link>
      <hr></hr>
      <h5 className="grey-text text-darken-1">
        Don't have an account?
        <Link to="/register">
          <Button
            renderAs="button"
            style={{
              width: "150px",
              borderRadius: "5px",
              letterSpacing: "1.5px",
              fontSize: "20px",
              color: "#243027",
              textDecoration: 'underline black'

              // marginTop: "2rem"
            }}
          >
            <span>Register</span>
          </Button>
        </Link>
      </h5>
      </Grid>
      </Grid>
  )
};

export default Home;
