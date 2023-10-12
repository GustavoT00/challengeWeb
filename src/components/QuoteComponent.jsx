import React, { useState, useEffect } from 'react';

const QuoteComponent = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/quotes/1')
      .then(response => response.json())
      .then(data => {
        setQuote(data[0].quote);
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div>
      <h1>Breaking Bad Quote</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <blockquote>
          <p>{quote}</p>
        </blockquote>
      )}
    </div>
  );
}

export default QuoteComponent;