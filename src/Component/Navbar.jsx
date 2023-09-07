import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // const handleClick = () => {
  //   // Handle your button click logic here
  //   // For example, you can perform some actions before navigation
  //   // Then navigate to the desired route
  // };
  const [selectedButton, setSelectedButton] = useState("");

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <AppBar sx={{ background: "#130737" }} position={"sticky"}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <img src={logo} alt="" width="100px" />
        </Box>

        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <Typography
            sx={{
              display: "flex",
              gap: 5,
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            <Link
              to="/"
              onClick={() => handleLinkClick("home")}
              style={{
                color: activeLink === "home" ? "#BC61F3" : "inherit",
              }}
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              onClick={() => handleLinkClick("marketplace")}
              style={{
                color: activeLink === "marketplace" ? "#BC61F3" : "inherit",
                textDecoration: "none",
              }}
            >
              Marketplace
            </Link>
            <Link
              to="/artist"
              onClick={() => handleLinkClick("artist")}
              style={{
                color: activeLink === "artist" ? "#BC61F3" : "inherit",
                textDecoration: "none",
              }}
            >
              Artist
            </Link>
            <Link
              to="/community"
              onClick={() => handleLinkClick("community")}
              style={{
                color: activeLink === "community" ? "#BC61F3" : "inherit",
                textDecoration: "none",
              }}
            >
              Community
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Button
            onClick={handleClick}
            component={Link}
            to="/Login"
            sx={{
              fontSize: "15px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #5C43F6 0%, #BC61F3 100%)",
              color: "#fff",
              padding: "8px 25px",
              textTransform: "capitalize",
              marginRight: "15px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            Login
          </Button>

          <Button
            onClick={handleClick}
            component={Link}
            to="/SignUp"
            variant="outlined"
            sx={{
              fontSize: "15px",
              color: "#fff",
              padding: "8px 25px",
              textTransform: "capitalize",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            Sign Up
          </Button> */}

          <Button
            onClick={() => handleClick("login")}
            component={Link}
            to="/Login"
            sx={{
              fontSize: "15px",
              background:
                selectedButton === "login"
                  ? "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #5C43F6 0%, #BC61F3 100%)"
                  : undefined,
              color: "#fff",
              padding: "8px 25px",
              textTransform: "capitalize",
              marginRight: "15px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            Login
          </Button>

          <Button
            onClick={() => handleClick("signup")}
            component={Link}
            to="/SignUp"
            variant="outlined"
            sx={{
              fontSize: "15px",
              background:
                selectedButton === "signup"
                  ? "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #5C43F6 0%, #BC61F3 100%)"
                  : undefined,
              color: "#fff",
              padding: "8px 25px",
              textTransform: "capitalize",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            Sign Up
          </Button>

          <MenuIcon
            sx={{
              color: "white",
              marginLeft: "auto",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={() => setOpen(!open)}
          />
        </Box>
      </Toolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <AppBar
          sx={{ background: "#130737", width: 200, paddingBottom: "20px" }}
        >
          <Box>
            <MenuItem
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                cursor: "pointer",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              <Link
                to="/"
                onClick={() => handleLinkClick("home")}
                style={{
                  color: activeLink === "home" ? "#BC61F3" : "inherit",
                }}
              >
                Home
              </Link>
              <Link
                to="/marketplace"
                onClick={() => handleLinkClick("marketplace")}
                style={{
                  color: activeLink === "marketplace" ? "#BC61F3" : "inherit",
                  textDecoration: "none",
                }}
              >
                Marketplace
              </Link>
              <Link
                to="/artist"
                onClick={() => handleLinkClick("artist")}
                style={{
                  color: activeLink === "artist" ? "#BC61F3" : "inherit",
                  textDecoration: "none",
                }}
              >
                Artist
              </Link>
              <Link
                to="/community"
                onClick={() => handleLinkClick("community")}
                style={{
                  color: activeLink === "community" ? "#BC61F3" : "inherit",
                  textDecoration: "none",
                }}
              >
                Community
              </Link>

              <Button
                sx={{
                  fontSize: "15px",
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #5C43F6 0%, #BC61F3 100%);",
                  color: "#fff",
                  padding: "8px 25px",
                  textTransform: "capitalize",
                }}
              >
                Login
              </Button>

              <Button
                variant="outlined"
                sx={{
                  fontSize: "15px",
                  color: "#fff",
                  padding: "8px 25px",
                  textTransform: "capitalize",
                }}
              >
                Sign Up
              </Button>
            </MenuItem>
          </Box>
        </AppBar>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

// import { AppBar, Box, Button, Toolbar } from "@mui/material";
// import React, { useState } from "react";
// import logo from "../Images/logo.png";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";

// const Navbar = () => {
//   return (
//     <>
//       <AppBar sx={{ background: "rgb(4, 4, 42)" }}>
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//           }}
//         >
//           <img src={logo} alt="" width="100px" />

//           <Box>
//             <Link to="/" style={{ color: "white", paddingRight: "40px",lg: { display: "none" } }}>
//               Home
//             </Link>
//             <Link
//               to="/marketplace"
//               style={{
//                 color: "#F0F0F0",
//                 textDecoration: "none",
//                 paddingRight: "40px",
//               }}
//             >
//               Marketplace
//             </Link>
//             <Link
//               to="/artist"
//               style={{
//                 color: "#F0F0F0",
//                 textDecoration: "none",
//                 paddingRight: "40px",
//               }}
//             >
//               Artist
//             </Link>
//             <Link
//               to="/community"
//               style={{ color: "#F0F0F0", textDecoration: "none" }}
//             >
//               Community
//             </Link>
//           </Box>

//           <Box>
//             <Button
//               sx={{
//                 fontSize: "15px",
//                 background:
//                   "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #5C43F6 0%, #BC61F3 100%);",
//                 color: "#fff",
//                 padding: "8px 25px",
//                 textTransform: "capitalize",
//                 marginRight: "15px",
//               }}
//             >
//               Login
//             </Button>

//             <Button
//               variant="outlined"
//               sx={{
//                 fontSize: "15px",

//                 color: "#fff",
//                 padding: "8px 25px",
//                 textTransform: "capitalize",
//               }}
//             >
//               Sign Up
//             </Button>
//           </Box>

//           <MenuIcon />
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

// export default Navbar;
