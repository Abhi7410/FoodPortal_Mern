import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} style={{ background: "#7e9484"}}>
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
          <Button color="inherit" onClick={() => navigate("/users")}>
            Users
          </Button>
          <Button color="inherit" onClick={() => navigate("/register")}>
            Register
          </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate("/profile")}>
            My Profile
          </Button>
          {/* <Button color="inherit" onClick={() => navigate("/food_add")}>
            Food add
          </Button> */}
          <Button color="inherit" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
