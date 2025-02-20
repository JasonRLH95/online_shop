import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logo({ data }) {
    const nav = useNavigate();
  return (
    <div id='navbarUpperDiv_right'>
          <img src={data.logos.logo1} alt="TechSonic_logo" id='navbarLogo' onClick={()=>{nav(data.navBtns[0].link)}}/>
        </div>
  )
}
