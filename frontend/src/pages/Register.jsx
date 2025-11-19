import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  // Use a single state object to hold all form data.
  const [formData, setFormData] = useState({  //usestate se do sstate email aur password bana dia  intialy wahi empty
    email: '',
    password: '',
  });

  // Destructure for easier access.
  const { email, password } = formData;//inko rakhlia 

  // A single handler to update the state for any form field.
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });//purana formdta rakha mtlb sabb  rahega 
  };

  // This function runs when the form is submitted.
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload.
    try {
      // Prepare the data to be sent.
      const newUser = {
        email,
        password,
      };

      // Send the POST request to the backend's register endpoint.
      //humne /auth bhi rkaaha kyu kei authenticate rhna chaoye 
      const response = await axios.post('http://localhost:5000/api/auth/register', newUser);//backend pe request bheji to post or create this user 

      // Log the success message from the backend.
      console.log(response.data.message);
      alert('Registration successful! Please log in.'); // Simple feedback for the user.

    } catch (error) {
      // Log any errors from the backend, like "User already exists".
      console.error(error.response.data.message);
      alert('Error: ' + error.response.data.message); // Simple feedback for the user.
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;