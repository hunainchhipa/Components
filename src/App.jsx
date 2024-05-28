import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableDemo from "./Components/TableDemo";
import Home from "./Components/Home";
import Charts from "./Components/Charts";
import HotkeyProvider from "./Components/contexts/HotkeyContext";
import OdooConnector from "./Components/OdooConnector/OdooConnector";

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
            </Routes>
        </Router>
      </HotkeyProvider>
    </>
  );
}

export default App;
