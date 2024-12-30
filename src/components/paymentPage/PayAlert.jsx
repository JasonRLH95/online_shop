import React from 'react';
import '../CSS/payAlert.css';

export default function PayAlert({pay, setPayAlertFlag }) {
  return (
    <div className='alertBeforePay'>
            <h1 className='alertBeforePay_h1'>Just to make sure...</h1>
            <h2 className='alertBeforePay_h2'>Are you sure?</h2>
            <div>
                <button className='alertBeforePay_btn' onClick={()=>{pay()}}>Yes</button>
                <button className='alertBeforePay_btn' onClick={()=>{setPayAlertFlag(false)}}>No</button>
            </div>
    </div>
  )
}
