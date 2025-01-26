import React, { Component } from 'react'
let banner = require('./../../images/slider-icon.png')

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='titles'>
          <h1>Art Factory is free<br /><strong className='h1plus'>for you!</strong></h1>
          
          <p>This template is available for 100% free of charge on TemplateMo. Download, modify and use this for your business website.</p>
          <button>find out more</button>
        </div> 
        <div className='titles'>
          <img src={banner} alt='banner' className='banner'/>
        </div>       
      </div>
    )
  }
}
