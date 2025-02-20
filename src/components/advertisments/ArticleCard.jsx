import React from "react";
import '../CSS/articleCard.css';
import { useNavigate, useParams } from "react-router-dom";

export default function ArticleCard({ article, setCurrentProduct }) {
    const params = useParams();
    const nav = useNavigate();

    const moveToProductPage=()=>{
      params.name = article.name;
      setCurrentProduct(article);
      nav(`/online_shop/products/${params.name}`);
      window.scrollTo({
          top:0,
          'behavior':'smooth'
      });
    }
    return (
      <div className="articleCard_component">
        <div className="discountDiv">{article.disValue}%</div>
        <img className='salesImages' src={article.image} alt="sales" onClick={()=>{moveToProductPage()}}/>
      </div>
    );
  };