import React, { useState, useEffect } from "react";
import logo from "../assests/logo.png";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setData } from "../utils/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../assests/image.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";
function VirtualNin() {
  const {
    name,
    newName,
    notified,
    publication,
    persons,
    others,
    transactionId,
  } = useSelector((state) => state.mainReducer);
  const [vNIN, setvNIN] = useState("");

  const [responseData, setData1] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangevNIN = (e) => setvNIN(e.target.value);
  const imageData = `data:image/jpeg;base64,${responseData}`;

  const [dob, setdob] = useState("");
  const [dob1, setDob1] = useState("");

  const data = {
    vNIN: vNIN,
  };
  useEffect(() => {
    if (
      responseData === "" ||
      responseData === undefined ||
      responseData === null
    ) {
      toast("vNIN unverify", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast("VNIN verified");
    }
  }, [responseData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://nimc.onrender.com/api/fetchdata/", data).then((res) => {
      setData1(res.data.photograph);
    });
  };

  // FA297967629534BN
  const handleContinue = (e) => {
    e.preventDefault();

    dispatch(
      setData(
        name,
        newName,
        notified,
        publication,
        persons,
        others,
        transactionId,
        imageData
      )
    );
    navigate("/download");
  };

  const handleContinue2 = (e) => {
    e.preventDefault();
    dispatch(
      setData(
        name,
        newName,
        notified,
        publication,
        persons,
        others,
        transactionId,
        imageData,
        dob,
        dob1
      )
    );
    navigate("/datamodification");
  };
  useEffect(() => {
    // Redirect back to navigate page if transactionId is empty string
    if (transactionId === "") {
      navigate("/payment"); // Replace "/navigate" with the actual URL of your navigate page
    }
  });

  return (
    <div>
      <>
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
              Caution!!! This service is for the purpose of NEwspaper
              publication only and does not in any way seek to modify, update or
              alter your already existing information of your NIN in the
              National identity Management Commision(NIMC) database
            </div>
          </div>
          <div className="image-container1">
            <div className="download-nin" style={{ marginLeft: "1rem" }}>
              <div
                className="nav-download"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {" "}
                <div>
                  <i>Dial *346*3*YOUR NIN*119887#</i>
                </div>
                <Link
                  to="/instruction"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                >
                  how to generate vnin
                </Link>{" "}
              </div>
            </div>
            <div className="image-nin ">
              {/* <label style={{height:"18px", fontSize:"18px", fontWeight:"bold"}}>Input your VNIN</label> */}

              {responseData ? (
                <>
                  {" "}
                  <ToastContainer />{" "}
                  <img
                    src={imageData}
                    alt="imageData"
                    style={{ width: "250px", height: "250px" }}
                  />
                  <div className="image-submit" onClick={handleContinue}>
                    Continue
                  </div>{" "}
                </>
              ) : publication == 4750 ? (
                <>
                  <div className="publish-form1">
                    <form onSubmit={handleContinue2} className="form-box1">
                      <h3>Input your Details for Data Modification </h3>
                      <p>Date of Birth:</p>
                      <input
                        type="date"
                        value={dob}
                        className="form-box-input1"
                        onChange={(event) => setdob(event.target.value)}
                      />

                      <p>New Date of Birth</p>
                      <input
                        type="date"
                        value={dob1}
                        className="form-box-input1"
                        onChange={(event) => setDob1(event.target.value)}
                      />
                      <button
                        type="submit"
                        style={{
                          fontSize: "20px",
                          borderRadius: "30px",
                          marginTop: "20px",
                          backgroundColor: "#000066",
                          color: "white",
                          padding: "5px",
                        }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <form
                    onSubmit={handleSubmit}
                    style={{ textAlign: "center" }}
                    className="image-nin"
                  >
                    {" "}
                    <input
                      type="text"
                      value={vNIN}
                      className="image-input"
                      onChange={onChangevNIN}
                      placeholder="Enter vNIN"
                      required
                    />
                    <div style={{ width: "150px", height: "150px" }}>
                      <img
                        src={image}
                        alt="Angular"
                        style={{ width: "100%" }}
                      />
                    </div>{" "}
                    <input
                      className="image-submit"
                      type="submit"
                      value="Generate"
                      style={{ fontSize: "20px" }}
                    />
                  </form>
                </>
              )}
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
                =<a href="#">Terms and Condition</a>
                <a href="#">About Us</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </>
      )
    </div>
  );
}

export default VirtualNin;
