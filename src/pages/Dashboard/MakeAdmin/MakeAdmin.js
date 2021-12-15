import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleLoginSubmit = e => {
        const user = { email };
        fetch('https://stormy-coast-38483.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess('Admin making successfully!!');
                    console.log(data);
                }
            })

        e.preventDefault();
    }
    return (
        <div style={{ height: '100vh', paddingTop: '5%' }}>
            <form onSubmit={handleLoginSubmit} className='w-50 m-auto pt-4 '>
                <h4 style={{ textAlign: 'center', marginBottom: '30px' }}>Make an Admin</h4>
                <input
                    onBlur={handleOnBlur}
                    type="email"
                    name='email'
                    className="form-control"
                    placeholder='Email'
                />
                <button
                    style={{
                        padding: '5px 20px', marginTop: '10px', border: 'none', backgroundImage: 'linear-gradient( to right, tomato, orange)',
                        borderRadius: '2px',
                    }}
                    type="submit">Make an Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;