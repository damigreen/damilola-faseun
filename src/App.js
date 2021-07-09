import React, { useState, useEffect } from 'react';
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
import dataServices from './services/index';
import Project from './components/portfolio/Project';
import Test from 'components/test/';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


function App() {
  const [ portfolioData, setData ] = useState({});  
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    dataServices.getData().then(response => {
      setData(response);
    });

    if (portfolioData.portfolio) {
      setProjects(portfolioData.portfolio.projects)
    }

  }, []);
  

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
              {/* <section id="cta">
                <CTA />
              </section > */}
            </Route>

            <Route exact path='/portfolio-all'>
              <PortfolioAll data={portfolioData.portfolio} />
            </Route>
            
            <section>
              {
                projects.map(p => p.display === true) ?
                <Route path='/:link' render={( { match } ) => {
                  console.log(match.params.link === 'portfolio-all');

                  if (match.params.link === 'portfolio-all') {
                    return (
                      <div></div>
                    )
                  } else
                  return (
                    <Project project={projects.find(p => p.link === match.params.link)}  />
                  )
                }}>
                </Route>
                :
                <Route path='/'>
                  <Project />
                </Route>
              }
            </section>
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
