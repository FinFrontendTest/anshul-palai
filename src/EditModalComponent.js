import React, { useState, useEffect } from 'react';

const EditModalComponent = ({ isOpen, closeModal, rowData, updateRow }) => {
  const [editedData, setEditedData] = useState(rowData);

  useEffect(() => {
    setEditedData(rowData);
  }, [rowData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate edited data here if needed
    updateRow(editedData);
    closeModal();
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <form onSubmit={handleSubmit}>
        {/* Render your form fields with pre-filled values */}
        {/* Example: */}
        <label>Name:</label>
        <input type="text" name="name" value={editedData.name} onChange={handleChange} required />
        <input type="email" name="email" value={editedData.email} onChange={handleChange} required />
        <input type="tel" name="contact" value={editedData.contact} onChange={handleChange} required />
        <input type="date" name="DOB" value={editedData.dob} onChange={handleChange} required />

        {/* Other form fields go here */}

        <button type="submit">Update</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditModalComponent;
