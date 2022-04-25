import React, { useEffect} from 'react';
import Button from '../UI/button/Button';
import "./Header.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import "../UI/button/Button.css";
import  {BsMouse} from "react-icons/bs";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() =>{
      AOS.init({
        duration: 1000,

      });
    },[])


  return (
    <section id="header">
        <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Intelligent website design</span>
            <span>YoUR WEB APP MUST DELIVER</span>
            <span> AN AMAZING experience</span>
          </h1>
          <p className='u-text-small u-text-light'>
         Being one of the best web development services providers, we help
startups, businesses, and other organizations build amazing web
plotforms and web applications that deliver a 'never-like-before'
experience to the users. Check out our features to see our web
development services expertise.

          </p>
          <div className="header-cta">
            <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"}/>
            <Button text={"How It Works"} btnClass={"btn-orange"} href={"#features"}/>
          </div>
          </div>


        
       
      
        <div className="header-right" data-aos="fade-left">

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