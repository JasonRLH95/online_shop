import React from 'react';
import "../CSS/jobDesc.css";

export default function JobDesc(props) {

    const hasUniqePref=()=>{
        if(props.uniqePref!=="none"){
            return props.uniqePref.map((val)=>{
                return <li dir='rtl'>{val}</li>
            })
        }
        else{
            return props.uniqePref
        }
    }
  return (
    <div id={`jobID_${props.inx}`} className='descDiv'>
        <ul>
            {hasUniqePref()}
        </ul>
    </div>
  )
}
