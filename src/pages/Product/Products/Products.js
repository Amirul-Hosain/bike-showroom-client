import React, { useState, useEffect } from 'react';
import './Products.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Navigation from '../../Share/Navigation/Navigation';



const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stormy-coast-38483.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2} style={{ width: '90%' }}>
                        {
                            products.map(product => <Grid item xs={12} sm={6} md={4}
                                className='products'
                                key={product._Id}
                            >
                                <img width='250' height='auto' src={product.image} alt="" />
                                <h6>{product.productName}</h6>
                                <Link className='show-detail' to={`/productDetail/${product._id}`}>Show Details</Link>
                            </Grid>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div >
    );
};

export default Products;