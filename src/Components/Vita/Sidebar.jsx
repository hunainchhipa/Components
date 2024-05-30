import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import WrappedButton from "../GlobalComponents/WrappedButton";

const Sidebar = ({ encounters, onNewEncounter }) => {
  return (
    <>
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
          {encounters.map((encounter) => (
            <div key={encounter.id} className="chat-history mt-3">
              <span className="chat-day fw-bold text-secondary">TODAY</span>
              <div className="history-box mt-1 d-flex justify-content-between align-items-center">
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
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
