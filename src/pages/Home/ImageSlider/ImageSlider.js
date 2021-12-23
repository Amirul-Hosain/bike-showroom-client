import { Container, Rating } from '@mui/material';
import './ImageSlider.css';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import AOS from "aos";
import "aos/dist/aos.css";



const ImageSlider = () => {
    const [products, setProducts] = useState([]);

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
        fetch('https://stormy-coast-38483.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(5, 16)))
    }, [])
    return (
        <div style={{ backgroundColor: 'gray', padding: '50px 0px', marginTop: '60px' }}>
            <div>
                <Slider {...settings}>
                    {products.map(function (review) {
                        return (
                            <div key={review._id}>
                                <div style={{ backgroundColor: 'white', padding: '10px 25px', margin: '0px 10px', borderRadius: '5px' }}>
                                    <Grid>
                                        <img width='400' height='300' src={review.image} alt="" />
                                    </Grid>
                                </div>
                            </div>
                        );
                    })}
                </Slider>


            </div >

        </div >
    );
};

export default ImageSlider;