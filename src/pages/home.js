import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import About from '../components/About/About';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

function home() {
    return (
        <>
            <Navigation />
            <ImageSlider />
            <About />
            <ContactUs />
            <Footer />
        </>
    )
}

export default home;