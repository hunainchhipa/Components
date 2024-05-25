import React, { useState, useEffect } from "react";
import useSearch from "../hooks/useSearch";
import SearchBar from "./SearchBar";
import DataTableWrapper from "./DataTableWrapper";
import FormView from "./FormView";
import "./DataTableComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const DataTableComponent = ({ data, handleDelete, actions }) => {
  const [dataState, setDataState] = useState(data);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [editCell, setEditCell] = useState(null);

  useEffect(() => {
    setDataState(data);
  }, [data]);

  const keys = Object.keys(data[0]);
  const generatedColumns = keys.map((key) => ({
    name: key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
    selector: (row) => row[key],
    searchKey: key,
    sortable: true,
    cell: (row) => {
      const isEditing = editCell && editCell.id === row.id && editCell.field === key;
      return isEditing ? (
        <input
          type="text"
          value={row[key]}
          onChange={(e) => handleCellChange(e, row.id, key)}
          onBlur={() => handleCellSave(row.id, key)}
          autoFocus
        />
      ) : (
        <span onClick={() => setEditCell({ id: row.id, field: key })}>
          {row[key]}
        </span>
      );
    },
  }));

  const {
    filteredData,
    searchTerm,
    searchColumn,
    suggestions,
    setSearchTerm,
    setSearchColumn,
    clearSuggestions,
    setIsSuggestionClicked,
  } = useSearch(dataState, generatedColumns);

  const onSearchChange = (e) => {
    setIsSuggestionClicked(false);
    setSearchTerm(e.target.value);
  };

  const onSuggestionClick = (suggestion) => {
    setIsSuggestionClicked(true);
    clearSuggestions();
    setSearchTerm(suggestion[searchColumn]);
  };

  const onColumnChange = (e) => {
    setSearchColumn(e.target.value);
    setSearchTerm("");
  };

  const handleRowClick = (record) => {
    setSelectedRecord(record);
    setIsFormOpen(true);
  };

  const handleNewClick = () => {
    setSelectedRecord({});
    setIsFormOpen(true);
  };

  const handleSave = (formData) => {
    let updatedData;
    if (selectedRecord && Object.keys(selectedRecord).length === 0) {
      updatedData = [...dataState, formData];
    } else {
      updatedData = dataState.map((item) =>
        item.id === formData.id ? formData : item
      );
    }
    setDataState(updatedData);
    setIsFormOpen(false);
    setCurrentPage(Math.ceil(updatedData.length / 5));
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  const handleCellChange = (e, id, field) => {
    const updatedData = dataState.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: e.target.value };
      }
      return item;
    });
    setDataState(updatedData);
  };

  const handleCellSave = (id, field) => {
    setEditCell(null);
  };

  if (actions) {
    generatedColumns.push({
      name: "Action",
      searchKey: "action",
      cell: (row) => (
        <>
          <FontAwesomeIcon
            icon={faPen}
            className="edit-icon fs-6 me-3 text-secondary"
            onClick={() => handleRowClick(row)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="edit-icon fs-6 text-danger"
            onClick={() => handleDelete(row.id)}
          />
        </>
      ),
    });
  }

  return (
    <>
      {isFormOpen ? (
        <FormView
          columns={generatedColumns}
          record={selectedRecord}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <SearchBar
            columns={generatedColumns}
            onSearchChange={onSearchChange}
            onColumnChange={onColumnChange}
            searchTerm={searchTerm}
            searchColumn={searchColumn}
            suggestions={suggestions}
            onSuggestionClick={onSuggestionClick}
          />
          <button className="btn btn-primary mb-3" onClick={handleNewClick}>
            New Record
          </button>
          <DataTableWrapper
            columns={generatedColumns}
            data={filteredData}
            onRowClicked={handleRowClick}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </>
  );
};

export default DataTableComponent;
