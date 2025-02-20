import React, { useEffect, useState } from 'react';
import '../CSS/home.css';
import ArticleSlider from '../advertisments/ArticleSlider';

export default function Home({data, setCurrentProduct}) {

    const [place,setPlace] = useState(0);
    const headers = ["Laptop sales","TV sales","Phone sales"];
    useEffect(()=>{
      const placeChanger = setInterval(() => {
        setPlace((place+1)%3)
      }, 3500);
      return ()=>clearInterval(placeChanger);
    });

    const articleSlidersDeploy = ()=>{
      return data.sales.map((category, inx) => {
              return (
                <div key={`articleSlider_container_${inx}`} className='articleSliders_mainDiv'>
                  <h2 key={`articleSlider_h2_${inx}`} className='articleSliders_header'>{headers[inx]}</h2>
                  <ArticleSlider key={`articleSlider_${inx}`} articles={category} header={headers[inx]} setCurrentProduct={setCurrentProduct}/>
                </div>
              );
      });
    }


  return (
    <div id='homeMainDiv'>
        <h1 style={{margin:"50px auto"}} dir='rtl'>ברוכים הבאים ל- TechSonic!</h1>
        <div id='advertismentMainDiv'>
            <img id='advertismentSlider' src={data.advertisments[1][place]} alt="main_advertisments" width={200} height={200}/>
        </div>
        <h2 dir='rtl' id='home_salesHeader'>מה חדש אצלנו?</h2>
        <div id='home_salesContainer'>
          {articleSlidersDeploy()}
        </div>
    </div>
  )
}
