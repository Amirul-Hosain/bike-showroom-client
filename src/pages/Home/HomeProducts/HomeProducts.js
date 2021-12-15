import React, { useEffect, useState } from 'react';
import './HomeProducts.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch('https://stormy-coast-38483.herokuapp.com/products')
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 16)))
    }, [])
    return (
        <div style={{ marginTop: '150px' }}>
            <Box className='' sx={{ flexGrow: 1, marginTop: '150px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '35px', color: '#ffa500', marginBottom: '50px' }}>Our Products Collection</h2>

                <div className=' home-products-all'  >
                    {
                        products.map(product => <div
                            className='home-product' id='home-product-id'>
                            <img className='product-image' src={product.image} alt="" />
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '25px 20px 0px 20px' }}>
                                <div>
                                    <h4>{product.productName}</h4>
                                    <p>Price: {product.price}</p>
                                </div>
                                <div style={{ marginTop: '45px' }}>
                                    <Link className='show-detail' to={`/productDetail/${product._id}`}>See Details</Link>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
                <Link style={{}} className='see-more' to='/products'>See more <i class="fas fa-long-arrow-alt-right"></i></Link>
            </Box>

        </div>
    );
};

export default HomeProducts;