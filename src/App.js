import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import EngagementModels from './components/EngagementModels';
import CaseStudies from './components/CaseStudies';
import Clients from './components/Clients';
import VisionMission from './components/VisionMission';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2 className="gradient-text">AIONSI</h2>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <WhyChooseUs />
      <Services />
      <EngagementModels />
      <CaseStudies />
      <Clients />
      <VisionMission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 