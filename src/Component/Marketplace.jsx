import React from "react";
import "../Css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import oneimg from "../Images/CollectNftsOne.png";
import twoimg from "../Images/CollectNftsTwo.png";
import threeimg from "../Images/CollectNftsThree.png";
import fourimg from "../Images/CollectNftsOne.png";
import fiveimg from "../Images/CollectNftsTwo.png";
import siximg from "../Images/CollectNftsThree.png";
import sevenimg from "../Images/CollectNftsOne.png";
import eightimg from "../Images/CollectNftsTwo.png";
import nineimg from "../Images/CollectNftsThree.png";
import { Container } from "@mui/material";

const Marketplace = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="carousel">
        <Slider {...settings}>
          <div className="box">
            <img src={oneimg} alt="" width="100%" />
          </div>

          <div className="box">
            <img src={twoimg} alt="" width="100%" />
          </div>

          <div className="box">
            <img src={threeimg} alt="" width="100%" />
          </div>

          <div className="box">
            <img src={fourimg} alt="" width="100%" />
          </div>

          <div className="box">
            <img src={fiveimg} alt="" width="100%" />
          </div>

          <div className="box">
            <img src={siximg} alt="" width="100%" />
          </div>

          <div className="box">
            <img src={sevenimg} alt="" width="100%" />
          </div>

          <div className="box">
            <img src={eightimg} alt="" width="100%" />
          </div>

          <div className="box">
            <img src={nineimg} alt="" width="100%" />
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default Marketplace;

// import React from "react";
// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";

// import Carousel from "react-elastic-carousel";

// import oneimg from "../Images/CollectNftsOne.png";
// import twoimg from "../Images/CollectNftsTwo.png";
// import threeimg from "../Images/CollectNftsThree.png";
// import "../Css/slider.css";
// import { Box, Container, Grid, Typography } from "@mui/material";

// let imgs = [
//   {
//     id: 1,
//     img: oneimg,
//   },
//   {
//     id: 2,
//     img: twoimg,
//   },
//   {
//     id: 3,
//     img: threeimg,
//   },
//   {
//     id: 4,
//     img: twoimg,
//   },
//   {
//     id: 5,
//     img: threeimg,
//   },
//   {
//     id: 6,
//     img: twoimg,
//   },
//   {
//     id: 7,
//     img: threeimg,
//   },
//   {
//     id: 8,
//     img: twoimg,
//   },
//   {
//     id: 9,
//     img: threeimg,
//   },
// ];
// const breakPoints = [
//   { width: 0, itemsToShow: 1 },
//   { width: 300, itemsToShow: 2 },
//   { width: 600, itemsToShow: 3 },
//   { width: 900, itemsToShow: 3 },
// ];
// const Marketplace = () => {
//   return (
//     <>
//       <Container>
//         <Container>
//           <Typography
//             sx={{
//               textAlign: "center",
//               fontSize: 40,
//               mt: 10,
//               mb: 7,
//               color: "#fff",
//               fontWeight: 800,
//             }}
//           >
//             Collect Some NFTs
//           </Typography>

//           <Carousel breakPoints={breakPoints}>
//             {imgs.map((item, id) => (
//               <Box
//                 py={2}
//                 key={id}
//                 sx={{
//                   p: 1,
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={item.img}
//                   sx={{
//                     display: "flex",
//                     width: "100%",
//                     height: "100%",
//                   }}
//                 />
//               </Box>
//             ))}
//           </Carousel>
//         </Container>
//       </Container>
//     </>
//   );
// };

// export default Marketplace;

// import { Box, Container, Grid, Typography } from "@mui/material";
// import React from "react";
// import CollectNftsOne from "../Images/CollectNftsOne.png";
// import CollectNftsTwo from "../Images/CollectNftsTwo.png";
// import CollectNftsThree from "../Images/CollectNftsThree.png";

// const Marketplace = () => {
//   return (
//     <Container>
//       <Container>
//         <Typography
//           sx={{
//             textAlign: "center",
//             fontSize: 40,
//             mt: 10,
//             mb: 7,
//             color: "#fff",
//             fontWeight: 800,
//           }}
//         >
//           Collect Some NFTs
//         </Typography>

//         <Grid container>
//           <Grid
//             item
//             md={3}
//             sm={12}
//             sx={{
//               mx: "30px",
//               ml: "50px",
//               mr: "10px",
//             }}
//           >
//             <img src={CollectNftsOne} alt="" width="100%" />
//           </Grid>

//           <Grid
//             item
//             md={3}
//             sm={12}
//             sx={{
//               mx: "30px",
//               ml: "50px",
//               mr: "10px",
//             }}
//           >
//             <img src={CollectNftsTwo} alt="" width="100%" />

//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: "20px",
//                 flexWrap: "wrap",
//                 marginTop: "30px",
//                 marginBottom: "30px",
//               }}
//             >
//               <Box
//                 sx={{
//                   background: "#D9D8E2",
//                   borderRadius: "50%",
//                   width: "30px",
//                   height: "30px",
//                 }}
//               ></Box>

//               <Box
//                 sx={{
//                   background: "#595572",
//                   borderRadius: "50%",
//                   width: "30px",
//                   height: "30px",
//                 }}
//               ></Box>

//               <Box
//                 sx={{
//                   background: "#595572",
//                   borderRadius: "50%",
//                   width: "30px",
//                   height: "30px",
//                 }}
//               ></Box>
//             </Box>
//           </Grid>

//           <Grid
//             item
//             md={3}
//             sm={12}
//             sx={{
//               mx: "30px",
//               ml: "50px",
//               mr: "10px",
//             }}
//           >
//             <img src={CollectNftsThree} alt="" width="100%" />
//           </Grid>
//         </Grid>
//       </Container>
//     </Container>
//   );
// };

// export default Marketplace;
