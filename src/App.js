import React from 'react';
import './App.css';
import Banner from './app/components/banner';
import Footer from './app/components/footer';
import Navbar from './app/components/navbar';
import Posts from './app/containers/posts';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
