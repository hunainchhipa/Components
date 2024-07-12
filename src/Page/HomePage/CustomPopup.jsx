import React from "react";

const CustomPopup = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    : "hidden";

  return (
    <div className={showHideClassName}>
      <section className="bg-white p-8 rounded-lg shadow-lg relative">
        {children}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default CustomPopup;
