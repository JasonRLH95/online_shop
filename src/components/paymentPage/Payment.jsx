import React,{useState} from 'react';
import '../CSS/payment.css';
import PayAlert from './PayAlert';


export default function Payment({data, arr, setCartArr, finalPrice, setFinalPrice }) {

      const [payAlertFlag,setPayAlertFlag] = useState(false);

 
      const deployCartArr=()=>{
        return arr.map((val)=>{
            return <tr>
              <td className='payment_td'>{val.price}₪</td>
              <td className='payment_td'>{val.amount}</td>
              <td className='payment_td'>{val.name}</td>
            </tr>
        })
      }
      const pay=()=>{
        if(finalPrice === 0){
          return alert(`
            You must first add some product to your cart!\n
            please try again later!`);
        }
        var tempPrice = finalPrice;
        setCartArr([]);
        setFinalPrice(0);
        setPayAlertFlag(false);
        return alert(`
              Thanks for buying with TechSonic!\n
                come back soon!\n
                you've got charged successfully with an amount of:\n
                ₪${tempPrice}`);
      }

  return (
    <div id='payment_mainContainer'>
        <h1 dir='rtl'>עמוד התשלום</h1>
        <div id='ul_mainDiv'>
            <h3 dir="rtl">פירוט מוצרים לתשלום</h3>
            <table className='payment_table'>
              <tr className='payment_tr'>
                <th dir='rtl' className='payment_th'>מחיר ליחידה</th>
                <th dir='rtl' className='payment_th'>כמות</th>
                <th dir='rtl' className='payment_th'>שם המוצר</th>
              </tr>
                {deployCartArr()}

            </table>
            <h3 dir='rtl' className='finalPrice'>סכום סופי: {finalPrice}₪</h3>
            <button className='payBtn' onClick={()=>{setPayAlertFlag(true)}}>Pay</button>
        </div>
      {payAlertFlag && <PayAlert pay={pay} setPayAlertFlag={setPayAlertFlag}/>}
    </div>
  )
}
