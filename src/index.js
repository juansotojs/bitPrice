import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const App = () => {
        return <>
        <Navbar />
    </>
}

  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );