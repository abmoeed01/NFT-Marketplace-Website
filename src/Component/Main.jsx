import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import RcrdnjfnntImg from "../Images/RcrdnjfnntImg.png";
// import { makeStyles } from "@mui/styles";
// import { styled } from "@mui/styles";

// const useStyles = makeStyles({
// const MyTextField = styled(InputBase)({

// });

const Main = () => {
  // const classes = useStyles();

  return (
    <Container>
      <Grid container alignItems={"center"}>
        <Grid item md={6} sm={12}>
          <Box>
            <img
              src={RcrdnjfnntImg}
              alt=""
              width="100%"
              style={{ marginTop: "70px" }}
            />
          </Box>
        </Grid>

        <Grid item md={6} sm={12}>
          <Box
            sx={{
              ml: { xs: 0, md: 10 },
              color: "#fff",
              mx: {
                xs: 2,
                sm: 0,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: 45 },
                fontWeight: 700,
                color: "#fff",
                textTransform: "capitalize",
              }}
            >
              Subscribe And get Latest news update about NFTs.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px" },
                fontWeight: 300,
                mt: 2,
                mb: 2,
                color: "#F0F0F0",
                lineHeight: "2",
              }}
            >
              In commodo auctor eget congue sit. Ultrices eget pretium sit
              euismod mi id. Risus, aliquam odio posuere ac in in nisl sed
              augue. Porta aenean egestas malesuada in pulvinar enim viverra.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                border: "2px solid rgba(83, 84, 136, 0.4)",
                mt: 5,
              }}
            >
              <InputBase
                variant="outlined"
                // className={classes.textField}
                // style={{ width: "100%" }}
                label="Write your email here"
                // InputLabelProps={{
                //   style: { color: "rgba(240, 240, 240, 0.7)" },
                // }}
                // InputProps={{
                //   style: {
                //     color: "white",
                //   },
                // }}
              />
              <Button
                size="large"
                sx={{
                  fontSize: "15px",
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #5C43F6 0%, #BC61F3 100%)",
                  color: "#fff",
                  textTransform: "capitalize",
                  padding: "0px 40px",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
