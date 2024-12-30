import React from 'react';
import '../CSS/categoryBtn.css';

export default function CategoryBtn({ logo, name, change, inx }) {


  return (
        <button key={`categoryBtnKey_${inx}`} className='categoryBtn' onClick={()=>{change(name)}}>
            <img key={`categoryBtnImgKey_${inx}`} className='imgtemp' src={logo} alt="test" width={75} height={75}/>
        </button>
  )
}
