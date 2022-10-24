import React from 'react';
import Button from '../component/Button';

const QuoteBox = ( {index, setIndex, quotes} ) => {

  const changeQuotes = () =>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndex);
  }

  return (
    <div className='quote-box'>
      <p className='quote'>{quotes[index].quote}</p>
      <p className='author'>{quotes[index].author}</p>
      <Button changeQuotes = {changeQuotes}/>   
    </div>
  );
};

export default QuoteBox;