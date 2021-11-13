import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");


    const handleOrderId = (id) => {
        setOrderId(id);
    };

    const onSubmit = (data) => {
        fetch(`https://stormy-coast-38483.herokuapp.com/addOrders/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    useEffect(() => {
        fetch('https://stormy-coast-38483.herokuapp.com/addOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2>this is manage order section.</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ fontSize: '25px' }}>
                            <TableCell style={{ fontSize: '25px' }}>Bike model</TableCell>
                            <TableCell style={{ fontSize: '25px' }} align="center">Email</TableCell>
                            <TableCell style={{ fontSize: '25px' }} align="center">Mobile</TableCell>
                            <TableCell style={{ fontSize: '25px' }} align="center">Address</TableCell>
                            <TableCell style={{ fontSize: '25px' }} align="center">Date</TableCell>
                            <TableCell style={{ fontSize: '25px' }} align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow
                                key={order.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.bikeModel}
                                </TableCell>
                                <TableCell align="center">{order.email}</TableCell>
                                <TableCell align="center">{order.number}</TableCell>
                                <TableCell align="center">{order.address}</TableCell>
                                <TableCell align="center">{order.date}</TableCell>
                                <TableCell align="center">
                                    <form onSubmit={onSubmit}>
                                        <select onClick={() => handleOrderId(orders._id)} >
                                            <option value="pending">Pending</option>
                                            <option value="approve">approve</option>
                                            <option value="done">Done</option>
                                        </select>
                                        <input type="submit" />
                                    </form>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrder;