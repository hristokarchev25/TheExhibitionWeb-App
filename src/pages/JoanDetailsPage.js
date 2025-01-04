import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import JoanDetails from '../components/DetailsComponents/JoanDetails';
import Footer from '../components/Footer/Footer';

import { auth } from '../utils/firebase';

function JoanDetailsPage() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    return (
        <>
            <Navigation email={user?.email} isAuth={Boolean(user)} />
            <JoanDetails />
            <Footer />
        </>
    )
}

export default JoanDetailsPage