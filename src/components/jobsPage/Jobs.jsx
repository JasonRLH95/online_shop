import React from 'react';
import jobs from '../../dataSets/jobs';
import Job from './Job';
import '../CSS/jobs.css';

export default function Jobs() {
  const deployJobs=()=>{
    return jobs.map((val,inx)=>{
      return <Job title={val.title} description={val.description} uniqePref={val.uniqePref} days={val.days} inx={inx}/>
    })
  }
  return (
    <div id='jobsComponentMainContainer'>
      <h1 dir='rtl'>דרושים עובדים לחברת TechSonic</h1>
      {deployJobs()}
    </div>
  )
}
