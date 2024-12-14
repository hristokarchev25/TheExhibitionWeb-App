import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import InfoSection from '../components/InfoSection/InfoSection';
import { suzanneObj, adamAndEveObj } from '../components/InfoSection/Data';
import Footer from '../components/Footer/Footer';

import { auth } from '../utils/firebase';

function SuzannePage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <>
      <Navigation email={user?.email} isAuth={Boolean(user)} />
      <InfoSection {...suzanneObj} />
      <InfoSection {...adamAndEveObj} />
      <Footer />
    </>
  )
}

export default SuzannePage;