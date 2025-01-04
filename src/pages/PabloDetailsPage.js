import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import PabloDetails from '../components/DetailsComponents/PabloDetails';
import Footer from '../components/Footer/Footer';

import { auth } from '../utils/firebase';

function PabloDetailsPage() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    return (
        <>
            <Navigation email={user?.email} isAuth={Boolean(user)} />
            <PabloDetails />
            <Footer />
        </>
    )
}

export default PabloDetailsPage