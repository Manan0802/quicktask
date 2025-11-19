import express from 'express'//express ko  import kara 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js'//taskroutes ko import 
import authRoutes from './routes/authRoutes.js'


dotenv.config();

const app=express();//yeh app ya jo bhi server hai usko express se banaya 
const PORT = 5000;//port define kardia 

app.use(cors());//cors middleware kko use karloo takki backend se fetch hojaaye 
app.use(express.json())//yeh humne express ko bata dia via middleware to understand the data frontend will send 

// Function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL); // Using your variable name
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

connectDB();

//abb humne check karna kei app kam kar raha 
app.get('/',(req,res)=>{
    res.send("hello from backend")
})

app.use('/api/tasks',taskRoutes);//app ko bola taskroute use karne ko 
app.use('/api/auth',authRoutes);//app se aauth mai authroute use kara 


//abb isko listen karwna kei work kare 

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})







//////////////////////////////  LEARNINGS ///////////////////////////////////
//sabse phke yhi express banaya and aall common three steps import app port check listen 
// app.get apna huume screen pe dega jawab backend wali 
//console karte hai wo hume terminal pe degaa 


// firr jab humne task routes banaya toh usko phle import karnaa fir app.use sei ukso use kare aaur ussme end point dalaenge kei khaa  tak jayega 
