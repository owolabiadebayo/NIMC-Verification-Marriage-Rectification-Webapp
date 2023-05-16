import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import "./instructions.css";
import logo from "../assests/logo.png";
import logo1 from "../assests/ninc-logo.png";
import backgroundImage from "../assests/12.jpg";
import { Link } from "react-router-dom";

function Download() {
  const { newName, name, imageData, others } = useSelector(
    (state) => state.mainReducer
  );

  // Base64 encoded image data

  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2); // months are zero-indexed
  const day = ("0" + today.getDate()).slice(-2);
  const formattedDate = year + "-" + month + "-" + day;

  const generatePdf = () => {
    const doc = new jsPDF();

    // Add background image to PDF
    doc.addImage(
      backgroundImage,
      "PNG",
      0,
      0,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight()
    );

    // Add image to PDF
    doc.addImage(
      imageData,
      "PNG",
      doc.internal.pageSize.getWidth() - 67,
      100,
      60,
      60
    );

    // Add text to PDF
    doc.setFontSize(20);
    doc.text(`${name}`, 28, 162);
    doc.setFontSize(20);
    doc.text(` ${newName} `, 70, 173.5);
    doc.setFontSize(20);
    doc.text(` ${name} `, 93, 184);
    doc.setFontSize(14);
    doc.text(`${formattedDate}`, 100, 63);
    doc.setFontSize(20);
    doc.text(`${others}`, 25, 219);

    // Save PDF
    doc.save("certificate.pdf");
  };

  return (
    <div className="download">
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
            {/* <div className="nav-download"> <a href="/instruction" style={{textDecoration:'none',color:"white"}}>How to generate vnin</a> </div> */}
          </div>
        </div>
        <div className="download">
          <h1 style={{ marginTop: "2rem", textAlign: "center" }}>
            Download Your Certificate And Publication
          </h1>
          <div className="download-boxes">
            <div className="download-box">
              <div className="card">
                <div className="card-top"></div>{" "}
                <div className="card-bottom">
                  <p onClick={generatePdf}>Publication Certificate</p>
                  <i class="fa-solid fa-download" onClick={generatePdf}></i>
                </div>
              </div>
            </div>

            <div className="download-box">
              <div className="card">
                <div className="card-top"></div>{" "}
                <div className="card-bottom">
                  <div>
                    <Link to="/users">Recent publication</Link>{" "}
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
}

export default Download;
