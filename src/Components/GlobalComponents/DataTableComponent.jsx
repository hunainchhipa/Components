import React from "react";
import DataTable from "react-data-table-component";

const DataTableComponent = ({ columns, data, onRowClick }) => {
  const handleRowClicked = (row) => {
    onRowClick(row);
  };

  return (
    <>
      <DataTable
        columns={columns}
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
    </>
  );
};

export default DataTableComponent;
