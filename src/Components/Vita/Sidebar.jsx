import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import WrappedButton from "../GlobalComponents/WrappedButton";
import categorizeEncounters from "./Categorized";

const Sidebar = ({ encounters, onNewEncounter, onDeleteEncounter }) => {
  const categorizedEncounters = categorizeEncounters(encounters);

  const renderEncounterList = (encounters) =>
    encounters.map((encounter) => (
      <div
        key={encounter.id}
        className="history-box mt-1 d-flex justify-content-between align-items-center"
      >
        <div>
          <span className="chat-title">Encounter</span>
          <p className="chat-description text-secondary mb-0">
            {encounter.status}
          </p>
        </div>
        <div>
          <FontAwesomeIcon
            className="text-secondary"
            icon={faTrashCan}
            onClick={() => onDeleteEncounter(encounter.id)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    ));

  return (
    <div className="sidebar-otr px-3">
      <div className="sidebar-logo py-3">
        <h4 className="fw-bold">Dr. Vita</h4>
      </div>
      <div className="new-chat">
        <WrappedButton
          className="new-chat-btn w-100"
          onClick={onNewEncounter}
          hotkey="n"
        >
          + New Encounter 
        </WrappedButton>
      </div>
      <div className="list-group">
        {categorizedEncounters.today.length > 0 && (
          <>
            <span className="chat-day fw-bold text-secondary">TODAY</span>
            {renderEncounterList(categorizedEncounters.today)}
          </>
        )}
        {categorizedEncounters.yesterday.length > 0 && (
          <>
            <span className="chat-day fw-bold text-secondary">YESTERDAY</span>
            {renderEncounterList(categorizedEncounters.yesterday)}
          </>
        )}
        {categorizedEncounters.last7Days.length > 0 && (
          <>
            <span className="chat-day fw-bold text-secondary">LAST 7 DAYS</span>
            {renderEncounterList(categorizedEncounters.last7Days)}
          </>
        )}
        {categorizedEncounters.last30Days.length > 0 && (
          <>
            <span className="chat-day fw-bold text-secondary">
              LAST 30 DAYS
            </span>
            {renderEncounterList(categorizedEncounters.last30Days)}
          </>
        )}
        {categorizedEncounters.earlier.length > 0 && (
          <>
            <span className="chat-day fw-bold text-secondary">EARLIER</span>
            {renderEncounterList(categorizedEncounters.earlier)}
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
