import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="main_banner">
        <Banner />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
