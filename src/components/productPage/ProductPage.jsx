import React from 'react';
import '../CSS/productPage.css';

export default function ProductPage({ currentProduct }) {
  return (
    <div className='productPage_component'>
        <h1>{currentProduct.name.toUpperCase()}</h1>
        <div className="productPage_container">
            <div className="productPage_rightDetails">
                <img className='productPage_image' src={currentProduct.image} alt={currentProduct.name}/>
                <h2>{currentProduct.name}</h2>
                <h2>₪{currentProduct.price} :price</h2>
            </div>
            <div className="productPage_leftDetails">
                <div className="productPage_logoDiv">
                    <img className='productPage_logoImage' src={currentProduct.company} alt={currentProduct.category} />
                </div>
                <div className="productPage_desc">
                    {currentProduct.desc}
                </div>
            </div>
        </div>
    </div>
  )
}
