import { Component } from "react";

export default class Navbar extends Component{
    render(){
        return(
            <div className="nav">
                <a href="#" className="logo">art factory</a>
                <ul>
                    <li><a href="#" className="headList selected">home</a></li>
                    <li><a href="#" className="headList">about</a></li>
                    <li><a href="#" className="headList">services</a></li>
                    <li><a href="#" className="headList">faq</a></li>
                    <li><a href="#" className="headList">dropdown</a></li>
                    <li><a href="#" className="headList">contact us</a></li>
                </ul>
            </div>
        )
    }
}