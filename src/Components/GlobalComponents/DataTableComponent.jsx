import React, { useState } from "react";
import DataTable from "react-data-table-component";

const DataTableComponent = (props) => {
  const [filteredData, setFilteredData] = useState(props?.data);

  const onSearch = (e) => {
    const filtered = props.data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.last_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <>
      <div className="text-end mb-2">
        <input
          type="search"
          className="form-control"
          placeholder="Search here..."
          onChange={onSearch}
        />
      </div>
      <DataTable
        columns={props.columns}
        data={filteredData}
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
