import React, { useState } from "react";
import DataTable from "react-data-table-component";
import FormComponent from "./FormComponent"; // Assuming FormComponent is in the same directory

const DataTableComponent = (props) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [data, setData] = useState(props.data);

  const handleRowClicked = (row) => {
    setSelectedRow(row);
    setFormVisible(true);
  };

  const handleUpdate = (updatedRow) => {
    setData((prevData) =>
      prevData.map((row) => (row.id === updatedRow.id ? updatedRow : row))
    );
  };

  return (
    <>
      <DataTable
        columns={props.columns}
        data={data}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
        striped
        customStyles={{
          headRow: {
            style: {
              backgroundColor: "rgba(13, 34, 44, 1)",
              color: "white",
            },
          },
        }}
        onRowClicked={handleRowClicked}
      />
      {isFormVisible && (
        <FormComponent
          row={selectedRow}
          onClose={() => setFormVisible(false)}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
};

export default DataTableComponent;
