import React, { useState, useEffect } from 'react';
import Header from "./components/header/"
import './App.scss';
import Portfolio from "./components/portfolio";
import axios from 'axios';



function App() {
  const [ data, setData ] = useState({});
  const dataUrl = './portfolioData.json'


  useEffect(() => {
    axios.get(dataUrl).then(data => {
      setData(data);
    });
  }, [dataUrl] );

  console.log(data);
  return (
    <div className="App">
      <header>
        <Header />
        <Portfolio data={data.data.portfolio} />
      </header>
    </div>
  );
}

export default App;
