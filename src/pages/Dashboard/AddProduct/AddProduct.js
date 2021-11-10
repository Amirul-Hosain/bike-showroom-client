import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import FileBase64 from 'react-file-base64';


const AddProduct = () => {
    const { user, error, handleLoginWithEmail } = useFirebase()
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogin = { ...loginData };
        newLogin[field] = value;
        setLoginData(newLogin);
        console.log(newLogin);
    }
    const handleLoginSubmit = e => {
        handleLoginWithEmail(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleLoginSubmit} className='w-50 m-auto pt-4 '>
                <FileBase64
                    multiple={false}
                    name='image'
                    onBlur={handleOnBlur}
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

                {
                    error && <div class="alert alert-danger" role="alert">
                        {error}
                    </div>
                }
            </form>
        </div>
    );
};

export default AddProduct;