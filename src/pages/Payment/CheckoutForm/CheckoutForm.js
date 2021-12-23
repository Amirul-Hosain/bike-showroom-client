import React from 'react';
import { useElements, CardElement, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState();
    const [success, setSuccess] = useState('');
    const { user } = useAuth();


    useEffect(() => {
        fetch('https://stormy-coast-38483.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details.price)
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [details.price])


    useEffect(() => {
        fetch(`https://stormy-coast-38483.herokuapp.com/singleProducts/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message)
            setSuccess("");
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        //  payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: (user.displayName),
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your Payment Processed Successfully!!!')
            console.log('payment successfully', paymentIntent);
        }


    };
    return (
        <div>
            <form onSubmit={handleSubmit} style={{ marginTop: '50px' }}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '21px',
                                color: '#424770',
                                '::placeholder': {
                                    color: 'black'
                                },
                            },
                            invalid: {
                                color: 'red',
                                backgroundColor: 'green',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}
                    style={{
                        padding: '0px 20px', height: '38px', color: 'black', fontSize: '18px', margin: '10% 0px 0% 38%', backgroundColor: 'orange',
                        border: 'none', borderRadius: '2px'
                    }}>
                    Pay {details.price}
                </button>
            </form>
            <p style={{ color: 'red' }}>{error}</p>
            <p style={{ color: 'green' }}>{success}</p>
        </div>
    );
};

export default CheckoutForm;