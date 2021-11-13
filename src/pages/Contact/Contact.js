import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <Box sx={{ flexGrow: 1 }} className='contact-container'>
            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <div className='contact-title'>
                            <h2>Chat With Us</h2>
                            <p>Drop a message and we will get back to you soon!</p>
                        </div>
                        <form >
                            <div className='d-flex name-email  '>
                                <div className="mb-3 me-2 ">
                                    <label htmlhtmlFor="name" className="w-50 form-label"></label>
                                    <input type="text" name='name' placeholder="Name" aria-label="Username" />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="email" className="w-100 form-label"></label>
                                    <input type="text" name='email' placeholder="Email" aria-label="Username" />
                                </div>
                            </div>

                            <div className=" mb-3 get-service ">
                                <input className=' w-75 ' type="text" placeholder='Which Product Do you Need...' id="exampleInputPassword1" />
                            </div>
                            <div className="input-group">
                                <textarea className="w-75 message" placeholder='Write your description...' aria-label="With textarea"></textarea>
                            </div>
                            <button type="submit" className="contact-button">Send <i class="far fa-paper-plane"></i></button>
                        </form>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <h2 style={{ margin: '50px 0px 30px 0px' }}>Contact us</h2>
                        <p><i class="fas fa-map-marker-alt"></i> Kochukhet 21, Mirpur-10,  Dhaka, Bangladesh</p>
                        <p><i class="fas fa-phone"></i> Phone: 0123456789</p>
                        <p><i class="fas fa-envelope"></i> super@bike.com</p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;