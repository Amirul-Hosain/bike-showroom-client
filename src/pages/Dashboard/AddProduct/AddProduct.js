import React, { useState } from 'react';


const AddProduct = () => {
    const [productData, setProductData] = useState({});


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...productData };
        newProduct[field] = value;
        setProductData(newProduct);
    }
    const handleProductSubmit = e => {
        fetch('https://stormy-coast-38483.herokuapp.com/products', {
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

    return (
        <div style={{ height: '100vh' }}>
            <h2 style={{ textAlign: 'center', margin: '20px 0px' }}>Add Product</h2>
            <form onSubmit={handleProductSubmit} className='w-50 m-auto pt-4 '>
                <input
                    type='url'
                    name='image'
                    onBlur={handleOnBlur}
                    placeholder='Image url'
                />
                <input
                    style={{ marginTop: '10px' }}
                    onBlur={handleOnBlur}
                    type="text"
                    name='productName'
                    className="form-control"
                    placeholder='Product Name' />
                <input
                    style={{ marginTop: '10px' }}
                    onBlur={handleOnBlur}
                    type="text"
                    name='price'
                    className="form-control"
                    placeholder="Price" />
                <textarea
                    style={{ marginTop: '10px' }}
                    onBlur={handleOnBlur}
                    type="text"
                    name='description'
                    className="form-control"
                    placeholder="Description" />
                <button
                    style={{
                        padding: '5px 20px', marginTop: '10px', border: 'none', backgroundImage: 'linear-gradient( to right, tomato, orange)',
                        borderRadius: '2px',
                    }}
                    type="submit">Add to Products</button>

            </form>
        </div>
    );
};

export default AddProduct;