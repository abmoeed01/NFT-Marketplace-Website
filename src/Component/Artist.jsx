import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LouraChinImg from "../Images/LouraChinImg.png";
import KelvinGlanImg from "../Images/KelvinGlanImg.png";
import GlamLeeImg from "../Images/GlamLeeImg.png";
import AlamedaImg from "../Images/AlamedaImg.png";

const Artist = () => {
  return (
    <Container>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 40,
          mt: 10,
          mb: 3,
          color: "#fff",
          fontWeight: 800,
        }}
      >
        Top Creators
      </Typography>

      <Typography
        sx={{
          color: "#F0F0F0",
          textAlign: "center",
          lineHeight: "27px",
          marginBottom: "40px",
        }}
      >
        In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi{" "}
        <br />
        id. Risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean{" "}
        <br />
        egestas malesuada in pulvinar enim viverra.
      </Typography>

      <Grid container spacing={5} justifyContent={{ xs: "center" }}>
        <Grid item md={3} sm={12} lg={3}>
          <Box
            sx={{
              background: "rgba(134, 155, 223, 0.14)",
              border: "1px solid #C0c0f8",
              borderRadius: "12px",
            }}
          >
            <img src={LouraChinImg} alt="" width="100%" />
            <Typography
              sx={{
                position: "relative",
                bottom: "50px",
                color: "#fff",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Loura chin
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "-20px",
              }}
            >
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
                View Details
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item md={3} sm={12} lg={3}>
          <Box
            sx={{
              background: "rgba(134, 155, 223, 0.14)",
              border: "1px solid #C0c0f8",
              borderRadius: "12px",
            }}
          >
            <img src={KelvinGlanImg} alt="" width="100%" />
            <Typography
              sx={{
                position: "relative",
                bottom: "50px",
                color: "#fff",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Loura chin
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "-20px",
              }}
            >
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
                View Details
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item md={3} sm={12} lg={3}>
          <Box
            sx={{
              background: "rgba(134, 155, 223, 0.14)",
              border: "1px solid #C0c0f8",
              borderRadius: "12px",
            }}
          >
            <img src={GlamLeeImg} alt="" width="100%" />
            <Typography
              sx={{
                position: "relative",
                bottom: "50px",
                color: "#fff",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Loura chin
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "-20px",
              }}
            >
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
                View Details
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item md={3} sm={12} lg={3}>
          <Box
            sx={{
              background: "rgba(134, 155, 223, 0.14)",
              border: "1px solid #eee",
            }}
          >
            <img src={AlamedaImg} alt="" width="100%" />
            <Typography
              sx={{
                position: "relative",
                bottom: "50px",
                color: "#fff",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Loura chin
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "-20px",
              }}
            >
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
                View Details
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Artist;
