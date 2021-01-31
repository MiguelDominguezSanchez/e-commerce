import React, { Fragment } from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import {
	Elements,
	CardElement,
	ElementsConsumer,
} from '@stripe/react-stripe-js';
import { loadStrip } from '@stripe/stripe-js';

import Review from './Review';

const PaymentForm = ({ checkoutToken }) => {
	return (
		<Fragment>
			<Review checkoutToken={checkoutToken} />
		</Fragment>
	);
};

export default PaymentForm;
