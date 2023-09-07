import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import RightImage from "../Images/RightImage.png";
import { styled } from "@mui/material/styles";
import oneImage from "../Images/one.png";
import twoImage from "../Images/two.png";
import threeImage from "../Images/three.png";
import fourImage from "../Images/four.png";
import fiveImage from "../Images/five.png";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleHover = () => {
    setIsPaused(true);
  };

  const handleLeave = () => {
    setIsPaused(false);
  };
  return (
    <Container>
      <Grid container>
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
                fontSize: { xs: "25px", sm: 60 },
                fontWeight: 900,
                mt: 15,
                color: "#4526b4",
              }}
            >
              Best NFTs <br /> Marketplace.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px" },
                fontWeight: 300,
                mt: 2,
                mb: 2,
                color: "#eee",
                lineHeight: "2",
              }}
            >
              Ultrices eget pretium sit euismod mi id. In commodo auctor eget
              congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
              Porta aenean egestas malesuada in pulvinar enim viverra.
            </Typography>

            <Box
              sx={{
                display: "flex",
              }}
            >
              <Button
                sx={{
                  fontSize: "15px",
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #5C43F6 0%, #BC61F3 100%)",
                  color: "#fff",
                  padding: "8px 25px",
                  textTransform: "capitalize",
                  marginRight: "15px",
                  mt: 5,
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                Get Started
              </Button>

              <Button
                variant="outlined"
                sx={{
                  fontSize: "15px",
                  color: "#fff",
                  padding: "9px 25px",
                  mt: 5,
                  textTransform: "capitalize",
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                Create NFTs
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item md={6} sm={12}>
          <Box>
            <img
              src={RightImage}
              alt=""
              width="100%"
              style={{ marginTop: "70px" }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <Marquee pauseOnHover={isPaused}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              justifyContent={"space-between"}
              spacing={10}
              mt={8}
            >
              <Grid item>
                <img src={oneImage} alt="" width="150px" />
              </Grid>
              <Grid item>
                <img src={twoImage} alt="" width="150px" />
              </Grid>
              <Grid item>
                <img src={threeImage} alt="" width="150px" />
              </Grid>
              <Grid item>
                <img src={fourImage} alt="" width="150px" />
              </Grid>
              <Grid item>
                <img src={fiveImage} alt="" width="120px" />
              </Grid>
            </Grid>
          </Box>
        </Marquee>
      </Box>
    </Container>
  );
};

export default Hero;
