import React from 'react'
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
import pintester_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'
import './Footer.css'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-log">
            <img src={footer_logo} alt="" />
            <p>Pinky Fashion</p>
        </div>
        <ul className="footer-links">
            <li>Compony</li>
            <li>Products</li>
            <li>Officers</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>

        </div>
        <div className="footer-copyright">
            <hr />
            <p>Coppyright @2025 - All Right Reserve</p>
        </div>
    </div>
  )
}
