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
        {encounters.map(encounter => (
          <div key={encounter.id} className="list-group-item mt-3">
            <p className="mb-0">Encounter</p>
            <small className="text-muted">{encounter.status}</small>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Sidebar;
