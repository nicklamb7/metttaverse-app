import React from 'react';
import './App.css';
import Banner from './app/components/banner';
import Navbar from './app/components/navbar';
import Posts from './app/components/posts';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Posts />
    </div>
  );
}

export default App;
