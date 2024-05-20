import React, { useState } from "react";
import DataTableComponent from "./GlobalComponents/DataTableComponent";
import dummyData from "./DB";
import { useNavigate } from "react-router-dom";
import FormComponent from "./GlobalComponents/FormComponent";

const TableDemo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(dummyData);
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      name: "Sr. No",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.last_name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
      sortable: true,
    },
  ];

  const handleCreateNew = () => {
    setSelectedRow(null);
    setFormVisible(true);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setFormVisible(true);
  };

  const handleUpdate = (newOrUpdatedRow) => {
    if (selectedRow) {
      setData((prevData) =>
        prevData.map((row) =>
          row.id === newOrUpdatedRow.id ? newOrUpdatedRow : row
        )
      );
    } else {
      setData((prevData) => [
        ...prevData,
        { ...newOrUpdatedRow, id: prevData.length + 1 },
      ]);
    }
    setFormVisible(false);
  };

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
        <div className="mb-3 text-right">
          <button className="btn btn-primary" onClick={handleCreateNew}>
            Create New
          </button>
        </div>
        <DataTableComponent
          columns={columns}
          data={data}
          onRowClick={handleRowClick}
        />
        {isFormVisible && (
          <FormComponent
            row={selectedRow}
            onClose={() => setFormVisible(false)}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    </>
  );
};

export default TableDemo;
