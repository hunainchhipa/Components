import React from "react";

const CustomPopup = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    : "hidden";

  return (
    <div className={showHideClassName}>
      <section className="bg-white p-8 rounded-lg shadow-lg relative w-auto my-6 mx-auto max-w-6xl">
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
