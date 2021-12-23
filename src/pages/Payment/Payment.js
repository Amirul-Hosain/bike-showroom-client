import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jvn4ABpMwk76IzuJuxHUVNb1nlvbEhxVt05ZYa6IptcWhj4ELHBVrY3JqpcIzMdL5DTX2Hg2POWBMNgcpOUfH1M00df1xNtDY');


const Payment = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});


    useEffect(() => {
        fetch(`https://stormy-coast-38483.herokuapp.com/singleProducts/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div>
            {
                details.price && <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            }
        </div>
    );
};

export default Payment;