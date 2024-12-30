import React from 'react';
import '../CSS/branchComponents.css';
import media from '../../dataSets/media';
// import { useNavigate } from 'react-router-dom';
// import branches from '../dataSets/branches';


export default function BranchComponent(props) {

    // trying to add an option that when client click on the city name it's transfer him directly to search that city on google
    // for now this kind of way i just did not working, it's transfer me to the location https://jason's_website/branch_and_activity_hours/https://www.google.co.il/search?${city}
    // which might happen because of the current location I'm executing the nav command, need to find how to get rid of that issue

    // const nav=useNavigate();
    // const searchOnGoogle=(city)=>{
    //     nav(`https://www.google.co.il/search?${city}`)
    // }
    
  return (
    <div className='branch'>
        <div className='cityHeaderDiv'>
            <h3
            //  onClick={()=>{searchOnGoogle(props.city)}} 
             dir='rtl' className='cityHeader'>{props.city}</h3>
        </div>
        <div className='addressDiv'>
            <img className='branchesLocationLogo' src={media[0].locationLogo} alt="location_logo" />
            <h4 dir='rtl' className='addressHeader'>{props.address}</h4>
        </div>
        <div className='hoursDiv'>
            <div className='hoursHeader'>
                <img className='branchesClockLogo' src={media[0].clockLogo} alt="clock_logo" />
                <p className='hoursP1' dir='rtl'>שעות פעילות:</p>
            </div>
            <div className='hoursDescription'>
                <p className='hoursP2' dir='rtl'>ימי {props.week[0]}-{props.week[4]}: {props.hours}</p>
                <p className='hoursP2' dir='rtl'>{props.week[5]}-{props.week[6]}: סגור</p>
            </div>
        </div>
    </div>
  )
}
