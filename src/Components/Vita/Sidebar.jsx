import {
  faCircleQuestion,
  faEnvelope,
  faGear,
  faTrashCan,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
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
    <div className="sidebar-otr d-flex flex-column">
      <div className="sidebar-logo py-3 px-2">
        <h4 className="fw-bold">Dr. Vita</h4>
      </div>
      <div className="new-chat mb-2 px-2">
        <WrappedButton
          className="new-chat-btn w-100"
          onClick={onNewEncounter}
          hotkey="n"
        >
          + New Encounter
        </WrappedButton>
      </div>
      <div className="flex-grow-1 overflow-auto px-2">
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
              <span className="chat-day fw-bold text-secondary">
                LAST 7 DAYS
              </span>
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
      <div className="px-2 py-3 border-top">
        <div className="sidebar-footer">
          <FontAwesomeIcon className="text-secondary" icon={faGear} />
          <span className="ms-2 sidebar-footer-menu">Settings</span>
        </div>
        <div className="sidebar-footer">
          <FontAwesomeIcon className="text-secondary" icon={faCircleQuestion} />
          <span className="ms-2 sidebar-footer-menu">Help</span>
        </div>
        <div className="sidebar-footer">
          <FontAwesomeIcon className="text-secondary" icon={faWandSparkles} />
          <span className="ms-2 sidebar-footer-menu">What's new!</span>
        </div>
        <div className="sidebar-footer">
          <FontAwesomeIcon className="text-secondary" icon={faEnvelope} />
          <span className="ms-2 sidebar-footer-menu">Contact us</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
