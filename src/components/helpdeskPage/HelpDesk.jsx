import React from 'react';
import '../CSS/helpDesk.css';

export default function HelpDesk({data}) {
  return (
    <div id='helpDesk_mainContainer'>
      <h1 style={{margin:"50px auto"}} dir='rtl'>שירות לקוחות - TechSonic</h1>
      <div id='helpDeskDiv'>
        <h3 dir='rtl'>מוקד התמיכה - 08-1234567</h3>
        <div className="helpDesk_email">
          <h3 dir='rtl'>אימייל - TechSonic@gmail.com</h3>
          <a className='emailIcon_a' href="mailTo:TechSonic@gmail.com?subject=HelpDesk&body=-Write Your Issue Here-"></a>
        </div>
      </div>
    </div>
  )
}
