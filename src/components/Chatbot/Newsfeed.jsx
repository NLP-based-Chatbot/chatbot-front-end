import {
  Card,
  Grid,
  makeStyles,
  Paper,
  Typography,
  AppBar,
  Tabs,
  Tab,
  CardHeader,
  Avatar,
  Divider,
  Chip,
  Box,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

function TabPanel(props) {
  const { children, value, index, classes, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      align="left"
      {...other}
    >
      {value === index && (
        <Paper className={classes.newsfeed_body}>{children}</Paper>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    padding: "20px",
  },
  title: {
    color: theme.palette.secondary.light,
  },
  newsfeed: {
    marginTop: "20px",
    padding: "10px",
    color: theme.palette.secondary.main,
  },
  newsfeed_body: {
    margin: 0,
    padding: "10px",
    backgroundColor: theme.palette.secondary.light,
  },
  newsfeed_post: {
    padding: "0px",
    width: "80%",
  },
  newsfeed_scroll: {
    height: "20rem",
    overflowY: "auto",
  },
  newsfeed_post_body: {
    padding: "20px",
  },
  body: {
      paddingTop: "5px",
      paddingLeft:"5px"
  },
  askme:{
    marginLeft:"15px"
  }
}));

const Newsfeed = ({ domain, domainImg, posts, instructions }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          spacing={3}
        >
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <img src={domainImg} height="auto" width="60%" alt="" />
              </Grid>
              <Grid item xs={9} className={classes.title}>
                <Typography variant="h3">{domain}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Newsfeed" {...a11yProps(0)} />
                <Tab label="How to use" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <div className={classes.newsfeed_scroll}>
              <TabPanel value={value} index={0} classes={classes}>
                {posts.map((message, index) => (
                  <Card className={classes.newsfeed_post} key={`${index}`}>
                    <img src={message.img} height="auto" width="100%" alt="" />
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" src="/logo.svg" className={classes.avatar}>
                          Wingman Development team
                        </Avatar>
                      }
                      title={
                        <Typography align="left" variant="h6">
                          {message.title}
                        </Typography>
                      }
                      subheader={
                        <Typography align="left" variant="subtitle2">
                          {message.date}
                        </Typography>
                      }
                    />
                    <Divider />

                    <div className={classes.newsfeed_post_body}>
                      <Typography align="left" variant="body2">
                        {message.body}
                      </Typography>
                    </div>
                  </Card>
                ))}
              </TabPanel>
              <TabPanel value={value} index={1} classes={classes}>
              <Typography className={classes.askme} variant='h4'>Ask ME</Typography>
              {instructions.map((inst, index) => (
                <Box marginTop='10px' padding="10px">
                  <Chip size="medium" label={inst.label} color="primary"/>
                  <Typography className={classes.body} variant='body1' >{inst.content}</Typography>
                </Box>
              ))}
            </TabPanel>
            </div>

            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Newsfeed;
