import React from 'react';
import Job from './Job';
import '../CSS/jobs.css';

export default function Jobs({data}) {
  const deployJobs=()=>{
    return data.jobs.map((val,inx)=>{
      return <Job data={data} title={val.title} description={val.description} uniqePref={val.uniqePref} days={val.days} inx={inx}/>
    })
  }
  return (
    <div id='jobsComponentMainContainer'>
      <h1 dir='rtl'>דרושים עובדים לחברת TechSonic</h1>
      {deployJobs()}
    </div>
  )
}
