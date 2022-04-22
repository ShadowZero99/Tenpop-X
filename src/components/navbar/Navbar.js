import React, {useState} from 'react';
import "./Navbar.css";
import { SiAnaconda} from "react-icons/si";
import { RiCloseLine} from "react-icons/ri";
import { AiOutlineBars} from "react-icons/ai";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";




const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu =()=>{
    setShowMenu(!showMenu);
  }
  return (
    <nav className='container navbar'>

        <div className='logo'>
          
          <SiAnaconda color="#fff" size={33}/>

          <p className='logo-text'>
            Tenpop<span>X</span>
          </p>

        </div>

        <menu>
          <ul className='nav-links' id={showMenu?"nav-links-mobile":"nav-links-mobile-hide"}>
              <li><a href="#Home">Home</a></li>
              <li><a href="#Features">Features</a></li>
              <li><a href="#faq">Download</a></li>
              <li><a href="#faq">Subcribe</a></li>
              
              {/*<li className="nav-btn">
                
                <a href="#faq" className='btn
  btn-dark'>Get Stareted</a></li>*/}

  <li className="nav-btn">
                <Button text={"Get Started"} btnClass={"btn-dark"} href={"#faq"}/>
               
              
              </li>


          </ul>

        </menu>
        <div className='menu-icons' onClick={toggleMenu}>
          {
            showMenu ? <RiCloseLine color="#fff" size={30}/> : <AiOutlineBars color="#fff" size={27}/>
          }
        </div>
      </nav>
  )
}

export default Navbar