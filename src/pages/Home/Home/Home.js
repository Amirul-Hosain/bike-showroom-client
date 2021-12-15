import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Share/Footer/Footer';
import Navigation from '../../Share/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import ImageSlider from '../ImageSlider/ImageSlider';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <ImageSlider></ImageSlider>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;