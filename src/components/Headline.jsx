import React, { useState, useEffect } from 'react';
import { fetchHeadline } from '../services/newsService.js';
import HeadlineItem from './HeadlineItem.jsx';

function Headline() {
  const [headline, setHeadline] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHeadlines = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const news = await fetchHeadline();
        setHeadline(news);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch headlines. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getHeadlines();
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div className="text-center text-red-600">{error}</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {headline.map((headlines, index) => (
            <HeadlineItem key={index} index={index} headlines={headlines} />
          ))}
        </div>
      )}
    </div>
  );
}

const LoadingSpinner = () => (
  <div className="w-16 h-16 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
);


export default Headline;
