import React, { useState } from "react";
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableDemo from "./Components/TableDemo";
import Home from "./Components/Home";
import Charts from "./Components/Charts";
import HotkeyProvider from "./Components/contexts/HotkeyContext";
import OdooConnector from "./Components/OdooConnector/OdooConnector";
import HTMLToImage from "./Components/HTMLToImage";
import Vita from "./Components/Vita/Vita";
import MyForm from "./Page/MyForm";
import ContactForm from "./Components/ContactForm";
import ProtectedRoute from "./ProtectedRoute";
import NoAccess from "./Page/NoAccess";
import { AuthProvider } from "./Components/contexts/AuthContext";
import LoadingBar from "react-top-loading-bar";

const ProtectedComponent = () => {
  return <div>This is a protected component</div>;
};

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <AuthProvider>
        <HotkeyProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/protected"
                element={
                  <ProtectedRoute
                    element={<ProtectedComponent />}
                    requiredPermissions={["read"]}
                  />
                }
              />
              <Route path="/no-access" element={<NoAccess />} />
              <Route path="/myform" element={<MyForm />} />
              <Route path="/data-table" element={<TableDemo />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/odoo" element={<OdooConnector />} />
              <Route path="/vita" element={<Vita />} />
              <Route path="/html-to-image" element={<HTMLToImage />} />
              <Route
                path="/contact-us"
                element={<ContactForm setProgress={setProgress} />}
              />
            </Routes>
          </Router>
        </HotkeyProvider>
      </AuthProvider>
    </>
  );
}

export default App;
