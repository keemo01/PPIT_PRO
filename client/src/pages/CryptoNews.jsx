import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=crypto&apiKey=6f119f677014475d9a93920bcaa87ece');
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-10">Crypto News</h1>
      {articles.map((article) => (
        <div key={article.url} className="mb-10">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <h2 className="text-2xl font-bold text-white">{article.title}</h2>
          </a>
          <p className="text-gray-400 mt-2">{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoNews;
