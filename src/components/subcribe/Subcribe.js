import React from 'react'
import "./Subcribe.css";
import { TiSocialGooglePlus} from "react-icons/ti";
import { FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa";


const Subcribe = () => {
  return (
<section id="subcribe">

  <div className='container subscribe'>
    <h2>Subscribe Now!</h2>
    <form>
      <div className='form-control'>
        <input type="text" placeholder='enter your Email...'/>
        <button>Subscribe</button>
      </div>


    </form>
    <div className='social-icons'>

    <div className='social-icon'>
    <TiSocialGooglePlus/>
    </div>
    <div className='social-icon'>
    <FaFacebookF/>
    </div>
    <div className='social-icon'>
    <FaTwitter/>
    </div>
    <div className='social-icon'>
    <FaInstagram/>
    </div>
    </div>

  </div>
</section>
  )
}

export default Subcribe