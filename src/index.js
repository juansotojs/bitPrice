import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [intPrices, setIntPrices] = useState([]);
    
    const getPriceInfo = async () => {
      const resp = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const priceInfo = await resp.json();
      setIntPrices(priceInfo);
    }

    useEffect(() => {
      getPriceInfo();
    }, []);

    const mrWorldwide = intPrices.bpi;

    if(mrWorldwide){
        return <div>
        
      <div className="container"> 
        <div className="card">
          <div className="content">
            <h2>USD</h2>
            <div className="usaCurrency">USD/BTC</div>
            <div className="USDprice">$ {mrWorldwide.USD.rate}</div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>GBP</h2>
            <div className="usaCurrency">GBP/BTC</div>
            <div className="USDprice">£ {mrWorldwide.GBP.rate}</div>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>EUR</h2>
            <div className="usaCurrency">EUR/BTC</div>
            <div className="USDprice">€ {mrWorldwide.EUR.rate}</div>
          </div>
        </div>
      </div>
    
  </div>
    } 
    else{
    return <div>
        bitcoin price 
      { 

    }
  </div>
  }
}

  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );