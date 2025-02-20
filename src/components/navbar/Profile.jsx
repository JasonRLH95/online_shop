import React from 'react';
import "../CSS/profile.css";
import { useNavigate } from 'react-router-dom';
// const def_img = require("../../images/resources/def_img.jpg");

export default function Profile({ connected, setConnected, currentUser, setCurrentUser }) {
    const nav = useNavigate();
    const scrollDown=()=>{
        const navbarGap = window.innerHeight * 0.18;
        const extraGap = 40;// => for centering the form a bit more to client's screen
        window.scrollTo({
            top:navbarGap+extraGap,
            'behavior':'smooth'
        });
    }
  return (
    <div className='profile_container'>
        {connected ? 
        <div className="connected_profile">
            <div className="profile_image"></div>
            <div className="profile_details">
                <div className="profile_name">{currentUser.name}</div>
                {/* <div className="profile_name">f</div> */}
            </div>
            <button className='logout_btn' onClick={()=>{setConnected(false); setCurrentUser(null)}}>Logout</button>
        </div> :
        <div className='disconnected_profile'>
            <button className='signBtns' onClick={()=>{nav("/online_shop/signin"); scrollDown()}}>Sign in</button>
            <button className='signBtns' onClick={()=>{nav("/online_shop/signup"); scrollDown()}}>Sign up</button>
        </div>
        }
    </div>
  )
}
