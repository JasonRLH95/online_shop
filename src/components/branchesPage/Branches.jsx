import React from 'react';
import branches from '../../dataSets/branches';
import BranchComponent from './BranchComponent';
import '../CSS/branches.css';

export default function Branches() {
    const deployBrances=()=>{
        return branches.map((val)=>{
            return <BranchComponent city={val.city} address={val.address} week={val.week} hours={val.hours}/>
        })
    }
  return (
    <div id='branchesMainContainer'>
        <h1 dir='rtl'>הסניפים שלנו</h1>
        <div id='deployedBranchesDiv'>{deployBrances()}</div>
    </div>
  )
}
