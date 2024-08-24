import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import WhyChooseSection from './components/WhyChooseSection/WhyChooseSection';
import Features from './components/Features/Features';


const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhyChooseSection/>
      <Features/>
    </div>
  );
};

export default App;