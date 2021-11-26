import React, { useEffect, useState } from 'react';
import './HomeProducts.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stormy-coast-38483.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
    return (
        <div style={{ marginTop: '150px' }}>
            <Box sx={{ flexGrow: 1, marginTop: '150px' }}>
                <h2 style={{ marginLeft: '8%', fontSize: '35px', color: '#ffa500', marginBottom: '50px' }}>Our products sample</h2>

                <Grid container spacing={2} style={{ width: '100%', paddingLeft: '8%', marginBottom: '50px', }}>
                    {
                        products.map(product => <Grid
                            className='product-container'>
                            <img className='product-image' src={product.image} alt="" />
                            <h4>{product.productName}</h4>
                            <Link className='show-detail' to={`/productDetail/${product._id}`}>See Details</Link>

                        </Grid>)
                    }

                </Grid>
                <Link style={{ marginLeft: '10%' }} className='see-more' to='/products'>See more</Link>
            </Box>

        </div>
    );
};

export default HomeProducts;