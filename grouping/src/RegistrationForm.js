import React,{ useState} from "react";

function RegistrationForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    
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
      });
    };


    return (
      <div className="Container">
        <div className="Container-card">
          <p>Passenger Details</p>
        </div>
        <div className="Progress-bar">
        <div class="stage">
                      <p class="tool-tip">Personal info</p>
                      <p class="stageno stageno-1">1</p>
                  </div>
                  <div class="stage">
                      <p class="tool-tip">Contact info</p>
                      <p class="stageno stageno-2">2</p>
                  </div>
                  <div class="stage">
                      <p class="tool-tip">Final Submit</p>
                      <p class="stageno stageno-3">3</p>
                  </div>
        </div>
        <div className="signup-form-container">
        <div className="stage1-content">
          <div className="button-container">
            <div className="text-fields fname">
              <label htmlFor="fname">First Name:</label>
              <input type="text" name="fname" id="fname" placeholder="Enter your 
              first name" />
            </div>
            <div className="text-fields lname">
              <label htmlFor="lname">Last Name:</label>
              <input type="text" name="lname" id="lname" placeholder="Enter your 
              last name" />
            </div>
          </div>
          <div className="button-container">
            <div className="text-fields dob">
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" name="dob" id="dob" />
            </div>
            <div className="gender-selection">
              <p className="field-heading">Gender:</p>
              <label htmlFor="male">
                <input type="radio" name="gender" id="male" />Male
              </label>
              <label htmlFor="female">
                <input type="radio" name="gender" id="female" />Female
              </label>
            </div>
          </div>

        
          <div className="information">
            <div className="header">
            <h2>Contact details</h2>
            <div className="writing">
                <p>Please provide your contact details so that we can notify your updates on your flight</p>
            </div>
            </div>
          </div>
          <div className="signup-form-content">
      <div className="stage1-content">
        <div className="text-fields phone">
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" name="phone" id="phone" placeholder="Phone number" />
        </div>
        <div className="text-fields email">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="Enter your email id" />
        </div>
      </div>
     
    </div>
          
        </div>
      </div>
      </div>
    );
  }
  
  export default RegistrationForm;
  