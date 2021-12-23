import { Container, Grid } from '@mui/material';
import './ProductDetail.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Share/Navigation/Navigation';
import Payment from '../../../../src/pages/Payment/Payment'

const ProductDetail = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [productData, setProductData] = useState({});


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...productData };
        newProduct[field] = value;
        setProductData(newProduct);
        console.log(newProduct);
    }

    const handleProductSubmit = e => {
        productData.email = user.email;
        productData.status = "pending";
        fetch('https://stormy-coast-38483.herokuapp.com/addOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('added a new product')
                    console.log(data);
                }
            })

        e.preventDefault();
    }



    useEffect(() => {
        fetch(`https://stormy-coast-38483.herokuapp.com/homeProducts/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    useEffect(() => {
        fetch(`https://stormy-coast-38483.herokuapp.com/singleProducts/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Container style={{ marginTop: '150px', paddingBottom: '100px' }}>

                <Grid style={{ display: 'flex', }}>

                    <img width='350' height='280' src={details?.image} alt="" />
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '20px 0px 0px 15px' }}>
                        <h5>{details?.productName}</h5>
                        <p style={{ fontSize: '20px' }}>{details?.price}</p>
                        <p style={{ width: '50%' }}>{details?.description}</p>
                    </div>
                </Grid>

                <div>
                    <div className='address-payment'>
                        <form style={{ width: '50%', marginTop: '-40px' }} onSubmit={handleProductSubmit} className='pt-4 '>
                            <h4 style={{ marginBottom: '30px' }}>Put Your Information</h4>
                            <input
                                onBlur={handleOnBlur}
                                type="text"
                                name='bikeModel'
                                className="form-control"
                                placeholder="Bike model" />
                            <input
                                style={{ marginTop: '10px' }}
                                onBlur={handleOnBlur}
                                type="text"
                                name='userName'
                                className="form-control"
                                value={user.displayName} />
                            <input
                                style={{ marginTop: '10px' }}
                                onBlur={handleOnBlur}
                                type="email"
                                name='email'
                                className="form-control"
                                value={user.email} />
                            <input
                                style={{ marginTop: '10px' }}
                                onBlur={handleOnBlur}
                                type="text"
                                name='address'
                                className="form-control"
                                placeholder="Your address" />
                            <input
                                style={{ marginTop: '10px' }}
                                onBlur={handleOnBlur}
                                type="date"
                                name='date'
                                className="form-control"
                                placeholder="Order data" />
                            <input
                                style={{ marginTop: '10px' }}
                                onBlur={handleOnBlur}
                                type="number"
                                name='number'
                                className="form-control"
                                placeholder="Mobile number" />
                        </form>


                        {/*--------------- payment from client ------------------*/}

                        <div className='payment-info'>
                            <h4 className='payment-title'>Pay for {details.productName}</h4>
                            <Payment />
                        </div>

                    </div>
                    <button style={{ marginTop: '50px' }} className='see-more' type="submit">Purchase order</button>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetail;