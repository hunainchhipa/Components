// Encounter.js
import React from "react";
import WrappedButton from "../GlobalComponents/WrappedButton";
import { useNavigate } from "react-router-dom";

const Encounter = ({ currentEncounter, setCurrentEncounter }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4" style={{ flex: 1 }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Encounter</h2>
        <div>
        <WrappedButton
            className="btn btn-outline-primary me-2"
            onClick={() => {console.log("Transcript")}}
            hotkey="t"
          >
            Transcript
          </WrappedButton>
          <WrappedButton
            className="btn btn-outline-secondary"
            onClick={() => {console.log("Note")}}
            hotkey="r"
          >
            Note
          </WrappedButton>
        </div>
      </div>
      <div className="bg-light border rounded p-3 mb-4" style={{ height: "400px" }}>
        {/* Transcript will be dynamically shown here */}
        {currentEncounter}
      </div>
      <div>
        <div className="mb-3">
          <label className="form-label">Encounter type</label>
          <select className="form-select" onChange={(e) => setCurrentEncounter(e.target.value)}>
            <option value="">Select type</option>
            <option value="In-person">In-person</option>
            <option value="Virtual">Virtual</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Patient context</label>
          <input type="text" className="form-control" placeholder="Name, gender, age, medical history..." onChange={(e) => setCurrentEncounter(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Test your microphone</label>
          <div className="d-flex align-items-center">
            <div className="bg-primary rounded-circle" style={{ width: "24px", height: "24px" }}></div>
            <div className="progress flex-grow-1 ms-2" style={{ height: "10px" }}>
              <div className="progress-bar" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Start encounter</button>
          <WrappedButton
            className="btn btn-outline-secondary"
            onClick={() => navigate("/")}
            hotkey="b"
          >
            Back
          </WrappedButton>
        </div>
      </div>
    </div>
  );
};

export default Encounter;
