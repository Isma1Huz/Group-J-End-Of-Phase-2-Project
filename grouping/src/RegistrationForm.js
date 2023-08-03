import React, { useState } from "react";

function RegistrationForm() {
  // State to store the form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    passport: "",
    destination: "",
  });

  // Event handler to update the form data when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Event handler to submit the form data to the server
  const handleSubmit = (e) => {
    e.preventDefault();

    // Making a POST request to the API endpoint with the form data
    fetch("http://localhost:8000/personalDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data posted successfully:", data);
      })
      .catch((error) => console.error("Error posting data:", error));

    // Resetting the form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      passport: "",
      destination: "",
    });
  };

  return (
    <div className="Container">

      {/* Form for user registration */}
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="text-fields fname">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="fname"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div className="text-fields lname">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lname"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </div>

        {/* Date of Birth */}
        <div className="text-fields dob">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dob"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div className="gender-selection">
          <p className="field-heading">Gender:</p>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
