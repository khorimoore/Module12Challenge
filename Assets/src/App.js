import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;