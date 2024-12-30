import { useNavigate, useParams } from 'react-router-dom';
import React,{ useState} from 'react';
import '../CSS/navbar.css';


export default function Navbar({ data, cart, setCurrentProduct }) {
  const [searchData,setSearchData] = useState("");
  const nav = useNavigate();
  const params = useParams();

  const btnWidth = 100/data.navBtns.length;
  const deployBtns=()=>{
    return data.navBtns.map((val,inx)=>{
      return <button dir='rtl' style={{width:`${btnWidth}%`}} className="navBtns" onClick={()=>{
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
    nav(`/jason's_website/products/${params.name}`);
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
      return item.name.includes(searchData);
    })
    return filtered.map(item =>{
      return <p className='searchResultRow' onClick={()=>{moveToProductPage(item)}}>{item.name}</p>
    })
  }

  
  return (
    <div id='navbarMainDiv'>
      <div id='navbarUpperDiv'>
        <div id='navbarUpperDiv_right'>
          <img src={data.logos.logo1} alt="TechSonic_logo" id='navbarLogo' onClick={()=>{nav(data.navBtns[0].link)}}/>
        </div>
        <div id='navbarUpperDiv_middle'>
          <input type="text" className='searchbar_input' placeholder='Search...' onChange={(e)=>{setSearchData(e.target.value)}}/>
          <div className='dynamicResultList'>
            {renderSearch()}
          </div>

        </div>
        <div id='navbarUpperDiv_left'>
          <a href='https://wa.me/972507170101?text=[message-url-encoded]' target='_blank' rel='noreferrer' className='navbarSocialBtns'><img id='whatsapp' src={data.media[0].whatsappLogo} alt="whatsapp_button" /></a>
          <a href='https://www.bing.com/ck/a?!&&p=ce4010a74468b8f0JmltdHM9MTcwNTk2ODAwMCZpZ3VpZD0xYTBjNzNjZC1mZjkzLTY3MjQtMWQyNi02MDBlZmVkMTY2ZWEmaW5zaWQ9NTE2NA&ptn=3&ver=2&hsh=3&fclid=1a0c73cd-ff93-6724-1d26-600efed166ea&psq=instagram&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8&ntb=1' target='_blank' rel='noreferrer' className='navbarSocialBtns'><img id='instagram' src={data.media[0].instagramLogo} alt="instagram_button" /></a>
          <div id='cartDiv'>
            <img onClick={()=>{nav("/jason's_website/payment")}} className='navbarSocialBtns' id='cart' src={data.media[0].cartLogo}alt="shopping_cart_button" />
            {counter(cart)}
          </div>
        </div>
      </div>
      <div id='navbarLowerDiv'>
        {deployBtns()}
      </div>
    </div>
  )
}
