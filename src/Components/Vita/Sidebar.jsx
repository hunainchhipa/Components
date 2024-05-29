import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-otr px-3">
        <div className="sidebar-logo py-3">
          <h4 className="fw-bold">Dr. Vita</h4>
        </div>
        <div className="new-chat">
          <button className="new-chat-btn w-100">+ New Chat</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
