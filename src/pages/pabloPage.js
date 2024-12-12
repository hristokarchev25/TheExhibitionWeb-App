import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import About from '../components/About/About';
import InfoSection from '../components/InfoSection/InfoSection';
import { pabloObj } from '../components/InfoSection/Data';
import Footer from '../components/Footer/Footer';

import { auth } from '../utils/firebase';

function PabloPage() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <>
      <Navigation email={user?.email} isAuth={Boolean(user)} />
      <InfoSection {...pabloObj} />
      <About />
      <Footer />
    </>
  )
}

export default PabloPage;