import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Share/Navigation/Navigation';

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
            <Container>
                <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={12} sm={6} md={5}>
                        <img width='320' src={details?.image} alt="" />
                        <p>{details?.productName}</p>
                        <p>{details?.price}</p>
                        <p style={{ width: '70%' }}>{details?.description}</p>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} >
                        <form onSubmit={handleProductSubmit} className='pt-4 '>
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
                            <button className='see-more' type="submit">Purchase order</button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductDetail;