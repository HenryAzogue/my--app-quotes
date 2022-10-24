import React from 'react';

const Button = ( {changeQuotes} ) => {
  return (
    <div className='btn'>
      <button onClick={changeQuotes}>
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  );
};

export default Button;