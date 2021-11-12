import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, Grid, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PhoneIcon from '@material-ui/icons/Phone';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getUserSignedIn, userSignedOut } from './../store/slices/auth';
import { useHistory } from 'react-router-dom';

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
    display: "flex",
    alignItems: "center",
    marginLeft: 'auto',
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
  },
  name: {
    display: "inline",
    width: "100%"
  }
}));

const NavPanel = () => {
  const classes = useStyles();
  const [open, toggleOpen] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const userSignedIn = useSelector(getUserSignedIn)
  const history = useHistory()

  const toggleLogin = () => {
    if (userSignedIn) {
      setTimeout(() => {
        dispatch(userSignedOut())
        history.push("/home")
      }, 500)
    } else {
      history.push("/")
    }
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {userSignedIn && <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => toggleOpen(!open)}>
            <MenuIcon />
          </IconButton>}
          <Grid container alignItems="center">
            <Grid container xs={8} md={10} alignItems="center" justifyContent="space-between">
              {userSignedIn && user.is_superuser && <Grid item xs={2} md={2}>
                <Link to="/admin/dashboard" className={classes.link}>
                  <Typography variant="h6" className={classes.title}>
                    Dashboard
                  </Typography>
                </Link>
              </Grid>}
              <Grid item xs={2} md={2}>
                <Link to="/home" className={classes.link}>
                  <Typography variant="h6" className={classes.title}>
                    Home
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={2} md={2}>
                <Link to="/product" className={classes.link}>
                  <Typography variant="h6" className={classes.title}>
                    Product
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={2} md={2}>
                <Link to="/aboutus" className={classes.link}>
                  <Typography variant="h6" className={classes.title}>
                    About Us
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={2} md={2}>
                <Link to="/contactus" className={classes.link}>
                  <Typography variant="h6" className={classes.title}>
                    Contact
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            {userSignedIn && <Grid item xs={3} md={2} className={classes.corner}>
              <Typography variant="h6" className={classes.title}>
                Hi, {user.first_name}
              </Typography>
            </Grid>}
          </Grid>
          <div className={classes.corner}>
            <ListItem button alignItems="center" onClick={() => toggleLogin()}>
              <Typography variant="h6">
                {userSignedIn ? "Logout" : "Login"}
              </Typography>
            </ListItem>
          </div>
        </Toolbar>
      </AppBar>

      {userSignedIn && <Drawer
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
      </Drawer>}
    </>
  );
};

export default NavPanel;