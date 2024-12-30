import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import Home from './components/homePage/Home';
import Navbar from './components/navbar/Navbar';
import SubAdv from './components/advertisments/SubAdv';
import Categories from './components/categoriesPage/Categories';
import Branches from './components/branchesPage/Branches';
import Jobs from './components/jobsPage/Jobs';
import HelpDesk from './components/helpdeskPage/HelpDesk';
import Payment from './components/paymentPage/Payment';
import data from './dataSets/data';
import CartItem from './classes/CartItem';
import ProductPage from './components/productPage/ProductPage';

function App() {
  const [cartArr,setCartArr] = useState([]);
  const [finalPrice,setFinalPrice] = useState(0);
  const [currentProduct,setCurrentProduct] = useState("");

  


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar data={data} cart={cartArr} setCurrentProduct={setCurrentProduct}/> {/* כל מה שמחוץ לראוטים יוצג באופן סטטי בעמוד גם כשנעבור בין ראוט לראוט */}
        <Routes>
          {/* באופן כללי תמיד נתיב ההתחלה שלנו יהיה /, ניתן לשנות את זה בpackege json
          בהתאמה כך שהשבילים יהיו תואמים אחד את השני במידה ונרצה לאתחל את האתר מנתיב אחר כמו שמוצג*/}
          <Route path="/Jason's_website" element={<Home data={data}/>}/>
          <Route path="/jason's_website/products" element={<Categories data={data} cartArr={cartArr} setCartArr={setCartArr} CartItem={CartItem} finalPrice={finalPrice} setFinalPrice={setFinalPrice} setCurrentProduct={setCurrentProduct}/>}/>
          <Route path="/jason's_website/branch_and_activity_hours" element={<Branches data={data}/>}/>
          <Route path="/jason's_website/jobs" element={<Jobs data={data}/>}/>
          <Route path="/jason's_website/helpdesk" element={<HelpDesk data={data}/>}/>
          <Route path="/jason's_website/payment" element={<Payment data={data} arr={cartArr} setCartArr={setCartArr} finalPrice={finalPrice} setFinalPrice={setFinalPrice}/>}/>
          <Route path="/jason's_website/products/:name" element={<ProductPage currentProduct={currentProduct}/>}/>
        </Routes>
        {/* {payAlertFlag && <PayAlert pay={pay} setPayAlertFlag={setPayAlertFlag}/>} */}
        <SubAdv data={data}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
