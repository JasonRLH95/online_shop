import React, { useState } from 'react';
import '../CSS/articleSlider.css';

export default function ArticleSlider({ articles }) {
    const [position, setPosition] = useState(0);
    
    const moveLeft = () => {
        setPosition(Math.max(position - 1, 0));
    };
    
    const moveRight = () => {
        setPosition(Math.min(position + 1, Math.ceil(articles.length / 4) - 1));
    };
    
    const ArticleCard = ({ article }) => {
      return (
        <div style={{ margin: '10px',height: '200px' }}>
          <img className='salesImages' src={article.image} alt="sales" />
        </div>
      );
    };


    return (
        <div style={{ width: '90%',height: '300px', margin: 'auto', position: 'relative' }}>
      <div style={{ display: 'flex', overflowX: 'hidden'}}>
        {articles.slice(position * 4, position * 4 + 4).map((article, index) => {
          return (<div className='articleCard' key={index} style={{ width: '25%' }}>
            <ArticleCard article={article} />
          </div>)
        })}
      </div>

      {/* Navigation buttons */}
      <button
        className='articleMovementBtns' 
        onClick={moveLeft}
        disabled={position === 0}
        style={{ position: 'absolute', top: '10px', left: 0 }}>
        {'<'}
      </button>
      <button
        className='articleMovementBtns'
        onClick={moveRight}
        disabled={position === Math.ceil(articles.length / 4) - 1}
        style={{ position: 'absolute', top: '10px', right: 0 }}
      >
        {'>'}
      </button>
    </div>
  );
};
