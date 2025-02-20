import React, { useEffect, useRef } from 'react';
import "./CSS/messageAlert.css";

export default function MessageAlert({ problem, alertFlag }) {
  const refer = useRef();

  useEffect(()=>{
    if(alertFlag){
      slideIn();
    }
    else if(!alertFlag){
      slideOut();
    }
  },[alertFlag])
  
  const slideIn=()=>{
    const w = window.innerWidth/2 - 200;
    refer.current.style.top = "5px";
    refer.current.style.left = `${w}px`;
    refer.current.style.opacity = "100%";
    window.scrollTo({
      top:0,
      'behavior':'smooth'
    });
  }
  const slideOut=()=>{
    const w = window.innerWidth/2 - 200;
    refer.current.style.top = "-200px";
    refer.current.style.left = `${w}px`;
    refer.current.style.opacity = "0";
  }
  return (
    <div ref={refer} className='messageAlert_container'>
      <h2>Wait a minute...</h2>
      <h3>{problem}</h3>
    </div>
  )
}
