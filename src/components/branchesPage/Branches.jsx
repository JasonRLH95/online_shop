import React from 'react';
import BranchComponent from './BranchComponent';
import '../CSS/branches.css';

export default function Branches({data}) {
    const deployBrances=()=>{
        return data.branches.map((val)=>{
            return <BranchComponent data={data} city={val.city} address={val.address} week={val.week} hours={val.hours}/>
        })
    }
  return (
    <div id='branchesMainContainer'>
        <h1 style={{margin:"50px auto"}} dir='rtl'>הסניפים שלנו</h1>
        <div id='deployedBranchesDiv'>{deployBrances()}</div>
    </div>
  )
}
