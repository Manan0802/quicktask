import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// 1. Create the context
const AuthContext = createContext();

// 2. Create the Provider component /. yeh humara wrapper hai issme humne login logooutb dono function milege 
export const AuthProvider = ({ children }) => {
  // We'll store the user object (which includes the token) in state.


  // We initialize the state by checking if there's a user in localStorage.
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));//yeh check kartaa hai kei kya  user humari local storage mai phle se loggin to ni toh presistent loginn bane rhte hai 

  // Login function
  const login = async (email, password) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', {//whenever called saved user to  local storge humara login wa;a
      email,
      password,
    });
    // If login is successful, store the user data in localStorage
    localStorage.setItem('user', JSON.stringify(response.data));
    // and update the user state.
    setUser(response.data);
  };

  // Logout function
  const logout = () => {
    // Remove user from localStorage
    localStorage.removeItem('user');
    // and clear the user state.
    setUser(null);
  };

  // The value object is what we'll pass down to consuming components.
  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; //yeh humari valu jo kei  user login logout isko avail rkahta sabke liye nested taak kei liye bhi 
};

// 3. Create a custom hook for easy access to the context
export const useAuth = () => {
  return useContext(AuthContext);
};