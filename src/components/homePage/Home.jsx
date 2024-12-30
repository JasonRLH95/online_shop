import React, { useEffect, useState } from 'react';
import '../CSS/home.css';
import ArticleSlider from '../advertisments/ArticleSlider';

export default function Home({data}) {

    const [place,setPlace] = useState(0);
    useEffect(()=>{
      const placeChanger = setInterval(() => {
        setPlace((place+1)%3)
      }, 3000);
      return ()=>clearInterval(placeChanger);
    });

    const articleSlidersDeploy = ()=>{
      return data.sales.map((category) => {
              return (
                <div>
                  <h2>{category[0].header}</h2>
                  <ArticleSlider articles={category}/>
                </div>
              );
      });
    }


  return (
    <div id='homeMainDiv'>
        <h1 dir='rtl'>ברוכים הבאים ל- TechSonic!</h1>
        <div id='advertismentMainDiv'>
            <img id='advertismentSlider' src={data.advertisments[1][place]} alt="main_advertisments" width={200} height={200}/>
        </div>
        <h2 dir='rtl' id='home_salesHeader'>מבצעים</h2>
        <div id='home_salesContainer'>
          {articleSlidersDeploy()}
        </div>
    </div>
  )
}
