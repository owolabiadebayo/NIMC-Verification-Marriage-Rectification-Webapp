import React, { useState, useEffect } from "react";
import "./style.css";
import "./instructions.css";
import logo from "../assests/logo.png";
import nimc from "../assests/ninc-logo.png";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track the loading state

  useEffect(() => {
    fetch('http://165.232.65.56:8080/api/v1/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false); // Set loading state to false when data is loaded
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Render the loader while loading data
  }
  return (
    <>
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

            {/* <div className="nav-download"> <a href="/instruction" style={{textDecoration:'none',color:"white"}}>How to generate vnin</a> </div> */}
          </div>
        </div>

        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="card-header">
                {" "}
                <h3>{user.newName}</h3>
              </div>
              <div className="card-body">
                <p>I, formerly known and addressed as <span>{user.name}</span> now wish to be known as  <span>{user.newName}. </span>All former documents remain valid. Concerned authorithies and general public should please take note</p>
              </div>
            </div>
          ))}
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
  );
}
