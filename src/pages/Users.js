import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import "./instructions.css";
import logo from "../assests/logo.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 10;

  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const formattedDate = year + "-" + month + "-" + day;

  useEffect(() => {
    fetch("https://nimc.onrender.com/api/getalldata/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  const pdfContentRef = useRef(null);

  const downloadPDF = () => {
    html2canvas(pdfContentRef.current, {
      scale: 1,
      width: 1200,
      height: 860,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a3");
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset the current page to 1 when a user starts a new search
  };

  const filteredUsers = users.filter((user) =>
    user.newName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div ref={pdfContentRef} className="container">
        <div className="nav-container">
          <div className="nav">
            <div className="nav-image">
              <div className="logo">
                <img src={logo} style={{ height: "80px", width: "70vw" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <h5 style={{ fontSize: "30px", marginTop: "20px" }}>
            Today's Date:{formattedDate}
          </h5>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearchChange}
              className="form-box-input"
            />
          </div>
        </div>

        <div className="users-grid">
          {currentItems.map((user) => (
            <div key={user.id} className="user-card">
              <div className="card-header">
                {" "}
                <h3>{user.newName}</h3>
              </div>
              <div className="card-body">
                <p>
                  I, formerly known and addressed as <span>{user.name}</span>{" "}
                  now wish to be known as <span>{user.newName}. </span>All
                  former documents remain valid. Concerned authorities and
                  general public should please take note
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={
                currentPage === page ? "active pagination2" : "pagination1"
              }
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="image-submit" onClick={downloadPDF}>
          Download Newspaper page
        </button>
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
    </>
  );
}
