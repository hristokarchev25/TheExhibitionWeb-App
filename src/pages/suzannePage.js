import React from 'react'
import Navigation from '../components/Navigation/Navigation';
import About from '../components/About/About';
import InfoSection from '../components/InfoSection/InfoSection';
import { suzanneObj } from '../components/InfoSection/Data';
import Footer from '../components/Footer/Footer';
function suzannePage() {
  return (
    <>
      <Navigation />
      <InfoSection {...suzanneObj} />
      <About />
      <Footer />
    </>
  )
}

export default suzannePage;