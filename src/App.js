import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
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
import Signin from './components/signPages/Signin';
import Signup from './components/signPages/Signup';

function App() {
  const [cartArr,setCartArr] = useState(()=>{
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  });
  const [finalPrice,setFinalPrice] = useState(()=>{
    const price = localStorage.getItem("finalPrice");
    return price ? JSON.parse(price) : 0;
  });
  const [currentProduct,setCurrentProduct] = useState(()=>{
    const product = localStorage.getItem("currentProduct");
    return product ? JSON.parse(product) : {};
  });
  const [currentUser,setCurrentUser] = useState(()=>{
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : {};
  });
  const [users,setUsers] = useState(()=>{
    const usersArr = localStorage.getItem("users");
    return usersArr ? JSON.parse(usersArr) : [];
  });
  const [connected,setConnected] = useState(()=>{
    const connection = localStorage.getItem("connected");
    return connection ? JSON.parse(connection) : false;
  });
  const [alertFlag,setAlertFlag] = useState(false);

  useEffect(() => {
    try{
        localStorage.setItem("cart", JSON.stringify(cartArr));
        localStorage.setItem("finalPrice", JSON.stringify(finalPrice));
        localStorage.setItem("currentProduct", JSON.stringify(currentProduct));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("connected", JSON.stringify(connected));
        
        // localStorage.removeItem("cart");
        // localStorage.removeItem("finalPrice");
        // localStorage.removeItem("currentProduct");
        // localStorage.removeItem("currentUser");
        // localStorage.removeItem("users");
        // localStorage.removeItem("connected");
    }
    catch(error){
        console.error("Error fetching data from local storage:\n",error);
        return alert("Something went wrong, try reload the page");
    }
}, [cartArr,finalPrice,currentProduct, currentUser, connected, users]);
  


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar data={data} cart={cartArr} setCurrentProduct={setCurrentProduct} connected={connected} setConnected={setConnected} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Routes>
          {/* באופן כללי תמיד נתיב ההתחלה שלנו יהיה /, ניתן לשנות את זה בpackege json
          בהתאמה כך שהשבילים יהיו תואמים אחד את השני במידה ונרצה לאתחל את האתר מנתיב אחר כמו שמוצג*/}
          <Route path="/online_shop" element={<Home data={data} setCurrentProduct={setCurrentProduct}/>}/>
          <Route path="/online_shop/products" element={<Categories data={data} cartArr={cartArr} setCartArr={setCartArr} CartItem={CartItem} finalPrice={finalPrice} setFinalPrice={setFinalPrice} setCurrentProduct={setCurrentProduct}connected={connected} alertFlag={alertFlag} setAlertFlag={setAlertFlag}/>}/>
          <Route path="/online_shop/branch_and_activity_hours" element={<Branches data={data}/>}/>
          <Route path="/online_shop/jobs" element={<Jobs data={data}/>}/>
          <Route path="/online_shop/helpdesk" element={<HelpDesk data={data}/>}/>
          <Route path="/online_shop/payment" element={<Payment data={data} arr={cartArr} setCartArr={setCartArr} finalPrice={finalPrice} setFinalPrice={setFinalPrice}/>}/>
          <Route path="/online_shop/products/:name" element={<ProductPage currentProduct={currentProduct} cartArr={cartArr} setCartArr={setCartArr} CartItem={CartItem} finalPrice={finalPrice} setFinalPrice={setFinalPrice} alertFlag={alertFlag} setAlertFlag={setAlertFlag} connected={connected}/>}/>
          <Route path='/online_shop/signin' element={<Signin setConnected={setConnected} setCurrentUser={setCurrentUser} users={users}/>}/>
          <Route path='/online_shop/signup' element={<Signup setUsers={setUsers} users={users}/>}/>
        </Routes>
        <SubAdv data={data}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
