import React from 'react';
import '../CSS/branchComponents.css';


export default function BranchComponent({data, city, address, week, hours}) {

    // idea: try to add an option that when client click on the city name it's transfer him directly to search that city on google
    
    
  return (
    <div className='branch'>
        <div className='cityHeaderDiv'>
            <h3
            //  onClick={()=>{searchOnGoogle(props.city)}} 
             dir='rtl' className='cityHeader'>{city}</h3>
        </div>
        <div className='addressDiv'>
            <img className='branchesLocationLogo' src={data.media[0].locationLogo} alt="location_logo" />
            <h4 dir='rtl' className='addressHeader'>{address}</h4>
        </div>
        <div className='hoursDiv'>
            <div className='hoursHeader'>
                <img className='branchesClockLogo' src={data.media[0].clockLogo} alt="clock_logo" />
                <p className='hoursP1' dir='rtl'>שעות פעילות:</p>
            </div>
            <div className='hoursDescription'>
                <p className='hoursP2' dir='rtl'>ימי {week[0]}-{week[4]}: {hours}</p>
                <p className='hoursP2' dir='rtl'>{week[5]}-{week[6]}: סגור</p>
            </div>
        </div>
    </div>
  )
}
