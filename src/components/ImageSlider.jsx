import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, makeStyles, Box } from "@material-ui/core";
import { Parallax } from "react-scroll-parallax";

const useStyles = makeStyles((theme) => ({
  parallax: {
    margin: "0px",
  },
  body: {
    [theme.breakpoints.up("md")]: {
        marginTop:"20px",
        marginBottom:"120px",
        marginLeft:"80px",
        marginRight:"80px"
    },
    [theme.breakpoints.down("md")]: {
        marginTop:"10px",
        marginBottom:"50px",
        marginLeft:"20px",
        marginRight:"20px"
    },
  },
}));

function ImageSlider(props) {
  const classes = useStyles();
  var items = [
    {
        imgSrc: "./banner_1.png"
    },
    {
        imgSrc: "./banner_2.png"
    },
    {
        imgSrc: "./banner_3.png"
    },
  ];

  return (
    <Parallax className={classes.parallax} y={[-10, 10]} tagOuter="figure">
      <Box className={classes.body}>
        <Carousel animation="fade" duration={500} swipe={true}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
    </Parallax>
  );
}

function Item(props) {
  return (
  
      <img src={props.item.imgSrc} height="auto" width="100%" alt="" />

  );
}

export default ImageSlider;
