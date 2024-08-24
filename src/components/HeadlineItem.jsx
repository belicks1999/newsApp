import React from 'react';

function HeadlineItem({ headlines }) {
  const { title, source, author, publishedAt, description, url, urlToImage } = headlines;

  return (
    <div className="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      <a href={url} 
      target="_blank" >
        <img className="rounded-t-lg h-60" src={urlToImage} alt={title} />
      </a>
      <div className="p-5 flex flex-col flex-grow">
        <a href={url} target='_blank'>
          <h5 className="mb-2 text-lg lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">{description}</p>
        
        
        <div className="mt-auto">
          <p className="mt-2 text-sm text-gray-300">By {author || 'Unknown Author'}</p>
          <p className="mt-1 mb-2 text-sm text-gray-400">{new Date(publishedAt).toISOString().split('T')[0]}</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeadlineItem;
