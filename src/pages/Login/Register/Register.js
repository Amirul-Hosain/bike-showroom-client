import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';


const Register = () => {
    const { user, error, handleCreateAccountWithEmail } = useFirebase()
    const [registerData, setRegisterData] = useState({});
    const [incorrect, setIncorrect] = useState('');
    console.log(registerData);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegister = { ...registerData };
        newRegister[field] = value;
        setRegisterData(newRegister);
        console.log(newRegister);
    }
    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (registerData.password !== registerData.password2) {
            setIncorrect("Password and Retype Password doesn't matched");
            return
        }

        handleCreateAccountWithEmail(registerData.email, registerData.password, registerData.name);
    }
    return (
        <div>
            <form onSubmit={handleRegisterSubmit} className='w-25 m-auto pt-4 '>
                <div className="mb-3">
                    <input
                        onBlur={handleOnBlur}
                        type="text"
                        name='name'
                        className="form-control"
                        placeholder='Name' />
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
                    <input
                        onBlur={handleOnBlur}
                        type="password"
                        name='password2'
                        className="form-control"
                        placeholder="Retype Password" />
                </div>
                <p>Don't have an account? <NavLink to='/login'>Login</NavLink></p>
                <p style={{ color: 'red' }}>{incorrect}</p>
                <button type="submit" className="btn btn-primary">Registration</button>
                {
                    error && <div class="alert alert-danger" role="alert">
                        {error}
                    </div>
                }
            </form>
        </div>
    );
};

export default Register;