import React from 'react'
import "./style.css";
import "./instructions.css";
import logo from "../assests/logo.png";
import nimc from "../assests/ninc-logo.png";
export default function Instructions() {
  return (
    <>
    
    <div className="container">
      <div className="nav-container">
        <div className="nav">
          <div className="nav-image">
            <div className="logo">
              <img src={logo} style={{height:"80px"}}  />
            </div>
            <div className="nav-logo-text">
              <h2>
                GEOSOFT <br /> SOLUTIONS <br /> LIMITED
              </h2>
            </div>
          </div>

          {/* <div className="nav-download"> <a href="/instruction" style={{textDecoration:'none',color:"white"}}>How to generate vnin</a> </div> */}
        </div>
      </div>


      <div className='instructions-container'>
        <div className='instructions'>
             <h2>HOW TO GENERATE A VIRTUAL NIN VIA USSD</h2>
        <p className='instructions-p'> To generate a Virtual NIN via USSD, dial *346*3*Your NIN*119887# <br></br> An SMS message will be sent back to you containing the Virtual NIN generated for you.<br></br>   </p>
        <h2>HOW IT WORKS ON THE MWS MOBILE APP</h2>
        <p className='instructions-p'>  Download and install the MWS Mobile ID from <a href='https://play.google.com/store/apps/details?id=com.nimcmobile&hl=en&gl=US&pli=1' target='blank'>https://nimcmobile.app </a><br></br>   Launch the MWS Mobile ID app installed on your device (Android or iOS). Make sure you have the <br></br>  current version of the app installed or<br></br>   updated on your mobile device.<br></br>   Enter your PIN on the lock screen to continue.<br></br>   Select the “GET VIRTUAL NIN” button on the “Home” screen.<br></br>   Read through the “Enhanced Data Privacy” text.<br></br>   Then click on the button with the “+” sign on the bottom right corner of the screen to start the<br></br>   process of generating a Virtual NIN for Geosoft Solutions Limited, the verifying Enterprise.<br></br>   Tap on any of the available options to either scan the Enterprise’s QR code or type in the<br></br>   Enterprise’s ID (119887) <br></br>  A Virtual NIN is generated for you to use specifically with that verifying Enterprise alone.<br></br>   Present the Virtual NIN to the Enterprise for verification.<br></br>   Receive a notification once verification is completed by the Enterprise.</p>
        </div>
       
      </div>

      <div className="footer-container">
        <div className="footer">
          <div className="footer-header">
            <h2>
              {" "}
              &copy; 2023 <br /> Geosoft Solutions Limited{" "}
            </h2>
          </div>
          <div className="footer-content">
       
            <a href="#">Terms and Condition</a>
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      </div>
    
    </>
  )
}
