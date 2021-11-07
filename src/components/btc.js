import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();


const Bitcoin = (props) => {
    const [bitcoin, setBitcoin] = useState({});
    
    const fetchPrice = async () => {
        let data = await CoinGeckoClient.coins.fetch('bitcoin', {});
        const price = data.data.market_data.current_price
        setBitcoin(price);
      };
    
    useEffect(() => fetchPrice(), []);

    const mrWorldwide = bitcoin;

    return <>
    <div className="arrange">
    <h1>Bitcoin (BTC)</h1>
      <div className="container"> 
        <div className="card">
          <div className="content">
            <h2>USD</h2>
            <div className="usaCurrency">USD/BTC</div>
            <div className="USDprice">$ {mrWorldwide.usd}</div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>GBP</h2>
            <div className="usaCurrency">GBP/BTC</div>
            <div className="USDprice">£ {mrWorldwide.gbp}</div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>EUR</h2>
            <div className="usaCurrency">EUR/BTC</div>
            <div className="USDprice">€ {mrWorldwide.eur}</div>
          </div>
        </div>
      </div>
  </div>
    </>
}

export default Bitcoin;