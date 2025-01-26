import { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

export default class App extends Component{
  render(){
    return(
      <>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
      </>
    )
  }
}
