import React from "react";
import DataTableComponent from "./GlobalComponents/DataTableComponent";
import dummyData from "./DB";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const TableDemo = () => {
  const navigate = useNavigate();

  const keys = Object.keys(dummyData[0]);
  const columns = keys.map((key) => ({
    name: key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
    selector: (row) => row[key],
    searchKey: key,
    sortable: true,
  }));

  columns.push({
    name: "Action",
    searchKey: "action",
    cell: (row) => (
      <>
        <FontAwesomeIcon
          icon={faPen}
          className="edit-icon fs-6 me-3 text-secondary"
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="edit-icon fs-6 text-danger"
        />
      </>
    ),
  });

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="text-secondary fw-bold mb-0">Data Table!</h1>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        <DataTableComponent columns={columns} data={dummyData} />
      </div>
    </>
  );
};

export default TableDemo;
