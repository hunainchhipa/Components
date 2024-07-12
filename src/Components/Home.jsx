import React from "react";
import { useNavigate } from "react-router-dom";
import WrappedButton from "./GlobalComponents/WrappedButton";
import {
  CBadge,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilCloudDownload,
  cilLayers,
  cilPuzzle,
  cilSpeedometer,
} from "@coreui/icons";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <CSidebar className="border-end vh-100" colorScheme="dark" unfoldable>
        <CSidebarHeader className="border-bottom">
          <CSidebarBrand>SWM</CSidebarBrand>
        </CSidebarHeader>
        <CSidebarNav>
          <CNavTitle>Nav Title</CNavTitle>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Nav item
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> With
            badge <CBadge color="primary ms-auto">NEW</CBadge>
          </CNavItem>
          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav
                dropdown
              </>
            }
          >
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>{" "}
              Nav dropdown item
            </CNavItem>
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>{" "}
              Nav dropdown item
            </CNavItem>
          </CNavGroup>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilCloudDownload} />{" "}
            Download CoreUI
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilLayers} /> Try CoreUI PRO
          </CNavItem>
        </CSidebarNav>
      </CSidebar>

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
          onClick={() => navigate("/home")}
          hotkey={"h"}
        >
          Website
        </WrappedButton>
        <WrappedButton
          className="btn btn-outline-secondary"
          onClick={() => navigate("/protected")}
          hotkey={"a"}
        >
          Auth
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
