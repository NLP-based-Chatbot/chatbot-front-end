import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { PropTypes } from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  body: {
    margin: "40px 80px",
    padding: "40px",
  },
  title: {
    marginTop: "40px",
    color: theme.palette.primary.main,
  },
  description: {
    color: theme.palette.primary.light,
  },
}));

const SubSection = (props) => {
  const { sectionName, description, imageSrc, align } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.body}>
      <Grid container justifyContent="center" spacing={2}>
        {align === "left"? (
          <Grid item md={12} lg={4}>
            <img src={imageSrc} width="400px" alt={sectionName} />
          </Grid>
        ) : null}

        <Grid item md={12} lg={8}>
          <Typography className={classes.title} variant="h3">
            {sectionName}
          </Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Grid>
        {align === "right" ? (
          <Grid item md={12} lg={4}>
            <img src={imageSrc} width="400px" alt={sectionName} />
          </Grid>
        ) : null}
      </Grid>
    </Paper>
  );
};

export default SubSection;

SubSection.propTypes = {
  sectionName: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  align: PropTypes.string,
};
