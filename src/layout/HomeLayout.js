import { Box, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Footer from '../containers/Footer';
import NavPanel from '../containers/NavPanel';
import { Route } from 'react-router';

const HomeLayout = props => {
	const classes = useStyles();
	return (
		<Container
			{...props}
			maxWidth='false'
			disableGutters
			className={classes.root}
		>
			<NavPanel />
			<Box className={classes.body}>{props.children}</Box>
			<Footer />
		</Container>
	);
};

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => (
				<HomeLayout>
					<Component {...props} />
				</HomeLayout>
			)}
		></Route>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	body: {
		paddingTop: theme.spacing(7)
	}
}));
export default HomeLayoutRoute;
