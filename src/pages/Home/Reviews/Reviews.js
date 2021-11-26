import { Container, Rating } from '@mui/material';
import './Reviews.css';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import AOS from "aos";
import "aos/dist/aos.css";


const Reviews = () => {
    const [reviews, setRiviews] = useState([]);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    useEffect(() => {
        fetch('https://stormy-coast-38483.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setRiviews(data))
    }, [])
    return (
        <div className='review-comp' style={{ marginTop: '150px', padding: '100px 0px' }}>
            <Container style={{ width: '75%', margin: 'auto' }}>
                <h2 style={{ fontSize: '35px', color: 'white', textAlign: 'center', marginBottom: '80px' }}>Our Client Says</h2>
                <div>
                    <Slider {...settings}>
                        {reviews.map(function (review) {
                            return (
                                <div key={review._id}>
                                    <div style={{ backgroundColor: 'white', padding: '10px 25px', margin: '0px 10px', borderRadius: '5px' }}>
                                        <Grid>
                                            <h4 style={{ borderBottom: '1px solid gray', paddingBottom: '10px' }}>{review.name}</h4>
                                            <p
                                                style={{ fontSize: '18px', marginTop: '25px' }}>
                                                <i style={{ color: 'rgb(167, 169, 198)', marginRight: '5px' }} class="fas fa-quote-left"></i>
                                                {review.message}
                                                <i style={{ color: 'rgb(167, 169, 198)', marginLeft: '5px' }} class="fas fa-quote-right"></i>
                                            </p>
                                            <Rating
                                                name="read-only"
                                                value={review.rete}
                                                readOnly />
                                        </Grid>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>


                </div >
            </Container >

        </div >


    );
};

export default Reviews;