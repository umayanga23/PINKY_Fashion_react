import React from 'react'
import exclucive_image from '../Assets/Frontend_Assets/exclusive_image.png'
import './Offers.css'
export const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>
          Exclucive
        </h1>
        <h1>
          Offers For You 
        </h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  )
}
