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
            <Box sx={{ flexGrow: 1, marginTop: '150px' }}>
                <div className='row container m-auto' >
                    {
                        products.map(product => <div
                            className='mt-4 col-lg-4 col-md-6 col-12'>
                            <img className='product-image' src={product.image} alt="" />
                            <h4>{product.productName}</h4>
                            <p>{product.price}</p>
                            <p style={{ width: '280px' }}>{product.description}</p>
                            <Link className='show-detail' to={`/productDetail/${product._id}`}>See Details</Link>
                        </div>)
                    }

                </div>
            </Box>
        </div >
    );
};

export default Products;