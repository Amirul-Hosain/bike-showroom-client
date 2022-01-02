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
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
                                <img style={{ margin: 'auto' }} width='320' height='300' src={review.image} alt="" />
                            </div>
                        );
                    })}
                </Slider>
            </div >
        </div>
    );
};

export default ImageSlider;