import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();


const Cardano = (props) => {
    const [cardano, setCardano] = useState({});
    
    const fetchPrice = async () => {
        let data = await CoinGeckoClient.coins.fetch('cardano', {});
        const price = data.data.market_data.current_price
        setCardano(price);
      };
    
    useEffect(() => fetchPrice(), []);

    const mrWorldwide = cardano;

    return <>
    <div className="arrange">
        <h1>Cardano (ADA)</h1>
      <div className="container"> 
        <div className="card">
          <div className="content">
            <h2>USD</h2>
            <div className="usaCurrency">USD/ADA</div>
            <div className="USDprice">$ {mrWorldwide.usd}</div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>GBP</h2>
            <div className="usaCurrency">GBP/ADA</div>
            <div className="USDprice">£ {mrWorldwide.gbp}</div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>EUR</h2>
            <div className="usaCurrency">EUR/ADA</div>
            <div className="USDprice">€ {mrWorldwide.eur}</div>
          </div>
        </div>
      </div>
  </div>
    </>
}

export default Cardano;