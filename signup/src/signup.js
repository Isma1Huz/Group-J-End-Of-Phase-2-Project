import React, { useState } from "react";
import "./App.css"


function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastName:"",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/formData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed.");
        }
        
        console.log("Submitted successfully!");
        
        setFormData({
          firstname: "",
          lastName: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
    
      });
  };

  

  return (

   <div id="container">
    <form id ="signup-form" onSubmit={handleSubmit}>

      <h2 id="title">Sign Up</h2>

      <div id="Names">

      <div id ="form-group">
        <label>First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
      </div>
    
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      </div>

      <div id ="form-group">
        <label>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          
          
        />
      </div>

      <div id ="form-group">
        <label>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        
          
        />
      </div>

      <button id="button" type="submit">Sign Up</button>
    </form>
   </div>

  );
}

export default Signup;
