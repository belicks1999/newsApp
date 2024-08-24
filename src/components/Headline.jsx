import React, { useState, useEffect } from 'react';
import { fetchHeadline } from '../services/newsService.js';
import HeadlineItem from './HeadlineItem.jsx';

function Headline() {
  const [headline, setHeadline] = useState([]);

  useEffect(() => {
    const getHeadlines = async () => {
      const news = await fetchHeadline();
      setHeadline(news);
    };
    getHeadlines();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {headline.map((headlines, index) => (
        <HeadlineItem key={index} index={index} headlines={headlines} />
      ))}
    </div>
  );
}

export default Headline;
