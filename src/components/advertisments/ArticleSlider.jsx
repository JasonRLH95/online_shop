import React, { useRef } from 'react';
import '../CSS/articleSlider.css';
import ArticleCard from './ArticleCard';

export default function ArticleSlider({ articles, header, setCurrentProduct }) {


    const containerRef = useRef(()=>{
      var temp = header.replace(" ","_");
      const article = document.querySelector(`#slider_${temp}`);
      return article;
    });
    
    const moveLeft = () => {
      if(containerRef){
        containerRef.current.scrollBy({
          left: -300,
          'behavior':'smooth'
        });
      }
    };
    
    const moveRight = () => {
      if(containerRef){
        containerRef.current.scrollBy({
          left: 300,
          'behavior':'smooth'
        });
      }
    };
    
    const deployArticles=()=>{
      return articles.map((article, index) => {
        return (<div className='articleCard' key={index}>
          <ArticleCard article={article} setCurrentProduct={setCurrentProduct}/>
        </div>)
      })
    }


  return (
    <div className='articleSlider_component'>
        <div ref={containerRef} className='articleSlider_container' id={`slider_${header.replace(" ", "_")}`}>
          {deployArticles()}
        </div>

        {/* Navigation buttons */}

        <button className='articleMovementBtns' id='articleMovementBtn_left' onClick={moveLeft}>{'<'}</button>
        
        <button className='articleMovementBtns' id='articleMovementBtn_right' onClick={moveRight}>{'>'}</button>
    </div>
  );
};
