import { Component } from "react";
let banner = require('./../../images/right-image.png')

export default class Section2 extends Component{
    render(){
        return(
            <div className='section2'>
            <div className='titles'>
              <h1>Curabitur aliquam eget tellus id porta</h1>
              <p>This template is available for 100% free of charge on TemplateMo. Download, modify and use this for your business website.</p>
              <button>find out more</button>
            </div> 
            <div className='titles'>
              <img src={banner} alt='banner' className='banner'/>
            </div>       
          </div> 
        )}
        }