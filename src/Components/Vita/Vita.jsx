import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Encounter from "./Encounter";
import WrappedButton from "../GlobalComponents/WrappedButton";

const App = () => {
  const [encounters, setEncounters] = useState([]);
  const [currentEncounter, setCurrentEncounter] = useState("");

  const handleNewEncounter = () => {
    const newEncounter = {
      id: encounters.length + 1,
      status: "Not started · 0 min",
    };
    setEncounters([...encounters, newEncounter]);
    setCurrentEncounter("");
  };

  return (
    <div className="d-flex">
      <Sidebar encounters={encounters} onNewEncounter={handleNewEncounter} />
      <Encounter
        currentEncounter={currentEncounter}
        setCurrentEncounter={setCurrentEncounter}
      />
    </div>
  );
};

export default App;
