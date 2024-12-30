import React,{ useState } from 'react';
import '../CSS/productComponent.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductComponent({ data, inx, val, cartArr, setCartArr, CartItem, finalPrice, setFinalPrice, setCurrentProduct }) {
    const [isHovered, setIsHovered] = useState(false);
    const [description, setDescription] = useState('');
    const params = useParams();
    const nav = useNavigate();


    // function for adding the products to the cart
    const addToCart=(name,price)=>{
        setFinalPrice(finalPrice+price)
        if(cartArr.length===0){
            const item = new CartItem(name,price)
            setCartArr([...cartArr,item])
        }
        else if(cartArr.length!==0){
            for(let i=0;i<cartArr.length;i++){
                if(cartArr[i].name.includes(name)){
                    return cartArr[i].count();
                }
                else if(!cartArr[i].name.includes(name)&&!cartArr[cartArr.length-1].name.includes(name)){
                    const item = new CartItem(name,price)
                    return setCartArr([...cartArr,item])
                }
            }
        }
    }

    // when the mouse hover the "i" sign returns a description div
    const handleMouseEnter = () => {
      setIsHovered(true);
      setDescription(val.desc);
    };
    // when the mouse leave the "i" sign the div dissapear
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const moveToProductPage=()=>{
        params.name = val.name;
        setCurrentProduct(val);
        nav(`/jason's_website/products/${params.name}`);
        window.scrollTo({
            top:0,
            'behavior':'smooth'
        });
    }


  return (
    <div className='productComp_mainContainer' key={`productComponentKey_${inx}`}>
        <div id={`moreInfo_${inx}`} className='moreInfo' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>i</div>
        <div>
            {isHovered &&(
            <div dir='rtl'
            style={{
                position: 'absolute',
                top: 50,
                right: 0,
                backgroundColor: 'white',
                padding: '30px',
                border: '1px solid gray',
                borderRadius: '10px',
                zIndex:10000,
                }}
            >
                {description}
            </div>)}
        </div>
        <div className='productComp_subContainer'>
            <img onClick={()=>{moveToProductPage()}} className='productComp_logo' src={val.image} alt="product_image"/>
            <p className='productComp_name'>{val.name}</p>
            <div className='productComp_priceDiv'>
                <img className='productComp_cartBtn' src={data.media[0].addToCart} alt="add_to_cart_button" onClick={()=>{addToCart(val.name,val.price)}}/>
                <h4 className='productComp_price'>₪{val.price} :price</h4>
            </div>
        </div>
    </div>
  )
}
