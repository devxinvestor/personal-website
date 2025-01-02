import React from 'react';
import '../../App.css';
import Navbar from '../sections/Navbar';
import Body from '../sections/Body';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Footer from '../sections/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Body />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
