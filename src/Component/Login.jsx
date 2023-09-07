import {
  Box,
  Button,
  InputBase,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
const MyInputBase = styled(InputBase)({
  border: "1px solid blue",
  borderRadius: "3px",
  background: "#0b2a4d",
  color: "#fff",
  px: 10,
  width: "70%",
});
// const useStyles = makeStyles({
//   textField: {
//     "& .MuiOutlinedInput-root": {
//       "&::placeholder": {
//         color: "green",
//       },
//     },
//   },
// });

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };

  // const classes = useStyles();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            backgroundColor: "#130737",
            color: "#eee",
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
          display={"flex"}
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>

          {/* <TextField
            onChange={handleChange}
            margin="normal"
            type="text"
            name="name"
            value={inputs.name}
            variant="outlined"
            className={classes.textField}
            placeholder="Name"
            InputLabelProps={{
              style: { color: "rgba(240, 240, 240, 0.7)" },
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid rgba(240, 240, 240, 0.7)",
              },
            }}
          /> */}

          {/* <TextField
            onChange={handleChange}
            margin="normal"
            type="email"
            name="email"
            value={inputs.email}
            variant="outlined"
            placeholder="Email"
            className={classes.textField}
            InputLabelProps={{
              style: { color: "rgba(240, 240, 240, 0.7)" },
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid rgba(240, 240, 240, 0.7)",
              },
            }}
          /> */}
          <MyInputBase
            fullWidth
            onChange={handleChange}
            placeholder="Email"
            type="email"
            sx={{
              my: 2,
            }}
          />

          {/* <TextField
            onChange={handleChange}
            margin="normal"
            type="password"
            name="password"
            value={inputs.password}
            variant="outlined"
            placeholder="Password"
            className={classes.textField}
            InputLabelProps={{
              style: { color: "rgba(240, 240, 240, 0.7)" },
            }}
            InputProps={{
              style: {
                color: "white",
                border: "1px solid rgba(240, 240, 240, 0.7)",
              },
            }}
          /> */}
          <MyInputBase
            fullWidth
            onChange={handleChange}
            placeholder="Password"
          />

          <Button
            endIcon={
              isSignup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
            }
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="secondary"
            size="large"
          >
            {isSignup ? "Login" : "Signup"}
          </Button>

          {isSignup && (
            <Button
              endIcon={
                isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
              }
              onClick={resetState}
              sx={{ marginTop: 3, borderRadius: 3 }}
            >
              Change To {isSignup ? "Signup" : "Login"}
            </Button>
          )}
        </Box>
      </form>
    </>
  );
};

export default Login;

// import { Box, Button, InputBase, TextField, Typography } from "@mui/material";
// import React, { useState } from "react";
// // import { makeStyles } from "@mui/styles";
// import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
// import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

// // const useStyles = makeStyles({
// //   textField: {
// //     "& .MuiOutlinedInput-root": {
// //       "&::placeholder": {
// //         color: "green",
// //       },
// //     },
// //   },
// // });

// const Login = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//   };

//   const resetState = () => {
//     setIsSignup(!isSignup);
//     setInputs({ name: "", email: "", password: "" });
//   };

//   // const classes = useStyles();

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <Box
//           sx={{
//             backgroundColor: "#130737",
//             color: "#eee",
//             ":hover": {
//               boxShadow: "10px 10px 20px #ccc",
//             },
//           }}
//           display={"flex"}
//           flexDirection={"column"}
//           maxWidth={400}
//           alignItems="center"
//           justifyContent="center"
//           margin="auto"
//           marginTop={5}
//           padding={3}
//           borderRadius={5}
//           boxShadow={"5px 5px 10px #ccc"}
//         >
//           <Typography variant="h2" padding={3} textAlign="center">
//             {isSignup ? "Signup" : "Login"}
//           </Typography>

//           {isSignup && (
//             // <TextField
//             //   onChange={handleChange}
//             //   margin="normal"
//             //   type="text"
//             //   name="name"
//             //   value={inputs.name}
//             //   variant="outlined"
//             //   // className={classes.textField}
//             //   placeholder="Name"
//             //   // InputLabelProps={{
//             //   //   style: { color: "rgba(240, 240, 240, 0.7)" },
//             //   // }}
//             //   // InputProps={{
//             //   //   style: {
//             //   //     color: "white",
//             //   //     border: "1px solid rgba(240, 240, 240, 0.7)",
//             //   //   },
//             //   // }}
//             // />
//             <InputBase  />
//           )}

//           {/* <TextField
//             onChange={handleChange}
//             margin="normal"
//             type="email"
//             name="email"
//             value={inputs.email}
//             variant="outlined"
//             placeholder="Email"
//             className={classes.textField}
//             InputLabelProps={{
//               style: { color: "rgba(240, 240, 240, 0.7)" },
//             }}
//             InputProps={{
//               style: {
//                 color: "white",
//                 border: "1px solid rgba(240, 240, 240, 0.7)",
//               },
//             }} */}
//           <InputBase />

//           {/* <TextField
//             onChange={handleChange}
//             margin="normal"
//             type="password"
//             name="password"
//             value={inputs.password}
//             variant="outlined"
//             placeholder="Password"
//             className={classes.textField}
//             InputLabelProps={{
//               style: { color: "rgba(240, 240, 240, 0.7)" },
//             }}
//             InputProps={{
//               style: {
//                 color: "white",
//                 border: "1px solid rgba(240, 240, 240, 0.7)",
//               },
//             }}
//           /> */}
//           <InputBase />

//           <Button
//             endIcon={
//               isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
//             }
//             type="submit"
//             sx={{ marginTop: 3, borderRadius: 3 }}
//             variant="contained"
//             color="secondary"
//             size="large"
//           >
//             {isSignup ? "Signup" : "Login"}
//           </Button>

//           <Button
//             endIcon={
//               isSignup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
//             }
//             onClick={resetState}
//             sx={{ marginTop: 3, borderRadius: 3 }}
//           >
//             Change To {isSignup ? "Login" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </>
//   );
// };

// export default Login;
