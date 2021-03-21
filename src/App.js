import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from "./components/header/"
import Portfolio from "./components/portfolio/";
import Contact from './components/contact/';
import Services from './components/services/';




function App() {
  const [ portfolioData, setData ] = useState({});
  const dataUrl = './portfolioData.json'


  useEffect(() => {
    const loadData = () => {
      axios.get(dataUrl).then(response => {
        setData(response.data);
      });
    }
    loadData();
  }, [dataUrl] );
  

  return (
    <div className="App">
      <header>
        <Header />
        <Services />
        <Portfolio data={portfolioData.portfolio} />
      </header>
      <Contact />
    </div>
  );

}

export default App;
