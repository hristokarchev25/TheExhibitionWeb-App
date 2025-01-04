import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import InfoSection from '../components/InfoSection/InfoSection';
import { quizInfoObj } from '../components/InfoSection/Data';
import Questions from '../components/QuizComponents/Questions';
import Footer from '../components/Footer/Footer';

import { auth } from '../utils/firebase';

function QuizPage() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    return (
        <>
            <Navigation email={user?.email} isAuth={Boolean(user)} />
            <InfoSection {...quizInfoObj} />
            <Questions />
            <Footer />
        </>
    )
}

export default QuizPage