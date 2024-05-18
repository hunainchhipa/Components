import React from "react";
import DataTableComponent from "./GlobalComponents/DataTableComponent";
import dummyData from "./DB";

const TableDemo = () => {
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

  return (
    <>
      <div className="container my-5">
        <div className="text-center mb-3">
          <h1 className="text-secondary fw-bold">Data Table!</h1>
        </div>
        <DataTableComponent columns={columns} data={dummyData} />
      </div>
    </>
  );
};

export default TableDemo;
