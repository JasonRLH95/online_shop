import React from 'react';
import '../CSS/categoryBtn.css';
// import products from '../dataSets/products';

export default function CategoryBtn({ arr, logo, name, header, change, inx }) {
    // const categoryLogo=props.logo;
    // const deployLogos=()=>{
    //     return props.arr.map((val,inx)=>{
    //         // console.log()
    //         return <img src={props.logo} alt='category_logo'/>
    //     })
    // }


  return (
        <button key={`categoryBtnKey_${inx}`} className='categoryBtn' onClick={()=>{change(name)}}>
            {/* {deployLogos()} */}
            <img key={`categoryBtnImgKey_${inx}`} className='imgtemp' src={logo} alt="test" width={75} height={75}/>
        </button>
  )
}
