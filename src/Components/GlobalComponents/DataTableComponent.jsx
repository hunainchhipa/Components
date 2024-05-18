import React from "react";
import DataTable from "react-data-table-component";

const DataTableComponent = (props) => {
  return (
    <>
      <DataTable
        columns={props.columns}
        data={props.data}
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
      />
    </>
  );
};

export default DataTableComponent;
