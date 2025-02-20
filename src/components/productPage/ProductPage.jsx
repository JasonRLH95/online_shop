import React, { useState } from 'react';
import '../CSS/productPage.css';
import MessageAlert from '../MessageAlert';

export default function ProductPage({ currentProduct, cartArr, setCartArr, CartItem, finalPrice,setFinalPrice, alertFlag, setAlertFlag, connected }) {
    
    
    const [problem, setProblem] = useState("");
    const discountCalc = parseFloat(currentProduct.price/100) * (100-currentProduct.disValue);

    const addToCart=(name,price)=>{
        if(!connected){
            setAlertFlag(true);
            setProblem("You must sign in first");
            setTimeout(() => {
                setAlertFlag(false);
            }, 4000);
            return;
        }
        var tempPrice = price;
        if(currentProduct.hasDiscount){
            setFinalPrice(finalPrice+discountCalc)
            tempPrice = discountCalc;
        }
        if(!currentProduct.hasDiscount){
            setFinalPrice(finalPrice+price)
            tempPrice = price;
        }
        if(cartArr.length===0){
            const item = new CartItem(name,tempPrice)
            setCartArr([...cartArr,item])
        }
        else if(cartArr.length!==0){
            for(let i=0;i<cartArr.length;i++){
                if(cartArr[i].name.includes(name)){
                    return cartArr[i].count();
                }
                else if(!cartArr[i].name.includes(name)&&!cartArr[cartArr.length-1].name.includes(name)){
                    const item = new CartItem(name,tempPrice)
                    return setCartArr([...cartArr,item])
                }
            }
        }
    }

  return (
    <div className='productPage_component'>
        {!connected && <MessageAlert problem={problem} alertFlag={alertFlag}/>}
        <h1>{currentProduct.name.toUpperCase()}</h1>
        <div className="productPage_container">
            <div dir='rtl' className="productPage_rightDetails">
                <img className='productPage_image' src={currentProduct.image} alt={currentProduct.name}/>
                <h2>{currentProduct.name}</h2>
                {!currentProduct.hasDiscount ? 
                <h2>₪{currentProduct.price} :price</h2> :
                <h2>₪{discountCalc} :price</h2>
                }
                <button className='productPage_addBtn' onClick={()=>{addToCart(currentProduct.name, currentProduct.price)}}>Add To Cart</button>
            </div>
            <div dir='rtl' className="productPage_leftDetails">
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
