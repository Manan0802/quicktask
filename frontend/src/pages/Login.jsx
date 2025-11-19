// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/AuthContext.jsx';

// const Login = () => {
//   // Use a single state object to hold all form data.
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const {Login}=useAuth();//login fun from our context 

//   // Destructure for easier access.
//   const { email, password } = formData;

//   // A single handler to update the state for any form field.
//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // This function runs when the form is submitted.
//   const onSubmit = async (e) => {
//     e.preventDefault(); // Prevent page reload.
//     try {
//       // Prepare the data to be sent.
//       const user = {
//         email,
//         password,
//       };

//       // Send a POST request to our backend's login endpoint.
//       const response = await axios.post('http://localhost:5000/api/auth/login', user);

//       // The backend will send back user info and a token.
//       // For now, we'll just log it to the console.
//       console.log('Login successful!', response.data);
//       alert('Login successful!');

//       // Later, we will save this token to keep the user logged in.

//     } catch (error) {
//       // Log any errors from the backend, like "Invalid email or password".
//       console.error(error.response.data.message);
//       alert('Error: ' + error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             name="email"
//             value={email}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             name="password"
//             value={password}
//             onChange={onChange}
//             minLength="6"
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
// 1. Import our custom useAuth hook.
import { useAuth } from '../context/AuthContext.jsx';
// We no longer need axios here, as the context handles the API call.

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // 2. Get the login function from our context.
  const { login } = useAuth();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // 3. Call the login function from the context.
      await login(email, password);
      // The context now holds the user data. We can add a redirect later.
      alert('Login successful!');
    } catch (error) {
      // The context's login function will throw an error on failure.
      alert('Error: Invalid email or password');
    }
  };

  return (
    // The JSX for the form remains exactly the same.
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;