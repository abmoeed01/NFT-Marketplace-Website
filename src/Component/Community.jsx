import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import six from "../Images/six.png";
import seven from "../Images/seven.png";
import eight from "../Images/eight.png";
import nine from "../Images/nine.png";

const Community = () => {
  return (
    <Container>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 40,
          color: "#fff",
          fontWeight: 700,
          mt: 4,
        }}
      >
        NFTs Collections
      </Typography>
      <Typography variant="body1" color={"#F0F0F0"} textAlign={"center"}>
        Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.
      </Typography>

      <Grid container spacing={3} justifyContent={{ xs: "center" }}>
        <Grid item md={3} sm={12} lg={3}>
          <Box
            sx={{
              background: "rgba(134, 155, 223, 0.14)",
              border: "1px solid #C0c0f8",
              borderRadius: "159px",
              pb: 8,
              mt: 5,
            }}
          >
            <img src={six} alt="" width="100%" />

            <Typography
              sx={{
                position: "relative",
                bottom: "10px",
                color: "#fff",
                textAlign: "center",
                fontSize: "17px",
                fontWeight: 600,
              }}
            >
              Broken collection
            </Typography>

            <Typography color={"#BC61F3"} textAlign={"center"}>
              View Collection
            </Typography>
          </Box>
        </Grid>

        <Grid item md={3} sm={12} lg={3}>
          <Box
            sx={{
              background: "rgba(134, 155, 223, 0.14)",
              border: "1px solid #C0c0f8",
              borderRadius: "159px",
              pb: 8,
              mt: 5,
            }}
          >
            <img src={seven} alt="" width="100%" />

            <Typography
              sx={{
                position: "relative",
                bottom: "10px",
                color: "#fff",
                textAlign: "center",
                fontSize: "17px",
                fontWeight: 600,
              }}
            >
              Broken collection
            </Typography>

            <Typography color={"#BC61F3"} textAlign={"center"}>
              View Collection
            </Typography>
          </Box>
        </Grid>

        <Grid item md={3} sm={12} lg={3}>
          <Box
            sx={{
              background: "rgba(134, 155, 223, 0.14)",
              border: "1px solid #C0c0f8",
              borderRadius: "159px",
              pb: 8,
              mt: 5,
            }}
          >
            <img src={eight} alt="" width="100%" />

            <Typography
              sx={{
                position: "relative",
                bottom: "10px",
                color: "#fff",
                textAlign: "center",
                fontSize: "17px",
                fontWeight: 600,
              }}
            >
              Broken collection
            </Typography>

            <Typography color={"#BC61F3"} textAlign={"center"}>
              View Collection
            </Typography>
          </Box>
        </Grid>

        <Grid item md={3} sm={12} lg={3}>
          <Box
            sx={{
              background: "rgba(134, 155, 223, 0.14)",
              border: "1px solid #C0c0f8",
              borderRadius: "159px",
              pb: 8,
              mt: 5,
            }}
          >
            <img src={nine} alt="" width="100%" />

            <Typography
              sx={{
                position: "relative",
                bottom: "10px",
                color: "#fff",
                textAlign: "center",
                fontSize: "17px",
                fontWeight: 600,
              }}
            >
              Broken collection
            </Typography>

            <Typography color={"#BC61F3"} textAlign={"center"}>
              View Collection
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Community;
