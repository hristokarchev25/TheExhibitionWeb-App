import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import ArtShopSlider from '../components/ArtShopSlider/ArtShopSlider';
import ArtShop from '../components/ArtShop/ArtShop';
import Footer from '../components/Footer/Footer';

import { auth } from '../utils/firebase';

function ArtShopPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    return (
        <>
            <Navigation email={user?.email} isAuth={Boolean(user)} />
            <ArtShopSlider />
            <ArtShop />
            <Footer />
        </>
    )
}

export default ArtShopPage