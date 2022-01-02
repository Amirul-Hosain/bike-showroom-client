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
            <h2 style={{ textAlign: 'center', paddingBottom: '100px' }}>Always Connect With Us</h2>

            <div className='row container contact-both m-auto'>
                <div className='col-lg-6 col-md-12 col-12'>
                    <div id="map" ></div>
                </div>

                <div className='contact-form col-lg-6 col-md-12 col-12'>
                    <div style={{ margin: '30px 0px' }}>
                        <h2>Send Your Message</h2>
                        <p>Drop a message and we will get back to you soon!</p>
                    </div>
                    <form >
                        <div className='name-email'>
                            <div className="name-field">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="email-field">
                                <input type="text" placeholder="Email" />
                            </div>
                        </div>

                        <input className='need' type="text" placeholder='Which Product Do you Need...' id="exampleInputPassword1" />

                        <textarea className='message' placeholder='Write your description...' aria-label="With textarea"></textarea>
                        <br />
                        <button type="submit" className="contact-button">Send <i class="far fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;