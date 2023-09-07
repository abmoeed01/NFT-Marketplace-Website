import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../Images/logo.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import linkedin from "../Images/linkedin.png";
import youtube from "../Images/youtube.png";

const Footer = () => {
  return (
    <Container sx={{ mt: 30 }}>
      <Grid
        container
        spacing={5}
        justifyContent={{ xs: "center", sm: "space-around" }}
      >
        <Grid item md={3} sm={12} lg={3}>
          <Box>
            <img src={logo} alt="" />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "13px" },
              fontWeight: 300,
              mt: 2,
              mb: 2,
              color: "#F0F0F0",
              lineHeight: "2",
            }}
          >
            Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
            augue. Posuere ac in in nisl sed augue.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: { md: "wrap" },
            }}
          >
            <Box>
              <img src={facebook} alt="" />
            </Box>

            <Box>
              <img src={instagram} alt="" />
            </Box>

            <Box>
              <img src={twitter} alt="" />
            </Box>

            <Box>
              <img src={linkedin} alt="" />
            </Box>

            <Box>
              <img src={youtube} alt="" />
            </Box>
          </Box>
        </Grid>

        <Grid item md={3} sm={6} lg={1}>
          <Typography variant="h5" color={"white"} fontWeight={"600"}>
            Marketplace
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            NFTs
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Art
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Collectibles
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Virtual world
          </Typography>
        </Grid>

        <Grid item md={2} sm={6} lg={1}>
          <Typography variant="h5" color={"white"} fontWeight={"600"}>
            Info
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Activity
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Stats
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Rankings
          </Typography>
        </Grid>

        <Grid item md={3} sm={6} lg={1}>
          <Typography variant="h5" color={"white"} fontWeight={"600"}>
            Company
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            About
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Support
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Features
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Top Creators
          </Typography>
        </Grid>

        <Grid item md={3} sm={6} lg={1}>
          <Typography variant="h5" color={"white"} fontWeight={"600"}>
            Resources
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Info
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Affiliates
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Associated
          </Typography>

          <Typography variant="h6" color={"#F0F0F0"} fontWeight={"100"} mt={2}>
            Blog
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
