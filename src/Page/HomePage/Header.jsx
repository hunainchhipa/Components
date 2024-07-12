import React from "react";
import { Dropdown } from "react-bootstrap";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="logo" onClick={() => navigate("/")}>
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 text-decoration-none"
          >
            Tech Innovators
          </Link>
        </div>
        <nav className="nav">
          <ul className="flex space-x-4 p-0 m-0">
            <li>
              <a
                href="#features"
                className="hover:text-blue-500 text-decoration-none"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-blue-500 text-decoration-none"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 text-decoration-none"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="user-actions flex items-center space-x-4">
          <div className="icon search-icon" title="Search">
            <BsSearch
              size={24}
              className="text-gray-800 hover:text-blue-500 cursor-pointer"
            />
          </div>
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic"
              className="icon dropdown-toggle p-0"
            >
              <BsFillPersonFill
                size={24}
                className="text-gray-800 hover:text-blue-500"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
              <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
