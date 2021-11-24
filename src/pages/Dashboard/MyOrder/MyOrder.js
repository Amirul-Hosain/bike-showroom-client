import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    const deleteMyOrder = id => {
        const proceed = window.confirm('Are You Sure, You Want to Delete this product?');
        if (proceed) {
            const url = `https://stormy-coast-38483.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully Product.');

                        const remainingOrders = orders.filter(order => orders._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }


    useEffect(() => {
        fetch(`https://stormy-coast-38483.herokuapp.com/addOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data)
            });
    }, [user?.email]);
    return (
        <div>
            <div style={{ display: 'flex' }}>
                {
                    orders.map(order => <div style={{ margin: '0px 20px' }}>
                        <h4>{order.bikeModel}</h4>
                        <p>{order.address}</p>
                        <p>{order.date}</p>
                        <p>{order.status}</p>
                        <p onClick={() => deleteMyOrder(order._id)} style={{ color: 'red', cursor: 'pointer' }}>Delete</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrder;
