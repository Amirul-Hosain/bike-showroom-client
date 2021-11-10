import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';


const Login = () => {
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
            <form onSubmit={handleLoginSubmit} className='w-25 m-auto pt-4 '>
                <div className="mb-3">
                    <input
                        onBlur={handleOnBlur}
                        type="email"
                        name='email'
                        className="form-control"
                        placeholder='Email' />
                </div>
                <div className="mb-3">
                    <input
                        onBlur={handleOnBlur}
                        type="password"
                        name='password'
                        className="form-control"
                        placeholder="Password" />
                </div>
                <p>Don't have an account? <NavLink to='/register'>Registration</NavLink></p>
                <button type="submit" className="btn btn-primary">Login</button>

                {
                    error && <div class="alert alert-danger" role="alert">
                        {error}
                    </div>
                }
            </form>
        </div>
    );
};

export default Login;