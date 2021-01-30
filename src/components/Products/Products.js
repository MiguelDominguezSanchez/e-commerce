import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
	{
		id: 1,
		name: 'Shoes',
		description: 'Running shoes.',
		price: '$5',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdPg8dQp4qQORN3Eq55wmjLlIGfk55B2clQ&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdPg8dQp4qQORN3Eq55wmjLlIGfk55B2clQ&usqp=CAU',
	},
	{
		id: 2,
		name: 'Macbook',
		description: 'Apple macbook.',
		price: '$10',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO28vh9PSjMCOA3BE-uM5vsMcx7fdETR4U_NZMAmiy9_vygVeNkIjU-efMUOS_O_TRxpprW88&usqp=CAc',
	},
];

const Products = () => {
	const classes = useStyles();

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justify="center" spacing={4}>
				{products.map(product => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
