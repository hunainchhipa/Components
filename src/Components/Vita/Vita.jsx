import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Encounter from "./Encounter";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [encounters, setEncounters] = useState([]);
  const [currentEncounter, setCurrentEncounter] = useState("");

  const updateEncounterStatuses = (encountersToUpdate) => {
    const updatedEncounters = encountersToUpdate.map((encounter) => {
      const createdAt = new Date(encounter.createdAt);
      const now = new Date();
      const diffInMinutes = Math.floor((now - createdAt) / 60000);

      let status = "Not started";
      if (diffInMinutes < 1) {
        status = "Just now";
      } else if (diffInMinutes < 60) {
        status = `${diffInMinutes} min ago`;
      } else {
        const diffInHours = Math.floor(diffInMinutes / 60);
        status = `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
      }

      return {
        ...encounter,
        status: `${status}`,
      };
    });

    return updatedEncounters;
  };

  const handleNewEncounter = () => {
    const newEncounter = {
      id: uuidv4(),
      status: "Not started · 0 min",
      createdAt: new Date().toISOString(),
    };
    const newEncounters = [...encounters, newEncounter];
    setEncounters(updateEncounterStatuses(newEncounters));
    setCurrentEncounter("");
  };

  const handleDeleteEncounter = (id) => {
    setEncounters(encounters.filter((encounter) => encounter.id !== id));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEncounters((prevEncounters) =>
        updateEncounterStatuses(prevEncounters)
      );
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Sidebar
        encounters={encounters}
        onNewEncounter={handleNewEncounter}
        onDeleteEncounter={handleDeleteEncounter}
      />
      <Encounter
        currentEncounter={currentEncounter}
        setCurrentEncounter={setCurrentEncounter}
      />
    </>
  );
};

export default App;
