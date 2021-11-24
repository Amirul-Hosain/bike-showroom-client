import React, { useEffect, useState } from 'react';
import './HomeProducts.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';



const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stormy-coast-38483.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
    return (
        <div style={{ marginTop: '150px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <h2 style={{ fontSize: '35px', color: 'rgb(34, 172, 57)', marginBottom: '50px' }}>Our products sample</h2>

                    <Grid container spacing={2} >
                        {
                            products.map(product => <Grid item xs={12} sm={6} md={4}
                                className='home-product'
                                style={{ margin: '20px 0px' }}
                                key={product._Id}
                            >
                                <img className='product-image' src={product.image} alt="" />
                                <Grid style={{ textAlign: 'center' }}>
                                    <h5 style={{ marginTop: '15px' }}>{product.productName}</h5>
                                    <Link className='show-detail' to={`/productDetail/${product._id}`}>Show Details</Link>
                                </Grid>
                            </Grid>)
                        }
                    </Grid>
                    <Link className='see-more' to='/products'>See more</Link>
                </Container>
            </Box>
        </div>
    );
};

export default HomeProducts;