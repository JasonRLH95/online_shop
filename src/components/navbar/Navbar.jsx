import { useNavigate, useParams } from 'react-router-dom';
import React,{ useState} from 'react';
import '../CSS/navbar.css';
import Social from './Social';
import SearchBar from './SearchBar';
import Logo from './Logo';
import Profile from './Profile';


export default function Navbar({ data, cart, setCurrentProduct, connected, setConnected, currentUser, setCurrentUser }) {
  const [searchData,setSearchData] = useState("");
  const nav = useNavigate();
  const params = useParams();

  const btnWidth = 100/data.navBtns.length;
  const deployBtns=()=>{
    return data.navBtns.map((val,inx)=>{
      return <button key={`navbar_btn_${inx}`} dir='rtl' style={{width:`${btnWidth}%`}} className="navBtns" onClick={()=>{
        window.scrollTo({
          top:0,
          'behavior':'smooth'
      });
        return nav(val.link)}}>{val.btnName}</button>
    });
  }
  const counter=(arr)=>{
    if(arr.length!==0){
      return <div id='counterDiv'>{arr.length}</div>
    }
    else{
      return null;
    }
  }

  const moveToProductPage=(val)=>{
    params.name = val.name;
    setCurrentProduct(val);
    setSearchData("");
    document.querySelector(".searchbar_input").value = "";
    nav(`/online_shop/products/${params.name}`);
    window.scrollTo({
      top:0,
      'behavior':'smooth'
    });
  }

  const renderSearch=()=>{
    if(searchData === ""){
      return;
    }
    const filtered = data.products.filter(item =>{
      return item.name.toLowerCase().includes(searchData.toLowerCase());
    })
    return filtered.map(item =>{
      return <p className='searchResultRow' onClick={()=>{moveToProductPage(item)}}>{item.name}</p>
    })
  }

  
  return (
    <div id='navbarMainDiv'>
      <div id='navbarUpperDiv'>
        <Logo data={data}/>
        <Profile connected={connected} setConnected={setConnected} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <SearchBar renderSearch={renderSearch} setSearchData={setSearchData}/>
        <Social data={data} counter={counter} cart={cart} connected={connected}/>
      </div>
      <div id='navbarLowerDiv'>
        {deployBtns()}
      </div>
    </div>
  )
}
