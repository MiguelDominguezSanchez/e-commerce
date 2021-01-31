import React, { Fragment, useState, useEffect } from 'react';
import {
	Paper,
	Stepper,
	Step,
	StepLabel,
	Typography,
	CircularProgress,
	Divider,
	Button,
	Link,
	CssBaseline,
} from '@material-ui/core';
// import classes from '*.module.css';
import { useHistory } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
	const [activeStep, setActiveStep] = useState(0);
	const [checkoutToken, setCheckoutToken] = useState(null);
	const [shippingData, setShippingData] = useState({});
	const [isFinished, setIsFinished] = useState(false);
	const classes = useStyles();
	const history = useHistory();

	useEffect(() => {
		const generateToken = async () => {
			try {
				const token = await commerce.checkout.generateToken(cart.id, {
					type: 'cart',
				});

				console.log(token);

				setCheckoutToken(token);
			} catch (error) {
				history.pushState('/');
			}
		};

		generateToken();
	}, [cart]);

	const nextStep = () => setActiveStep(preActiveStep => preActiveStep + 1);
	const backStep = () => setActiveStep(preActiveStep => preActiveStep - 1);

	const next = data => {
		setShippingData(data);

		nextStep();
	};

	const timeout = () => {
		setTimeout(() => {
			setIsFinished(true);
		}, 3000);
	};

	let Confirmation = () =>
		order.customer ? (
			<Fragment>
				<div>
					<Typography variant="h5">
						Thank you for purchase, {order.customer.firstname}{' '}
						{order.customer.lastname}
					</Typography>
					<Divider className={classes.divider} />
					<Typography variant="subtitle2">
						Order ref: {order.customer_reference}
					</Typography>
				</div>
				<br />
				<Button component={Link} to="/" variant="outlined" type="button">
					Back to Home
				</Button>
			</Fragment>
		) : isFinished ? (
			<Fragment>
				<div>
					<Typography variant="h5">Thank you for purchase</Typography>
					<Divider className={classes.divider} />
				</div>
				<br />
				<Button component={Link} to="/" variant="outlined" type="button">
					Back to Home
				</Button>
			</Fragment>
		) : (
			<div className={classes.spinner}>
				<CircularProgress />
			</div>
		);

	if (error) {
		<Fragment>
			<Typography variant="h5">Error: {error}</Typography>
			<br />

			<Button component={Link} to="/" variant="outlined" type="button">
				Back to Home
			</Button>
		</Fragment>;
	}

	const Form = () =>
		activeStep === 0 ? (
			<AddressForm checkoutToken={checkoutToken} next={next} />
		) : (
			<PaymentForm
				shippingData={shippingData}
				checkoutToken={checkoutToken}
				nextStep={nextStep}
				backStep={backStep}
				onCaptureCheckout={onCaptureCheckout}
				timeout={timeout}
			/>
		);

	return (
		<Fragment>
			<CssBaseline />
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
					{activeStep === steps.lenght ? (
						<Confirmation />
					) : (
						checkoutToken && <Form />
					)}
				</Paper>
			</main>
		</Fragment>
	);
};

export default Checkout;
