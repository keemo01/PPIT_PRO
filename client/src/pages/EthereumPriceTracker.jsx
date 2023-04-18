import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EthereumPriceTracker = () => {
  const [ethPrice, setEthPrice] = useState('');

  useEffect(() => {
    const fetchEthPrice = async () => {
      const result = await axios(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
      );
      setEthPrice(result.data.ethereum.usd);
    };
    fetchEthPrice();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Ethereum Price Tracker</h1>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-md p-6 flex flex-col items-center">
        <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" alt="Ethereum" className="w-16 h-16 mb-4" />
        <p className="text-2xl font-bold mb-4">${ethPrice}</p>
        <iframe
          src={`https://www.coingecko.com/en/price_charts/ethereum/usd#panel`}
          height="400"
          width="100%"
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          className="border-none"
        ></iframe>
      </div>
    </div>
  );
};

export default EthereumPriceTracker;
