import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import React from 'react';
import './Contact.css'

import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'


mapboxgl.accessToken = 'pk.eyJ1IjoiYW1pcnVsLWhvc2FpbiIsImEiOiJja3YwZzhzb3EwaGY2MnJscDZwNWY0cjI4In0.FGWI678fi4DiYa9aVv1jXg';


const Contact = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [89.651970, 23.754080],
            zoom: 10
        });
    }, [])
    return (
        <div className='contact-container'>
            <Container>
                <h2 style={{ textAlign: 'center', paddingBottom: '100px' }}>Always Connect With Us</h2>

                <Grid container spacing={2} style={{ margin: 'auto' }}>

                    <Grid xs={12} md={6} style={{ marginRight: '30px' }}>
                        <div id="map"></div>
                    </Grid>

                    <Grid xs={12} md={5} className='contact-form'>
                        <div style={{ margin: '30px 0px' }}>
                            <h2>Send Your Message</h2>
                            <p>Drop a message and we will get back to you soon!</p>
                        </div>
                        <form >
                            <div className='d-flex name-email'>
                                <div className="mb-3 me-2  w-50%">
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div className="mb-3 w-50% ">
                                    <input type="text" placeholder="Email" />
                                </div>
                            </div>

                            <input style={{ width: '415px', padding: '12px 10px', border: ' 1px solid rgb(199, 199, 199)', borderRadius: '5px' }} type="text" placeholder='Which Product Do you Need...' id="exampleInputPassword1" />

                            <textarea style={{ border: ' 1px solid rgb(199, 199, 199)', padding: '10px 10px', borderRadius: '5px', width: '415px', height: '80px ', marginTop: '20px' }} placeholder='Write your description...' aria-label="With textarea"></textarea>

                            <button type="submit" className="contact-button">Send <i class="far fa-paper-plane"></i></button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contact;