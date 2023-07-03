import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CarouselContainer from './components/CarouselContainer/CarouselContainer';
import VText from './components/VText/VText';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Plus from './components/Plus/Plus';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
   
    <Navbar />
    <Hero/>
    <CarouselContainer />
    <VText />
    <Plus />
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer />
      {/* <CustomCursor /> */}
  
    
    </>
  );
}

export default App;
