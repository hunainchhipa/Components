import React from "react";
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableDemo from "./Components/TableDemo";
import Home from "./Components/Home";
import Charts from "./Components/Charts";
import HotkeyProvider from "./Components/contexts/HotkeyContext";
import OdooConnector from "./Components/OdooConnector/OdooConnector";
import HTMLToImage from "./Components/HTMLToImage";
import Vita from "./Components/Vita/Vita";

function App() {
  return (
    <>
      <HotkeyProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data-table" element={<TableDemo />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/odoo" element={<OdooConnector />} />
            <Route path="/vita" element={<Vita />} />
            <Route path="/html-to-image" element={<HTMLToImage />} />
          </Routes>
        </Router>
      </HotkeyProvider>
    </>
  );
}

export default App;
