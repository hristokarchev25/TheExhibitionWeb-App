import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import About from '../components/About/About';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

import { auth } from '../utils/firebase';


function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    return (
        <>
            <Navigation email={user?.email} isAuth={Boolean(user)} />
            <ImageSlider />
            <About />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Home;