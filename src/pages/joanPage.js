import React from 'react'
import Navigation from '../components/Navigation/Navigation';
import About from '../components/About/About';
import InfoSection from '../components/InfoSection/InfoSection';
import { joanObj } from '../components/InfoSection/Data';
import Footer from '../components/Footer/Footer';

function joanPage() {
  return (
    <>
      <Navigation />
      <InfoSection {...joanObj} />
      <About />
      <Footer />
    </>
  )
}

export default joanPage;