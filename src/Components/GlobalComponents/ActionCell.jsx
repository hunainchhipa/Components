import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import WrappedButton from "./WrappedButton";

const ActionCell = ({ onEdit, onDelete }) => {
  return (
    <>
    <WrappedButton className="edit-icon fs-6 me-3 text-secondary" onClick={onEdit} hotkey="e">
      <FontAwesomeIcon
        icon={faPen}
      />
    </WrappedButton>
    <WrappedButton className="edit-icon fs-6 me-3 text-secondary" onClick={onDelete} hotkey="d">
      <FontAwesomeIcon
        icon={faTrash}
      />
    </WrappedButton>
    </>
  );
};

export default ActionCell;
