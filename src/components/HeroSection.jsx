import { Box, makeStyles, useMediaQuery } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";

const HeroSection = () => {
  const bk_1 = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const classes = useStyles();
  var items1 = [
    {
      imgSrc: "./banner_4.png",
    },
    {
      imgSrc: "./banner_1.png",
    },
    {
      imgSrc: "./banner_2.png",
    },
    {
      imgSrc: "./banner_3.png",
    },
  ];
  var items2 = [
    {
      imgSrc: "./banner_4_mob.png",
    },
    {
      imgSrc: "./banner_1_mob.png",
    },
    {
      imgSrc: "./banner_2_mob.png",
    },
    {
      imgSrc: "./banner_3_mob.png",
    },
  ];
  function Item(props) {
    return (
      <Box className={classes.body} square elevation={5}>
        <img src={props.item.imgSrc} height="auto" width="100%" alt="" />
      </Box>
    );
  }

  return (
      <Box>
        <Carousel
          animation="fade"
          duration={1000}
          swipe={true}
          indicators={false}
        >
          {bk_1
            ? items1.map((item, i) => <Item key={i} item={item} />)
            : items2.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
      </Box>
  );
};

const useStyles = makeStyles((theme) => ({

  body: {
    [theme.breakpoints.up("md")]: {
      marginTop: "8px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
  },
}));

export default HeroSection;
