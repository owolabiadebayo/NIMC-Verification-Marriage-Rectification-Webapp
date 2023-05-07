import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import "./instructions.css";
import logo from "../assests/logo.png";
import certificateImage from "../assests/logo.png";
import backgroundImage from "../assests/srhdyjukgil.jpg";
import backgroundImage2 from "../assests/srhdyjukgil_page-0001.jpg"




function Download() {
  const { newName,name,imageData} = useSelector((state) => state.mainReducer);
  console.log(imageData);
  // Base64 encoded image data


  const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2); // months are zero-indexed
const day = ('0' + today.getDate()).slice(-2);
const formattedDate = year + '-' + month + '-' + day;
console.log(formattedDate);


  const generatePdf = () => {
    const doc = new jsPDF();
  
     // Add background image to PDF
  doc.addImage(backgroundImage, "PNG", 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
  
   // Add image to PDF
   doc.addImage(imageData, "PNG", doc.internal.pageSize.getWidth() - 67, 40, 60, 60);
  
    // Add text to PDF
    doc.setFontSize(20);
    doc.text(`${newName}`, 35, 137);
    doc.setFontSize(20);
    doc.text(` ${name} `, 40, 147);
    doc.setFontSize(20);
    doc.text(` ${newName} `, 47, 157);
    doc.setFontSize(20)
    doc.text(`${formattedDate}`,160,288)
  
    // Save PDF
    doc.save("certificate.pdf");
  };
  const generatePdf2 = () => {
    const doc = new jsPDF();
  
     // Add background image to PDF
  doc.addImage(backgroundImage2, "PNG", 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
  
  // // Add image to PDF
  // doc.addImage(imageData, "PNG", doc.internal.pageSize.getWidth() - 54, 47, 50, 50);


  
    // Add text to PDF
    doc.setFontSize(30);
    doc.text(` ${name} `, 40, 85);
    doc.setFontSize(30);
    doc.text(`${newName}`, 35, 110);
    
  
    // Save PDF
    doc.save("publication.pdf");
  };


  return (
    <div className="download">

<div className="container">
      <div className="nav-container">
        <div className="nav">
          <div className="nav-image">
            <div className="logo">
              <img src={logo} style={{height:"80px"}}/>
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
      <div className="download">
      <div className="nav-download" style={{width:"50%" ,marginTop:"10px"}}> <a href="/users" style={{textDecoration:'none',color:"white", borderRadius:"50%", fontSize:"20px"}}>Check recent publication</a> </div> 
        <h1 style={{marginTop:"2rem", textAlign:"center"}}>Download Your Certificate And Publication</h1>
        <div className="download-boxes">
        <div className="download-box">
          <div className="card">
          <div className="card-top">

</div>  <div className="card-bottom">
<p>Publication Certificate</p>
<i class="fa-solid fa-download"  onClick={generatePdf}></i>
    
</div>
          </div>
           
        </div>
        
        <div className="download-box">
          <div className="card">
          <div className="card-top">

</div>  <div className="card-bottom">
<p>Newspaper Publication </p>
<i class="fa-solid fa-download"  onClick={generatePdf2}></i>
    
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

  </div>
  
  );
}

export default Download;
