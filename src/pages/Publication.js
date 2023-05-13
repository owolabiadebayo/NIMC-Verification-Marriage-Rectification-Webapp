import React, { useEffect, useState } from "react";
import Users from "../pages/Users";
import LoadingSpinner from "./Loadingspinner";
import { useNavigate } from "react-router-dom";

function Publication() {
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1); // Navigate back one page in the history stack
  }

  useEffect(() => {
    const accessTime = localStorage.getItem("accessTime");
    if (!accessTime) {
      localStorage.setItem("accessTime", new Date().getTime());
    } else {
      const twentyFourHoursInMs = 24 * 60 * 60 * 1000;
      const elapsedTime = new Date().getTime() - parseInt(accessTime);
      if (elapsedTime > twentyFourHoursInMs) {
        setShowPage(true);
      }
    }
  }, []);
  return (
    <div>
      {showPage ? (
        <Users />
      ) : (
        <>
          <div>
            {" "}
            <button onClick={handleGoBack} className="image-submit">
              Go back
            </button>
            <h1 style={{ textAlign: "center" }}>Page Display after 24hours </h1>
            <LoadingSpinner />
          </div>
        </>
      )}
    </div>
  );
}

export default Publication;
