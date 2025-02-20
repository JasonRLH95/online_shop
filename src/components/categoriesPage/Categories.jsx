import React,{ useState } from 'react';
import '../CSS/categories.css';
import CategoryBtn from './CategoryBtn';
import ProductComponent from './ProductComponent';
import MessageAlert from '../MessageAlert';

export default function Categories({ data, cartArr, setCartArr, CartItem, finalPrice, setFinalPrice, setCurrentProduct, connected, alertFlag, setAlertFlag }) {

    const [categoryNow,setCategoryNow] = useState("Laptop");
    const [problem, setProblem] = useState("");
    
    const changeCategoryDisplay=(value)=>{
        setCategoryNow(value); // value => "Laptop" || "TV" || "Phone"
    }


    const categoriesDeploy=()=>{
        //  according to number of categories exists, return buttons to change products
        
        return data.categoriesArr.map((val,inx)=>{
            return <CategoryBtn logo={val.logo} name={val.name} change={changeCategoryDisplay} inx={inx}/>
        })
    }


    const returnCategoryRequested=()=>{
        //  filter products array according to category requested

        const filtered = data.products.filter(val=>{
            return val.category === categoryNow;
        })

        //  then return components for every product at that category

        return filtered.map((val, inx)=>{
            return <ProductComponent data={data} inx={inx} val={val} cartArr={cartArr} setCartArr={setCartArr} CartItem={CartItem} finalPrice={finalPrice} setFinalPrice={setFinalPrice} setCurrentProduct={setCurrentProduct} connected={connected} alertFlag={alertFlag} setAlertFlag={setAlertFlag} problem={problem} setProblem={setProblem}/>
        });
    }



  return (
    <div id='categoriesMainContainer'>
        {!connected && <MessageAlert problem={problem} alertFlag={alertFlag}/>}
        <div style={{margin:"50px auto"}} id='categoryBtnsContainer'>{categoriesDeploy()}</div>
        <div id='productsComponentsDiv'>{returnCategoryRequested()}</div>
    </div>
  )
}
