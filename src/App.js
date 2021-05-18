import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from "./components/header/"
import Portfolio from "./components/portfolio/";
import Contact from './components/contact/';
import Services from './components/services/';

/*

* Application Information

Header
	Navigation

		fonts-family:
		font-size: 
		color
		color-active
		color-hover
		color-visited

	HeroTextPrimary 
    font-family:
		font-size:
		font-weight:
    color:
    background:
  
  HeroTextSecondary 
  font-family:
  font-size:
  font-weight:
  color:
  background:

    Button1
      color:
      background:
    Button2
      color:
      background:

Body
  header-primary
    font-family
    font-weight:
    color: 
    background:

  header-secondary
    font-family
    font-weight:
    color: 
    background:
  
  paragraph
    font-family
    font-weight:
    color: 
    background:
  
Buttons 
  color:
  background:
  hover
  visited
  link
  focus:  

*/


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
