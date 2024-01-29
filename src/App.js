import React, { useState } from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';
import EditModalComponent from './EditModalComponent';
import styles from './App.module.css'; // Import your CSS module or use styled components

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const addRow = (rowData) => {
    setTableData((prevData) => [...prevData, rowData]);
  };

  const editRow = (index) => {
    setSelectedRow(index);
    setIsEditModalOpen(true);
  };

  const updateRow = (updatedData) => {
    setTableData((prevData) =>
      prevData.map((item, index) => (index === selectedRow ? updatedData : item))
    );
    setIsEditModalOpen(false);
    setSelectedRow(null);
  };

  const deleteRow = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <div className={styles.app}>
      <FormComponent addRow={addRow} />
      <TableComponent data={tableData} editRow={editRow} deleteRow={deleteRow} />
      <EditModalComponent
        isOpen={isEditModalOpen}
        closeModal={closeModal}
        rowData={selectedRow !== null ? tableData[selectedRow] : {}}
        updateRow={updateRow}
      />
    </div>
  );
};

export default App;
