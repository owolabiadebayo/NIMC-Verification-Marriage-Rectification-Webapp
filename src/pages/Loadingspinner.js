import React from "react";
import "./styling.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spin">
        {" "}
        <div className="loading-spinner"></div>
        <br />
        <h1 style={{ color: "red" }}>Loading....</h1>
      </div>
    </div>
  );
}
