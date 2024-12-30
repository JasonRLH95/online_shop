import React,{ useState } from 'react';
import '../CSS/categories.css';
import CategoryBtn from './CategoryBtn';
import ProductComponent from './ProductComponent';

export default function Categories({ data, cartArr, setCartArr, CartItem, finalPrice, setFinalPrice, setCurrentProduct }) {

    const [categoryNow,setCategoryNow] = useState("Laptop");
    
    const changeCategoryDisplay=(value)=>{
        setCategoryNow(value); // value => "Laptop" || "TV" || "Phone"
    }


    const categoriesDeploy=()=>{
        //  according to number of categories exists, return buttons to change products
        
        return data.categoriesArr.map((val,inx)=>{
            return <CategoryBtn arr={data.categoriesArr} logo={val.logo} name={val.name} header={val.header} change={changeCategoryDisplay} inx={inx}/>
        })
    }


    const returnCategoryRequested=()=>{
        //  filter products array according to category requested

        const filtered = data.products.filter(val=>{
            return val.category === categoryNow;
        })

        //  then return components for every product at that category

        return filtered.map((val, inx)=>{
            return <ProductComponent data={data} inx={inx} val={val} cartArr={cartArr} setCartArr={setCartArr} CartItem={CartItem} finalPrice={finalPrice} setFinalPrice={setFinalPrice} setCurrentProduct={setCurrentProduct}/>
        });
    }



    // const [isDescPositive,setIsDescPositive] = useState(false);
    // const openDescriptionDiv=()=>{
    //     if(isDescPositive){
    //         return <div id='descriptionDiv'>d</div>
    //     }
    //     else{
    //         return null;
    //     }
    // }
  return (
    <div id='categoriesMainContainer'>
        <div id='categoryBtnsContainer'>{categoriesDeploy()}</div>
        <div id='productsComponentsDiv'>{returnCategoryRequested()}</div>
        {/* {openDescriptionDiv()} */}
    </div>
  )
}
