import React, { useState } from "react";
import "./style.css";
import logo from "../assests/logo.png";
import nimc from "../assests/ninc-logo.png";
import { useDispatch } from 'react-redux';
import { setData } from '../utils/actions';
import { useNavigate } from 'react-router-dom';
function Home() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [affidavit, setAffidavit] = useState(null);
  const [publication, setPublication] = useState("");
  const [notified, setNotified] = useState("");
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  
  
  
  

  const handleFileSelect = (event) => {
    setAffidavit(event.target.files[0]);
  };

  const handleOptionSelect = (event) => {
    setPublication(event.target.value);
  };
  const handleOptionSelectTwo = (event) => {
    setNotified(event.target.value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    dispatch(setData(name,newName, affidavit,publication,notified));
    // Redirect to payment page
    navigate('/payment');
    // console.log(name,newName, affidavit,publication,notified)
  };
  return (
    <div className="container">
      <div className="nav-container">
        <div className="nav">
          <div className="nav-image">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="nav-logo-text">
              <h2>
                GEOSOFT <br /> SOLUTIONS <br /> LIMITED
              </h2>
            </div>
          </div>

          <div className="nav-download">Print</div>
        </div>
      </div>
      <div className="publish-container">
        <div className="publish">
          <div className="publish-section-header">
            <h2 className="publish-header">
              Publish your change of name online and get:
            </h2>
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
              <p>
                Certificate Verifiable by any Organization School, embassies,
                MDA's etc.
              </p>
            </div>
            <div className="publish-content">
              <i class="fa-solid fa-forward"></i>
              <p>National Newspaper Placement.</p>
            </div>
          </div>
          <div className="publish-section-footer">
            <p>Certified and trusted by:</p>
            <img src={nimc} />
          </div>
        </div>
        <div className="publish-form">
          <form className="form-box" onSubmit={handleSubmit}> 
            <p>
              Input Old Name<span className="form-box-asterix">*</span>
            </p>
            <input className="form-box-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>
              New Name<span className="form-box-asterix">*</span>
            </p>
            <input className="form-box-input" type="text" value={newName}  onChange={(e) => setNewName(e.target.value)} />
            <p>
              Upload Court Affidavit<span className="form-box-asterix">*</span>
            </p>
            <label>
              <input
                type="file"
                
                onChange={handleFileSelect}
                style={{ display: "none" }}
              />
              <i class="fa-solid fa-file-pdf"></i>
              {affidavit && <p className="file-input" style={{marginTop:"0.4rem"}}>{affidavit.name}</p>}
            </label>
            <p>
              Choose your Publication type
              <span className="form-box-asterix">*</span>
            </p>
            <select
              value={publication}
              onChange={handleOptionSelect}
              className="my-select"
            >
              <option value=""></option>
              <option value="4000">
                {" "}
                Classified
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="form-box-amount">N4000</span>{" "}
              </option>
              <option value="6000">
                1 A4
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="form-box-amount">N6000</span>
              </option>
              <option value="8000">
                1 A4
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="form-box-amount">N8000</span>
              </option>
              <option value="8000">
                A4
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="form-box-amount">N8000</span>
              </option>
            </select>
            <small>File size not exceeding 5mb, supports jpeg, png, pdf</small>
            <p>Persons or Organization to be notified</p>
            <select
              value={notified}
              onChange={handleOptionSelectTwo}
              className="my-select"
            >
              <option value=""></option>
              <option value="General Public">General Public</option>
              <option value="Other">Other</option>
            </select>

            <button type="submit">Continue</button>
          </form>
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
  )
}

export default Home
