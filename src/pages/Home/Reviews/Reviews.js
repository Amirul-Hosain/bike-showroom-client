import { Container, Rating } from '@mui/material';
import './Reviews.css';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Whirligig from 'react-whirligig'


import AOS from "aos";
import "aos/dist/aos.css";


const Reviews = () => {
    const [reviews, setRiviews] = useState([]);
    let whirligig
    const next = () => whirligig.next()
    const prev = () => whirligig.prev()

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
        <div style={{ marginTop: '150px' }}>
            <Container style={{ width: '75%', margin: 'auto' }}>
                <h2 style={{ fontSize: '35px', color: 'rgb(34, 172, 57)', marginBottom: '25px' }}>Our client says</h2>
                <div>
                    <Whirligig
                        visibleSlides={3}
                        gutter="1em"
                        ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
                    >
                        {
                            reviews.map(review => <Grid
                                className="review-container"
                                key={review._id}
                            >
                                <div data-aos="fade-up-left">
                                    <Grid>
                                        <h4>{review.name}</h4>
                                        <p>{review.message}</p>
                                        <Rating
                                            name="read-only"
                                            value={review.rete}
                                            readOnly />
                                    </Grid>
                                </div>
                            </Grid>)
                        }
                    </Whirligig>
                </div >
            </Container >

        </div >


    );
};

export default Reviews;