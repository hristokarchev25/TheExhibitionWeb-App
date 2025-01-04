import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import SuzanneDetails from '../components/DetailsComponents/SuzanneDetails';
import Footer from '../components/Footer/Footer';

import { auth } from '../utils/firebase';

function SuzanneDetailsPage() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    return (
        <>
            <Navigation email={user?.email} isAuth={Boolean(user)} />
            <SuzanneDetails />
            <Footer />
        </>
    )
}

export default SuzanneDetailsPage