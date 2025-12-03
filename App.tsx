import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ReviewsSection from './components/ReviewsSection';
import Locations from './components/Locations';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-900 bg-soy-cream">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <ReviewsSection />
        <Locations />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;