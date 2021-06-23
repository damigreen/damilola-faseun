import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from "./components/header/"
import Portfolio from "./components/portfolio/";
import Contact from './components/contact/';
import Process from './components/process';
import About from 'components/about';
import Stacks from 'components/stacks';
import CTA from 'components/cta';
import Footer from 'components/footer/'
import ServicesNew from 'components/services/ServicesNew';
import PortfolioAll from 'components/portfolio/PortfolioAll';
import Services from './components/services/';
import Test from 'components/test/';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


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
    <Router>
      <Switch>
          <div className="App">
            <Route exact path="/">
            <header id="header">
              <Header />
            </header>
            <section id="about">
              <About />
            </section>
            <section id="services">
              {/* <Services /> */}
              <ServicesNew />
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
            </Route>

            <Route exact path='/portfolio-all'>
              <PortfolioAll data={portfolioData.portfolio} />
            </Route>  
            <section id="contact">
              <Contact />
            </section>

            <footer id="footer">
              <Footer />
            </footer>
            {/* <Test /> */}
          </div>

       
      </Switch>
    </Router>
  );

}

export default App;
