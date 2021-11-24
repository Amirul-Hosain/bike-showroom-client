import React, { useEffect, useState } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import bikeLogo from '../../../../src/images/logo/bike-logo.png'
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, handleLogOut } = useAuth();
    const [orders, setOrders] = useState("");

    useEffect(() => {
        fetch(`https://stormy-coast-38483.herokuapp.com/addOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data)
                console.log(data);
            });
    }, [user?.email]);
    return (
        <nav className="navbar navbar-expand-lg navbar-light navigation-container">
            <div className="container container-fluid">
                <div><img width='100' height='80' src={bikeLogo} alt="" /></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ marginLeft: '20%' }}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <NavLink
                                    style={{
                                        color: 'rgb(34, 172, 57)', textDecoration: 'none', marginRight: '15px',
                                        fontSize: '20px', fontWeight: '500'
                                    }} to='/home'>Home</NavLink>
                                <NavLink
                                    style={{
                                        color: 'rgb(34, 172, 57)', textDecoration: 'none', marginRight: '15px', fontSize: '20px',
                                        fontWeight: '500'
                                    }} to='/contact'>Contact</NavLink>
                                <NavLink
                                    style={{
                                        color: 'rgb(34, 172, 57)', textDecoration: 'none', marginRight: '15px',
                                        fontSize: '20px', fontWeight: '500'
                                    }} to='/about'>About us </NavLink>
                                {user.email &&
                                    <NavLink style={{ color: 'rgb(34, 172, 57)', textDecoration: 'none', marginRight: '10px', fontSize: '20px', fontWeight: '500' }} to='/dashboard'>Dashboard</NavLink>}
                            </ul>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <i class="fas fa-shopping-cart"></i>
                            <p>{orders.length}</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            {user.email && <p style={{ color: 'rgb(34, 172, 57)', fontSize: '20px', marginRight: '10px' }}>{user.displayName}</p>}
                            {user?.email ?
                                <button className='login-out' style={{ height: '30px' }} onClick={handleLogOut}>Log out</button>
                                :
                                <NavLink className='login-out' to='/login'>Login</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;