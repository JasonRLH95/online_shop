import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Social({ data, counter, cart, connected }) {
  const nav = useNavigate();
    return (
    <div id='navbarUpperDiv_left'>
        <a href='https://wa.me/972507170101?text=[message-url-encoded]' target='_blank' rel='noreferrer' className='navbarSocialBtns'><img id='whatsapp' src={data.media[0].whatsappLogo} alt="whatsapp_button" /></a>
        <a href='https://www.bing.com/ck/a?!&&p=ce4010a74468b8f0JmltdHM9MTcwNTk2ODAwMCZpZ3VpZD0xYTBjNzNjZC1mZjkzLTY3MjQtMWQyNi02MDBlZmVkMTY2ZWEmaW5zaWQ9NTE2NA&ptn=3&ver=2&hsh=3&fclid=1a0c73cd-ff93-6724-1d26-600efed166ea&psq=instagram&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8&ntb=1' target='_blank' rel='noreferrer' className='navbarSocialBtns'><img id='instagram' src={data.media[0].instagramLogo} alt="instagram_button" /></a>
        <div id='cartDiv'>
        {connected && <img onClick={()=>{nav("/online_shop/payment")}} className='navbarSocialBtns' id='cart' src={data.media[0].cartLogo}alt="shopping_cart_button" />}
        {counter(cart)}
        </div>
    </div>
  )
}
