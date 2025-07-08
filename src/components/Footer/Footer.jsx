import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
    <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, incidunt? Deserunt fuga deleniti omnis quam incidunt hic dolores recusandae, reprehenderit temporibus labore! Porro sed labore vitae molestias officiis id quasi.</p>
        <div className="footer-social-icons">
          <img src={assets.facebook_icon} alt=""/>
          <img src={assets.twitter_icon} alt=""/>
          <img src={assets.linkedin_icon} alt=""/>
        </div>
    </div>
    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
    </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
            <li>+1-234-320-5421</li>
            <li>contact@tomato.com</li>
            </ul>

        </div>
    </div>
        <p className='footer-copyright'>Copyright 2025 Tomato.com-All Right Reserved.</p>
    </div>
  )
}

export default Footer