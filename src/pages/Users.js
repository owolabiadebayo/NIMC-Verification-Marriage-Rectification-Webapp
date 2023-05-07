import React, { useState, useEffect,useRef } from "react";
import "./style.css";
import "./instructions.css";
import logo from "../assests/logo.png";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track the loading state

  const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2); // months are zero-indexed
const day = ('0' + today.getDate()).slice(-2);
const formattedDate = year + '-' + month + '-' + day;


  useEffect(() => {
    fetch('https://nimc.onrender.com/api/getalldata/')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false); // Set loading state to false when data is loaded
      });
  }, []);
  const pdfContentRef = useRef(null);

  const downloadPDF = () => {
    html2canvas(pdfContentRef.current,{
      // useCORS: true,
      scale: 0.6, // increase scale factor to capture higher resolution image
      width: 1200, // set canvas width to cover entire page
      height: 860 // set canvas height to cover entire page
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('download.pdf');
    });
  };
  

  if (isLoading) {
    return <div>Loading...</div>; // Render the loader while loading data
  }
  return (
    <>
      <div ref={pdfContentRef} className="container">
       
        <div className="nav-container">
          <div className="nav">
            <div className="nav-image">
              <div className="logo">
                <img src={logo} style={{height:"80px"}} />
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
        <h5 style={{fontSize:"30px", marginTop:"20px"}}>Date:{formattedDate}</h5>
        <div className="users-grid">
       
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="card-header">
                {" "}
                <h3>{user.newName}</h3>
              </div>
              <div className="card-body">
                <p>I, formerly known and addressed as <span>{user.name}</span> now wish to be known as  <span>{user.newName}. </span>All former documents remain valid. Concerned authorities and general public should please take note</p>
              </div>
            </div>
          ))}
        </div>
        <button className="image-submit" onClick={downloadPDF}>Download Newspaper page</button>
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
  );
}
