import React, { useState } from 'react';
import '../CSS/job.css';
import JobDesc from './JobDesc';

export default function Job({data, title, description, uniqePref, days, inx}) {
  const [isDescOpened,setIsDescOpened] = useState(false);
  
  const openDesc=()=>{
      if(isDescOpened){
          return <JobDesc description={description} uniqePref={uniqePref} inx={inx}/>
      }
      else{
          return null
      }
  }

  return (
    <div className='jobMainDiv'>
      <h5 className='daysCounter'>{days} days ago</h5>
      <div className='jobCard'>
          <h2 className='jobCardHeader'>{title}</h2>
          <h4 className='jobCardDesc'>{description}</h4>
          <img onClick={()=>{setIsDescOpened(!isDescOpened)}} className='jobCardArrow' src={data.media[0].downArrow} alt="down_arrow" />
      </div>
          {openDesc()}
    </div>
  )
}
