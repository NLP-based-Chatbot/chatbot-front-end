import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { PropTypes } from "prop-types";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const useStyles = makeStyles((theme) => ({
  body: {
    [theme.breakpoints.up("md")]: {
      margin: "40px 80px",
      padding: "40px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "50px 20px",
      padding: "20px",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "15px",
    },
    color: theme.palette.primary.main,
  },
  parallax: {
    margin: "0px",
  },
  description: {
    color: theme.palette.primary.light,
    padding: theme.spacing(2)
  },
  pic: {
    width: "80%",
    height: "auto",
  },
}));

const SubSection = (props) => {
  const { sectionName, description, imageSrc, align } = props;
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Parallax className={classes.parallax} y={[-10, 10]} tagOuter="figure">
      <Paper className={classes.body}>
        <Grid container justifyContent="center" spacing={2}>
          {align === "left" || isSmallScreen ? (
            <Grid item sm={12} md={4}>
              <img className={classes.pic} src={imageSrc} alt={sectionName} />
            </Grid>
          ) : null}

          <Grid item sm={12} md={8}>
            <Typography className={classes.title} component="h3" variant="h3">
              {sectionName}
            </Typography>
            <Typography
              className={classes.description}
              component="body1"
              variant="body1"
              align="justify"
              display="block"
            >
              {description}
            </Typography>
          </Grid>
          {align === "right" && !isSmallScreen ? (
            <Grid item sm={12} md={4}>
              <img className={classes.pic} src={imageSrc} alt={sectionName} />
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </Parallax>
  );
};

export default SubSection;

SubSection.propTypes = {
  sectionName: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  align: PropTypes.string,
};
