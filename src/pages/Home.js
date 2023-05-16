import React, { useState } from "react";
import "./style.css";
import logo from "../assests/logo.png";
import logo1 from "../assests/LIC.png";
import { useDispatch } from "react-redux";
import { setData } from "../utils/actions";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [affidavit, setAffidavit] = useState("");
  const [publication, setPublication] = useState("");
  const [persons, setPersons] = useState("");
  const [others, setOthers] = useState("");
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setImageUrl(file);

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const dataUrl = reader.result;
        // dataUrl is the base64-encoded string representation of the file
        setAffidavit(dataUrl);
      };
    }
  };

  const handleOptionSelect = (event) => {
    setPublication(event.target.value);
  };
  const handleOptionSelectTwo = (event) => {
    setPersons(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Promise.resolve(
      dispatch(setData(name, newName, affidavit, publication, persons, others))
    ).then(() => {
      // Redirect to payment page
      navigate("/payment");
    });
  };

  return (
    <div className="container">
      <div className="nav-container">
        <div className="nav">
          <div className="nav-image">
            <div className="logo">
              <img src={logo} style={{ height: "80px" }} />
            </div>
          </div>

          <div className="nav-download1">
            <p>Phone Nos1: 09090909137 </p>
            <p>Phone Nos2: 09090909136 </p>
          </div>
        </div>
      </div>
      <div class="marquee">
        <div>
          Caution!!! This service is for the purpose of NEwspaper publication
          only and does not in any way seek to modify, update or alter your
          already existing information of your NIN in the National identity
          Management Commision(NIMC) database
        </div>
      </div>
      <div className="publish-container">
        <div className="publish">
          <div className="publish-section-header">
            <h2 className="publish-header">
              Good news! you can now link your change of name,newspaper
              publication with your NIN and get:
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
            <p>Approved by NIMC</p>
            <img src={logo1} />
          </div>
        </div>
        <div className="publish-form">
          <form className="form-box" onSubmit={handleSubmit}>
            <p>
              Input Old Name<span className="form-box-asterix">*</span>
            </p>
            <input
              className="form-box-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p>
              New Name<span className="form-box-asterix">*</span>
            </p>
            <input
              className="form-box-input"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />
            <p>
              Upload your Affidavit/ marriage certificate or other documents
            </p>
            <label>
              <input
                type="file"
                accept="image/*" // Specify the accepted file types to be images only
                onChange={handleFileSelect}
                style={{ display: "none" }}
                required
              />
              <i class="fa-solid fa-file"></i>
              {imageUrl && (
                <p
                  className="file-input"
                  style={{ marginTop: "0.4rem", fontSize: "14px" }}
                >
                  {imageUrl.name}
                </p>
              )}
            </label>
            <small>File size not exceeding 5mb, supports jpeg, png, pdf</small>
            <p>
              Choose your Publication type
              <span className="form-box-asterix">*</span>
            </p>
            <select
              value={publication}
              onChange={handleOptionSelect}
              className="my-select"
              required
            >
              <option value=""></option>
              <option value="4800">
                {" "}
                Change of Name
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <span className="form-box-amount">N4800</span>{" "}
              </option>
              <option value="4750">
                Data Modification publication for NIMC
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="form-box-amount">N4750</span>
              </option>
            </select>
            <p>
              General public to be notified{" "}
              <span className="form-box-asterix">*</span>
            </p>
            <select
              value={persons}
              onChange={handleOptionSelectTwo}
              className="my-select"
              required
            >
              <option value=""></option>
              <option value="General Public">General Public</option>
            </select>
            <p>
              Persons or Organization to be notified{" "}
              <span className="form-box-asterix">*</span>
            </p>
            <input
              className="form-box-input"
              type="text"
              value={others}
              onChange={(e) => setOthers(e.target.value)}
              required
            />
            <small>Please limit your message to 5 words or less.</small>
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer">
          <div className="footer-header">
            <h2>
              {" "}
              &copy; 2023 <br /> The Classified Newspaper{" "}
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
  );
}

export default Home;
