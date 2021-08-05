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
        <h1>Bitcoin Price</h1>
        <div className="world"> 
      <div className="USD">
      <div className="usaCurrency">{mrWorldwide.USD.description}</div>
      <div className="USDprice">$ {mrWorldwide.USD.rate} {mrWorldwide.USD.code}</div>
      </div>
      <div className="GBP">
          <div className="usaCurrency">{mrWorldwide.GBP.description}</div>
      <div className="USDprice">£ {mrWorldwide.GBP.rate} {mrWorldwide.GBP.code}</div>
      </div>
      <div className="EUR">
          <div className="usaCurrency">{mrWorldwide.EUR.description}</div>
      <div className="USDprice">€ {mrWorldwide.EUR.rate} {mrWorldwide.EUR.code}</div>
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