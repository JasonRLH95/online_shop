import React, { useState } from 'react';
import '../CSS/articleSlider.css';
import ArticleCard from './ArticleCard';

export default function ArticleSlider({ articles }) {
    const [position, setPosition] = useState(0);
    
    const moveLeft = () => {
        setPosition(Math.max(position - 1, 0));
    };
    
    const moveRight = () => {
        setPosition(Math.min(position + 1, Math.ceil(articles.length / 4) - 1));
    };
    
    const deployArticles=()=>{
      return articles.slice(position * 4, position * 4 + 4).map((article, index) => {
        return (<div className='articleCard' key={index}>
          <ArticleCard article={article} />
        </div>)
      })
    }


  return (
    <div className='articleSlider_component'>
        <div className='articleSlider_container'>
          {deployArticles()}
        </div>

        {/* Navigation buttons */}

        <button className='articleMovementBtns' id='articleMovementBtn_left' onClick={moveLeft} disabled={position === 0}>{'<'}</button>
        
        <button className='articleMovementBtns' id='articleMovementBtn_right' onClick={moveRight} disabled={position === Math.ceil(articles.length / 4) - 1}>{'>'}</button>
    </div>
  );
};
