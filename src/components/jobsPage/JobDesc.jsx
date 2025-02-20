import React from 'react';
import "../CSS/jobDesc.css";

export default function JobDesc({description, uniqePref, inx}) {

    const deployPref=()=>{
        return uniqePref.map((line)=>{
            if(line.charAt(0) === "-" && line.charAt(line.length-1) === "-"){
                return <h2 className='descLine_h2' dir='rtl'>{line}</h2>
            }
            if(line.includes(":")){
                return <h3 className='descLine_h3' dir='rtl'>{line}</h3>
            }
            return <p className='descLine_p' dir='rtl'>{line}</p>
        })
    }
  return (
    <div id={`jobID_${inx}`} className='descDiv'>
        {deployPref()}
    </div>
  )
}
