import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, Grid, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PhoneIcon from '@material-ui/icons/Phone';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    marginTop: theme.spacing(3)
  },
  corner: {
    marginLeft: 'auto'
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    width: '100%'
  },
  navItem: {
    width: "fit-content"
  },
  listItem: {
    marginBottom: theme.spacing(3)
  },
  row: {
    width: "100%",
    marginTop: "auto"
  },
  arrowButton: {
    marginRight: theme.spacing(-25)
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText
  },
  sideNavLink: {
    textDecoration: "none",
    color: theme.palette.secondary.contrastText
  }
}));

const NavPanel = () => {
  const classes = useStyles();
  const [open, toggleOpen] = useState(false)

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => toggleOpen(!open)}>
            <MenuIcon />
          </IconButton>
          <Grid container className={classes.navList}>
            <Grid item xs={3} md={2}>
              <Link to="/home" className={classes.link}>
                <Typography variant="h6" className={classes.title}>
                  Home
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={3} md={2}>
              <Link to="/product" className={classes.link}>
                <Typography variant="h6" className={classes.title}>
                  Product
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={3} md={2}>
              <Link to="/home" className={classes.link}>
                <Typography variant="h6" className={classes.title}>
                  About Us
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={3} md={2}>
              <Link to="/contactus" className={classes.link}>
                <Typography variant="h6" className={classes.title}>
                  Contact
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <div className={classes.corner}>
            <ListItem button alignItems="center">
              <Link to="/" className={classes.link}>
                <Typography variant="h6">
                  Login
                </Typography>
              </Link>
            </ListItem>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Link to="/home" className={classes.list}>
          <img
            src="/Logo-robot-only.svg"
            height="auto"
            width="50px"
            alt=""
          />
        </Link>
        <List className={classes.list}>
          <Link to="/chatbot/public-transportation" className={classes.sideNavLink}>
            <ListItem button alignItems="center" className={classes.listItem}>
              <ListItemIcon><DirectionsBusIcon /></ListItemIcon>
              <ListItemText>Public Transportation</ListItemText>
            </ListItem>
          </Link>
          <Link to="/chatbot/healthcare" className={classes.sideNavLink}>
            <ListItem button alignItems="center" className={classes.listItem}>
              <ListItemIcon><FavoriteBorderIcon /></ListItemIcon>
              <ListItemText>Health Care</ListItemText>
            </ListItem>
          </Link>
          <Link to="/chatbot/telecommunication" className={classes.sideNavLink}>
            <ListItem button alignItems="center" className={classes.listItem}>
              <ListItemIcon><PhoneIcon /></ListItemIcon>
              <ListItemText>Telecommunication</ListItemText>
            </ListItem>
          </Link>
        </List>

        <Box component="span" className={classes.row}>
          <Divider className={classes.divider} />
          <IconButton button className={classes.arrowButton} onClick={() => toggleOpen(!open)}>
            <ArrowLeftIcon />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};

export default NavPanel;