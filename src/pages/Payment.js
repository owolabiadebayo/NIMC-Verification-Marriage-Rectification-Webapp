import { useState, useEffect } from "react";

import { PaystackButton } from "react-paystack";
import axios from "axios";
import { useSelector } from "react-redux";
import "./payment.css";
import logo from "../assests/logo.png";
import nimc from "../assests/ninc-logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./Loadingspinner";

function Payment() {
  const { name, newName, affidavit, publication, persons } = useSelector(
    (state) => state.mainReducer
  );
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect back to home page if transactionId is empty string
    if (name === "") {
      navigate("/");
    }
  });
  // const[phone, setPhone]= useState('')

  const publicKey = "pk_test_395d7e38b234e6d992d427e7179a03fc45e943aa";
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paystackName, setPaystackName] = useState("");
  let numberChange = parseInt(publication);
  const vat = 0;
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
      const transactionId = reference;
      console.log(transactionId);

      // console.log("Payment successful! Transaction ID: " + transactionId);
      if (
        transactionId === "" ||
        transactionId === undefined ||
        transactionId === null
      ) {
        toast("transaction unsuccessfull", {
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
        toast("transaction successfull");
      }
      axios
        .post("https://nimc.onrender.com/api/adddata/", {
          name,
          newName,
          affidavit,
          publication,
          persons,
          transactionId,
        })
        .then((response) => {
          console.log(response);
          navigate("/virtual_nin");
        })
        .catch((error) => {
          navigate("/payment");
        });
      setIsLoading(true);
    },
  };

  return (
    <>
      <ToastContainer />
      <div className="container ">
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

        <div class="marquee">
          <div>
            Caution!!! This service is for the purpose of Newspaper publication
            only and does not in any way seek to modify, update or alter your
            already existing information of your NIN in the National identity
            Management Commision(NIMC) database
          </div>
        </div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="payment-boxes">
            <div className="payment-box">
              <h3>Old Name</h3>

              <h5 style={{ marginTop: "0.5rem" }}>{name}</h5>

              <h3 style={{ marginTop: "0.5rem" }}>New Name:</h3>
              <h5 style={{ marginTop: "0.5rem" }}>{newName} </h5>
              {/* <h3>{email}</h3> */}

              <h3 style={{ marginTop: "0.5rem" }}>Publication Type:</h3>
              <h5 style={{ marginTop: "0.5rem" }}>Classified</h5>

              <h3 style={{ marginTop: "0.5rem" }}>Price: N{publication}</h3>

              <h3
                style={{
                  marginTop: "0.5rem",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                  padding: "0.5rem auto",
                }}
              >
                Total: {totalAmount}
              </h3>
            </div>
            <div className="checkout-form">
              <form>
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
        )}
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
export default Payment;