import React from 'react';
import { NavLink } from 'react-router-dom';
import bikeLogo from '../../../../src/images/logo/bike-logo.png'
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container container-fluid">
                <img width='100' height='80' src={bikeLogo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products'>Products</NavLink>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '10px' }}>
                            <NavLink to='/about'>About us</NavLink>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '10px' }}>
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                        </li>
                        {user?.email ? <li className="nav-item " style={{ marginLeft: '10px' }}>
                            <button onClick={handleLogOut}>Log out</button>
                        </li>
                            :
                            <li className="nav-item " style={{ marginLeft: '10px' }}>
                                <NavLink to='/login'>Login</NavLink>
                            </li>
                        }
                        <p>{user.displayName}</p>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;