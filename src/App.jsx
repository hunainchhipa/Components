import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableDemo from "./Components/TableDemo";
import Home from "./Components/Home";
import Charts from "./Components/Charts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-table" element={<TableDemo />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
