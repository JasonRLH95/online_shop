import React from 'react';
import "../CSS/jobDesc.css";

export default function JobDesc({description, uniqePref, inx}) {

    const hasUniqePref=()=>{
        if(uniqePref!=="none"){
            return uniqePref.map((val)=>{
                return <li dir='rtl'>{val}</li>
            })
        }
        else{
            return uniqePref
        }
    }
  return (
    <div id={`jobID_${inx}`} className='descDiv'>
        <ul>
            {hasUniqePref()}
        </ul>
    </div>
  )
}
