import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [review, setReview] = useState({});


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }
    const handleReviewSubmit = e => {
        fetch('https://stormy-coast-38483.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thanks for your review!!')
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Review us</h2>
            <form onSubmit={handleReviewSubmit} className='w-50 m-auto pt-4 '>
                <input
                    onBlur={handleOnBlur}
                    type="number"
                    name='rete'
                    className="form-control"
                    placeholder="Rate us" />
                <input
                    onBlur={handleOnBlur}
                    type="text"
                    name='email'
                    defaultValue={user.email}
                    className="form-control" />
                <textarea
                    onBlur={handleOnBlur}
                    type="text"
                    name='message'
                    className="form-control"
                    placeholder="Your feedback" />
                <button type="submit" className="btn btn-primary">Send</button>

            </form>
        </div>
    );
};

export default Review;