import React from "react";
import '../CSS/articleCard.css';

export default function ArticleCard({ article }) {
    return (
      <div className="articleCard_component">
        <img className='salesImages' src={article.image} alt="sales" />
      </div>
    );
  };