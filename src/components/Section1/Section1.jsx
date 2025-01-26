import { Component } from "react";
let banner = require('./../../images/left-image.png')

export default class Section1 extends Component{
    render(){
        return(
            <div className='section1'>
                    <div className='titles' >
                      <img src={banner} alt='banner' className='banner'/>
                    </div> 
                    <div className='titles'>
                      <h1>Vivamus sodales nisi id ante molestie venenatis</h1>
                      
                      <p>This template is <a href="">last updated on 20 August 2019</a> for main menu drop-down arrow and sub menu text color. Duis auctor dolor eu scelerisque vestibulum. Vestibulum lacinia, nisl sit amet tristique condimentum.</p>
                    <p>Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio. Donec non quam euismod, mattis dui a, ultrices nisi.</p>
                      <button>find out more</button>
                    </div> 
                          
                  </div>
        )
    }
}