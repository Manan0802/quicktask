import mongoose from "mongoose";

const userSchmea=mongoose.Schema({
    email: {
    type: String,
    required: true, // This field is mandatory.
    unique: true,   // Every user must have a unique email.
  },
  // The user's hashed password.
  password: {
    type: String,
    required: true, // This field is also mandatory.
  },
},
{Timestamp:true})

const User=mongoose.model('User',userSchmea);

export default User