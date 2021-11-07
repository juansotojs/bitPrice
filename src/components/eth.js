import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();


const Ethereum = (props) => {
    const [ethereum, setEthereum] = useState({});
    
    const fetchPrice = async () => {
        let data = await CoinGeckoClient.coins.fetch('ethereum', {});
        const price = data.data.market_data.current_price
        setEthereum(price);
      };
    
    useEffect(() => fetchPrice(), []);

    const mrWorldwide = ethereum;

    return <>
    <div className="arrange">
        <h1>Ethereum (ETH)</h1>
      <div className="container"> 
        <div className="card">
          <div className="content">
            <h2>USD</h2>
            <div className="usaCurrency">USD/ETH</div>
            <div className="USDprice">$ {mrWorldwide.usd}</div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>GBP</h2>
            <div className="usaCurrency">GBP/ETH</div>
            <div className="USDprice">£ {mrWorldwide.gbp}</div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>EUR</h2>
            <div className="usaCurrency">EUR/ETH</div>
            <div className="USDprice">€ {mrWorldwide.eur}</div>
          </div>
        </div>
      </div>
  </div>
    </>
}

export default Ethereum;