import React from 'react';
import Button from '../UI/button/Button';
import "./Header.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import "../UI/button/Button.css";
import  {BsMouse} from "react-icons/bs";

const Header = () => {
  return (
    <section id="header">
        <div className="container header">
        <div className="header-left">
          <h1>
            <span>THE WORLD'S LEADING</span>
            <span>CROSS-PLATFORM SECURE</span>
            <span>MESSAGING SYSTEM</span>
          </h1>
          <p className='u-text-small u-text-light'>
            TenpopX is a Lorem ipsum dolor sitamet, consectetur adipisicing elit.
            obcaThe href attribute requires a valid value to be accessef, but 
            still need the element to resemble a link.resemble a link
          </p>
          <div className="header-cta">
            <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"}/>
            <Button text={"How It Works"} btnClass={"btn-orange"} href={"#faq"}/>
          </div>
          </div>


        
       
      
        <div className="header-right">

<img src={phoneHeader} alt="phone"/>

        </div>
        </div>

        <div className='floating-icon'>
        <a href="#features">
        <BsMouse color='#fff' size={25} className="mouse"/>

        </a>


        </div>




        </section>
  )
}

export default Header