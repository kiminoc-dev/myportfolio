import React from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import Process from './components/Process';
import ToolStack from './components/ToolStack';
import Portfolio from './components/Portfolio';
import WhyMe from './components/WhyMe';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SharedImageTransition from './components/SharedImageTransition';

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <main>
        <div id="hero-about-container" className="relative w-full">
          <Hero />
          <About />
          <SharedImageTransition />
        </div>
        <TrustSection />
        <Services />
        <Process />
        <ToolStack />
        <Portfolio />
        <WhyMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
