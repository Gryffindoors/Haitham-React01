import React, { Component } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoRss } from "react-icons/io";
import { IoBasketballOutline } from "react-icons/io5";


export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p>Copyright © 2020 Art Factory Company . Design: <a href="#">TemplateMo</a></p>
        <ul>
            <li><a href="#" className='footerList'><FaFacebookF /></a></li>
            <li><a href="#" className='footerList'><FaTwitter /></a></li>
            <li><a href="#" className='footerList'><FaLinkedin /></a></li>
            <li><a href="#" className='footerList'><IoLogoRss /></a></li>
            <li><a href="#" className='footerList'><IoBasketballOutline /></a></li>
            
        </ul>      
      </div>
    )
  }
}
