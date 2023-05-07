import React, { useState, useEffect } from "react";
import logo from "../assests/logo.png";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { setData } from "../utils/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../assests/image.jpeg"
import axios from "axios";
function VirtualNin() {
  const { name,newName,notified,publication,persons,transactionId } = useSelector((state) => state.mainReducer);
  const [vNIN, setvNIN] = useState("");
  console.log(vNIN);
  const [responseData, setData1] = useState("");
  console.log(responseData);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onChangevNIN = (e) => setvNIN(e.target.value);
  const imageData =`data:image/jpeg;base64,${responseData}`;
  console.log(imageData);

  const data = {
    vNIN: vNIN,
  }
  useEffect(()=>{
    if (responseData === "" || responseData === undefined || responseData === null){
      toast('vNIN unverify', {
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
      toast("VNIN verified")
    }
    },[responseData
  ])
  // const notify = () =>{ 
  
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("https://nimc.onrender.com/api/fetchdata/", data
  ).then(
    res => {
      setData1(res.data.photograph)
    }
  )

  }
   
// FA297967629534BN
  const handleContinue = () => {
    
    dispatch(setData(name,newName,notified,publication,persons,transactionId,imageData))
      navigate("/download")
    
  };
  useEffect(() => {
    // Redirect back to navigate page if transactionId is empty string
    if (transactionId === "") {
      navigate("/payment"); // Replace "/navigate" with the actual URL of your navigate page
    }})


  

  return (
    <div>
        <>
        <ToastContainer />
        <div className="container">
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
        </div>
      </div>
      <div className="image-container">
        <div className="download-nin" style={{marginLeft:"1rem"}}>
       <div className="nav-download" > <a href="/instruction" style={{textDecoration:'none',color:"white", borderRadius:"50%", fontSize:"20px"}}>Click to know how to generate vnin</a> </div> 
        </div>
        <div className="image-nin ">
           <form onSubmit={handleSubmit} style={{textAlign:"center"}} className="image-nin">
           {/* <label style={{height:"18px", fontSize:"18px", fontWeight:"bold"}}>Input your VNIN</label> */}
           <input type="text" value={vNIN} className="image-input"
          onChange={onChangevNIN}
          placeholder="Enter vNIN"
          required />
          
        {responseData ? (<> <img
            src={imageData }
            alt="imageData" style={{width:'250px', height:'250px'}}
          /> 
        <div className="image-submit"onClick={handleContinue} >Continue</div></>):(<><div style={{width:'150px', height:'150px'}}>
             <img
            src={image}
            alt="Angular" style={{width:'100%'}}
          />
         
        </div><input className="image-submit" type="submit" value="Generate" style={{fontSize:"20px"}}/></>)}
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
        =
            <a href="#">Terms and Condition</a>
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
