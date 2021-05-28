import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from "./components/header/"
import Portfolio from "./components/portfolio/";
import Contact from './components/contact/';
import Services from './components/services/';
import Process from './components/process';
import About from 'components/about';
import Stacks from 'components/stacks';
import CTA from 'components/cta';
import Footer from 'components/footer/'
import Test from 'components/test/';

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
      <header id="header">
        <Header />
      </header>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="portfolio">
        <Portfolio data={portfolioData.portfolio} />
      </section>
      <section id="stacks">
        <Stacks />
      </section>
      <section id="cta">
        <CTA />
      </section >
      <section id="contact">
        <Contact />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
      {/* <Test /> */}
    </div>
  );

}

export default App;
