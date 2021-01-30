import React, { Fragment, useState } from 'react';
import {
	Paper,
	Stepper,
	Step,
	StepLabel,
	Typography,
	CircularProgress,
	Divider,
	Button,
} from '@material-ui/core';
// import classes from '*.module.css';

import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
	const [activeStep, setActiveStep] = useState(0);
	const classes = useStyles();

	const Confirmation = () => <div>Confirmation</div>;

	const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

	return (
		<Fragment>
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant="h4" align="center">
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map(step => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.lenght ? <Confirmation /> : <Form />}
				</Paper>
			</main>
		</Fragment>
	);
};

export default Checkout;
