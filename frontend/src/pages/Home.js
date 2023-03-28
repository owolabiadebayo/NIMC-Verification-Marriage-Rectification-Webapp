import React from "react";
import "./style.css";
import  logo  from "../assests/logo.png";
import  nimc  from "../assests/ninc-logo.png";

function Home() {
  return (
    <div className="container">
      <div className="nav-container">
        <div className="nav">
          <div className="nav-image">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="nav-logo-text">
               <h2>GEOSOFT <br/> SOLUTIONS <br/> LIMITED</h2> 
            </div>
          </div>

          <div className="nav-download">Print</div>
        </div>
      </div>
      <div className="publish-container">
        <div className="publish">
            <div className="publish-section-header">
            <h2 className="publish-header">Publish your change of name online and get:</h2>
            <div className="publish-content">
            <i class="fa-solid fa-forward"></i>
                <p>Publication Certificate Immediately</p>
            </div>
            <div className="publish-content">
            <i class="fa-solid fa-forward"></i>
                <p>NIN Linked Publication Certificate</p>
            </div>
            <div className="publish-content">
            <i class="fa-solid fa-forward"></i>
                <p>Certificate Verifiable by any Organization School, embassies, MDA's etc.</p>
            </div>
            <div className="publish-content">
            <i class="fa-solid fa-forward"></i>
                <p>National Newspaper Placement.</p>
            </div>

            </div>
            <div className="publish-section-footer">
                <p>Certified and trusted by:</p>
                <img src={nimc}/>
            </div>
                   </div>
        <div className="publish-form">
            <form className="form-box">
                <label>Input Old Name<span>*</span></label>
                <input type="text"/>
                <label>Upload Court Affidavit<span>*</span></label>
                <input type="text"/>
                <label>Choose your Publication type<span>*</span></label>
                <input type="text"/>
                <small>File size not exceeding 5mb, supports jpeg, png, pdf</small>
                <label>Choose your Publication type</label>
                <input type="text"/>

                <button type="submit">Continue</button>


            </form>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer">
        <div className="footer-header">
            <h2> &copy; 2023 <br/> Geosoft Solutions Limited </h2>
            </div>
            <div className="footer-content">
                <a href="#">Terms and Condition</a>
                <a href="#">About Us</a>
                <a href="#">Privacy Policy</a>
            
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
