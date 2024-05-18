import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-2 vh-100">
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/data-table")}
        >
          Data Table
        </button>
      </div>
    </>
  );
};

export default Home;
