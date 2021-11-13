import { Container, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

const Reviews = () => {
    const [reviews, setRiviews] = useState([]);

    useEffect(() => {
        fetch('https://stormy-coast-38483.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setRiviews(data))
    }, [])
    return (
        <div style={{ marginTop: '150px' }}>
            <Container style={{ width: '75%', margin: 'auto' }}>
                <h2 style={{ fontSize: '35px', color: 'rgb(34, 172, 57)', marginBottom: '25px' }}>Our client says</h2>
                <Grid container spacing={2}>
                    {
                        reviews.map(review => <Grid item xs={12} sm={6} md={4}
                            key={review._id}
                        >
                            <Grid style={{ width: '300px', border: '1px solid rgb(95, 204, 95)', padding: '20px 10px' }}>
                                <h4>{review.email}</h4>
                                <p>{review.message}</p>
                                <Rating
                                    initialRating={review.rate}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly>
                                </Rating>
                            </Grid>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Reviews;