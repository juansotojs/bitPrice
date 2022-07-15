import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*  change multi page functionality to different currencies instead of cryptos
change each page to display a list of multiple coins and info for each corresponding currency */

const App = () => {
        return <>
        <Navbar />
    </>
}

  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );