import React, { useState } from 'react';
import '../CSS/job.css';
import media from '../../dataSets/media';
import JobDesc from './JobDesc';

export default function Job(props) {
  const [isDescOpened,setIsDescOpened] = useState(false);
  
  const openDesc=()=>{
      if(isDescOpened){
          return <JobDesc description={props.description} uniqePref={props.uniqePref} inx={props.inx}/>
      }
      else{
          return null
      }
  }

  return (
    <div className='jobMainDiv'>
      <h5 className='daysCounter'>{props.days} days ago</h5>
      <div className='jobCard'>
          <h2 className='jobCardHeader'>{props.title}</h2>
          <h4 className='jobCardDesc'>{props.description}</h4>
          <img onClick={()=>{setIsDescOpened(!isDescOpened)}} className='jobCardArrow' src={media[0].downArrow} alt="down_arrow" />
      </div>
          {openDesc()}
    </div>
  )
}
