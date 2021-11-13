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
        <div>
            <form onSubmit={handleProductSubmit} className='w-50 m-auto pt-4 '>
                <input
                    type='url'
                    name='image'
                    onBlur={handleOnBlur}
                    placeholder='Image url'
                />
                <input
                    onBlur={handleOnBlur}
                    type="text"
                    name='productName'
                    className="form-control"
                    placeholder='Product Name' />
                <input
                    onBlur={handleOnBlur}
                    type="text"
                    name='price'
                    className="form-control"
                    placeholder="Price" />
                <textarea
                    onBlur={handleOnBlur}
                    type="text"
                    name='description'
                    className="form-control"
                    placeholder="Description" />
                <button type="submit" className="btn btn-primary">Add to Products</button>

            </form>
        </div>
    );
};

export default AddProduct;