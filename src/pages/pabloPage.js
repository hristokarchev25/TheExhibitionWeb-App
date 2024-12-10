import React from 'react'
import Navigation from '../components/Navigation/Navigation';
import About from '../components/About/About';
import InfoSection from '../components/InfoSection/InfoSection';
import { pabloObj } from '../components/InfoSection/Data';
import Footer from '../components/Footer/Footer';

function pabloPage() {
  return (
    <>
      <Navigation />
      <InfoSection {...pabloObj} />
      <About />
      <Footer />
    </>
  )
}

export default pabloPage;