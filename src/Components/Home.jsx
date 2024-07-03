import React from "react";
import { useNavigate } from "react-router-dom";
import WrappedButton from "./GlobalComponents/WrappedButton";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-2 vh-100">
        <WrappedButton
          className="btn btn-outline-secondary"
          onClick={() => navigate("/data-table")}
          hotkey={"d"}
        >
          Data Table
        </WrappedButton>
        <WrappedButton
          className="btn btn-outline-secondary"
          onClick={() => navigate("/myform")}
          hotkey={"f"}
        >
          My Form
        </WrappedButton>
        <WrappedButton
          className="btn btn-outline-secondary"
          onClick={() => navigate("/charts")}
          hotkey={"c"}
        >
          Charts
        </WrappedButton>
        <WrappedButton
          className="btn btn-outline-secondary"
          onClick={() => navigate("/odoo")}
          hotkey={"o"}
        >
          Odoo Connector
        </WrappedButton>
        <WrappedButton
          className="btn btn-outline-secondary"
          onClick={() => navigate("/vita")}
          hotkey={"v"}
        >
          Dr. Vita
        </WrappedButton>
        <WrappedButton
          className="btn btn-outline-secondary"
          onClick={() => navigate("/html-to-image")}
          hotkey={"h"}
        >
          HTML to Image
        </WrappedButton>
        <WrappedButton
          className="btn btn-outline-secondary"
          onClick={() => navigate("/contact-us")}
          hotkey={"e"}
        >
          Contact Us
        </WrappedButton>
      </div>
    </>
  );
};

export default Home;
