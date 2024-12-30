import React,{ useState, useEffect } from 'react';
import '../CSS/subAdv.css';
import advertisments from '../../dataSets/advertisments';

export default function SubAdv() {
  const [place1,setPlace1] = useState(0);
  useEffect(()=>{
    const placeChanger1 = setInterval(() => {
      setPlace1((place1+1)%4)
    }, 2500);
    return ()=>clearInterval(placeChanger1);
  });
  return (
    <div id='subAdv_mainContainer'>
      <img id='subAdv_slider' src={advertisments[0][place1]} alt="" />
    </div>
  )
}
