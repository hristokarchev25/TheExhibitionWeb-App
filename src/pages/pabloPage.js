import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import InfoSection from '../components/InfoSection/InfoSection';
import { pabloObj, guernicaObj } from '../components/InfoSection/Data';
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
      <InfoSection {...guernicaObj} />
      <Footer />
    </>
  )
}

export default PabloPage;