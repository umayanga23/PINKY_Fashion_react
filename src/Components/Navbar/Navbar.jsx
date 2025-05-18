import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
import logo from '../Assets/Frontend_Assets/logo.png';
import './Navbar.css';

import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import nav_drpdown from '../Assets/Frontend_Assets/nav_dropdown.png';


const Navbar = ()=> {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e)=> {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
        <div className='nav-logo'>

            <img src={logo} alt="" />
            <p>PINKY FASHION</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_drpdown} alt="" />
        <ul className="nav-menu" ref={menuRef}>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to={'/'}>Shop</Link> {menu ==="shop"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to={'/mens'}>Men</Link> {menu ==="mens"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to={'/womens'}>Women</Link> {menu ==="womens"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kidss")}}><Link style={{textDecoration:'none'}} to={'/kidss'}>kidss</Link>  {menu ==="kidss"? <hr/>:<></>}</li>
        </ul>

        <div className="nav-login-cart">
            
            <Link to={'./login'}><button>Login</button></Link>
            <Link to={'./cart'}><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">
              {getTotalCartItems()}
            </div>
        </div>

    </div>
  )
}
export default Navbar;
