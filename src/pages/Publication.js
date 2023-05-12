import React, { useEffect, useState } from "react";
import Users from "../pages/Users";
import LoadingSpinner from "./Loadingspinner";

function Publication() {
  const [showPage, setShowPage] = useState(false);

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
            <h1 style={{ textAlign: "center" }}>Page Display after 24hours </h1>
            <LoadingSpinner />
          </div>
        </>
      )}
    </div>
  );
}

export default Publication;
