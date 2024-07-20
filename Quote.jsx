import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <blockquote>
            <p>"{quote.content}"</p>
            <footer>- {quote.author}</footer>
          </blockquote>
          <button onClick={fetchQuote}>Get New Quote</button>
        </div>
      )}
    </div>
  );
};

export default Quote;
