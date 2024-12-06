import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import About from '../components/About/About';

function home() {
    return (
        <>
            <Navigation />
            <ImageSlider />
            <About />
        </>
    )
}

export default home;