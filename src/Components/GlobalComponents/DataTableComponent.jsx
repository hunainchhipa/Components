import React, { useState } from "react";
import DataTable from "react-data-table-component";

const DataTableComponent = ({ columns, data, onRowClick }) => {
  const [filteredData, setFilteredData] = useState(data);

  const onSearch = (e) => {
    const filtered = data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.last_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const handleRowClicked = (row) => {
    onRowClick(row);
  };
const DataTableComponent = () => {
  

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
        columns={columns}
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
        onRowClicked={handleRowClicked}
      />
    </>
  );
};

export default DataTableComponent;
