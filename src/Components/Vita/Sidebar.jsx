import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-otr px-3">
        <div className="sidebar-logo py-3">
          <h4 className="fw-bold">Dr. Vita</h4>
        </div>
        <div className="new-chat">
          <button className="new-chat-btn w-100 fs-6">+ New Chat</button>
        </div>
        <div className="chat-history mt-3">
          <span className="chat-day fw-bold text-secondary">TODAY</span>
          <div className="history-box mt-1">
            <span className="chat-title">Chat</span>
            <p className="chat-description text-secondary mb-0">
              Not Started - 0 min
            </p>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
