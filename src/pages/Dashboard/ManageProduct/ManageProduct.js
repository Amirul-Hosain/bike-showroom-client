import React, { useEffect, useState } from 'react';
import './ManageProduct.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stormy-coast-38483.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure, You Want to Delete this product?');
        if (proceed) {
            const url = `https://stormy-coast-38483.herokuapp.com/products/${id}`;
            console.log(id, url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully Product.');

                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    }


    return (
        <div>
            <h2>this is manage products.</h2>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ margin: 'auto' }}>
                    {
                        products.map(product => <Grid
                            className='product-container'>
                            <img className='product-image' src={product.image} alt="" />
                            <h4>{product.productName}</h4>
                            <p>{product.price}</p>
                            <p style={{ width: '280px' }}>{product.description}</p>
                            <p
                                className='delete-button'
                                onClick={() => handleDeleteProduct(product._id)}>
                                Delete
                            </p>
                        </Grid>)
                    }

                </Grid>
            </Box>

            <Grid item xs={8}>
            </Grid>
        </div>
    );
};

export default ManageProduct;