import React, { useState } from 'react';

const FormComponent = ({ addRow }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    weekday: false,
    gender: 'male',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here (e.g., check if required fields are filled)
    addRow(formData);
    setFormData({
      name: '',
      email: '',
      contact: '',
      weekday: false,
      gender: 'male',
      dob: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render your form fields here */}
      {/* Example: */}
      <label>Name: </label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Email: </label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Contact: </label>
      <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />

      <label>DOB: </label>
      <input type="date" name="DOB" value={formData.dob} onChange={handleChange} required />

      {/* Other form fields go here */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
