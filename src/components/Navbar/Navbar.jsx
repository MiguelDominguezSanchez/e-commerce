import React, { Fragment } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
// import classes from '*.module.css';

import logo from '../../assets/commerce.png';
// import classes from '*.module.css';
import useStyles from './styles';

const Navbar = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<Toolbar>
					<Typography vvariant="h6" className={classes.title} color="inherit">
						<img
							src={logo}
							alt="Commerce.js"
							height="25px"
							className={classes.image}
						/>
						Commerce.js
					</Typography>
					<div className={classes.grow} />
					<div className={classes.button}>
						<IconButton aria-label="Show cart items" color="inherit">
							<Badge badgeContent={2} color="secondary">
								<ShoppingCart />
							</Badge>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</Fragment>
	);
};

export default Navbar;
