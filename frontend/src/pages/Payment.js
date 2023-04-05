import { useState } from "react";

import { PaystackButton } from "react-paystack";
import axios from "axios";
import { useSelector } from "react-redux";
import "./payment.css";
import logo from "../assests/logo.png";
import nimc from "../assests/ninc-logo.png";

function Payment() {
  const { name, newName,affidavit,publication,notified } = useSelector((state) => state.mainReducer);
    console.log('affidavit:', affidavit);
    console.log('publication:', publication);
    console.log('notified:', notified);
  // const[phone, setPhone]= useState('')

  const publicKey = "pk_test_395d7e38b234e6d992d427e7179a03fc45e943aa";
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paystackName, setPaystackName] = useState("");
  let numberChange = parseInt(publication) 
  const vat = 700;

const totalAmount = numberChange + vat;
const payStackAmount = parseInt(totalAmount);
const koboAmount = payStackAmount * 100;
const amount = koboAmount + 0;
  
  const componentProps = {
    email,
    amount,
    metadata: {
      paystackName,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (transaction) => {
      const { reference } = transaction;
      const transactionId = reference
    console.log("Payment successful! Transaction ID: " + transactionId);
      axios.post("https://your-fastapi-endpoint.com/payment", {
        name,
         newName,
        affidavit,
        publication,
        notified,
        transactionId
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      alert("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className="container ">
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

      
      <div className="payment-boxes">
          <div className="payment-box">
            <h3>Old Name</h3>
                 
            <h5 style={{marginTop:"0.5rem"}}>{name}</h5>

            <h3 style={{marginTop:"0.5rem"}}>New Name:</h3>
            <h5 style={{marginTop:"0.5rem"}}>{newName} </h5>
            {/* <h3>{email}</h3> */}
          
            <h3 style={{marginTop:"0.5rem"}}>Publication Type:</h3>
            <h5 style={{marginTop:"0.5rem"}}>Classified</h5>
          
            <h3 style={{marginTop:"0.5rem"}}>Price:  - N{publication}</h3>
            <h3 style={{marginTop:"0.5rem"}}>Vat:  - N700</h3>
            <h3 style={{marginTop:"0.5rem",borderTop:"1px solid black",borderBottom:"1px solid black",padding:"0.5rem auto"}}>Total: - {totalAmount}</h3>
          
          </div>
          <div className="checkout-form">
            <form  >
              <div className="checkout-field">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) => setPaystackName(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phoneNo"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            </form>
            <PaystackButton className="paystack-button" {...componentProps} />
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
  );
}
export default Payment;
