import React, { useEffect, useState } from 'react';
import './HomeProducts.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';



const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stormy-coast-38483.herokuapp.com/homeProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div style={{ marginTop: '150px' }}>
            <Box sx={{ flexGrow: 1 }} className='products'>
                <Container>
                    <h2 style={{ fontSize: '35px', color: 'rgb(34, 172, 57)', marginBottom: '50px' }}>Our products sample</h2>

                    <Grid container spacing={2}>
                        {
                            products.map(product => <Grid item xs={12} sm={6} md={4}
                                style={{ margin: '20px 0px' }}
                                key={product._Id}
                            >
                                <img src={product.image} alt="" />
                                <Grid style={{ textAlign: 'center' }}>
                                    <h6 style={{ marginTop: '15px' }}>{product.productName}</h6>
                                    <Link className='show-detail' to={`/productDetail/${product._id}`}>Show Details</Link>
                                </Grid>
                            </Grid>)
                        }
                        <Link className='see-more' to='/products'>See more</Link>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default HomeProducts;