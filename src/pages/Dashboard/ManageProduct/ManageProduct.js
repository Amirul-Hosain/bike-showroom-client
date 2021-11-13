import React, { useEffect, useState } from 'react';

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
            <div style={{ margin: '10px 15px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {
                    products.map(product => <div style={{ margin: '10px 5px', width: '300px' }}>
                        <img width='300' height='200' src={product.image} alt="" />
                        <h4>{product.productName}</h4>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p onClick={handleDeleteProduct} style={{ color: 'red', float: 'right', cursor: 'pointer', marginRight: '10px' }}>Delete</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;