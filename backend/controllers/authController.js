//authentication ka sarra kam yaha smbhalenge 

import User from "../models/User.js"; //model import kardia user ka
import bcrypt from "bcryptjs"  //bcrypt bula lia jo humare password haassh karega 
import jwt from "jsonwebtoken" //json webtoken jo seesion mau usser ko phechan kei  hei rakhega ''


/////////////////////  register a user ///////////////////////////////////////

export const registerUser = async (req,res)=>{
    try {

        const {email,password} = req.body;//yeh humne user se lelia email bhi aur password bhi as body 

        //check if user exist wo kaise karnege email se kyuki email unique hooni hai humari 
        const userExists= await User.findOne({email});


    // If the user already exists, send back a 400 Bad Request error.
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    //password ko secure karne keii liye hum salt issme random string sath paassworrd ko  mix kardenge aur hash wahi normal


    // "Salt" and "hash" the password to make it secure.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // yeh naya user with updated password
    const user=new User({  
        email:email,
        password:hashedPassword
    })

    await user.save();

    // Send a success response. We don't include the password.
    res.status(201).json({ message: 'User registered successfully' });

        
    } catch (error) {
        console.error(error);

    res.status(500).json({ message: 'server error' });
        
    }
}


////////////////  abb user register hogyaaa abb login ka kam karnaa hai ///////////////////////////////////
////////////////////////// check  the user, check their password, and then generate a JWT.///////////////////

export const  loginUser= async (req,res)=>{
    try {
        const {email,password}=req.body

        const user=await User.findOne({email});

        if(user &&(await bcrypt.compare(password,user.password))){
            //dono true hoogaye genrarte a jwt token jo user ko yadd rakhega jaab tak wo site pe hhai 
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{
                expiresIn:'30d'

            });

            //ab jwt bangyaa ab hume client ko id mail token dena 
            res.status(200).json({
                _id:user._id,
                email:user.email,
                token: token,
            });

        }
        else {
      // If user not found or password incorrect, send a 401 Unauthorized error.
      res.status(401).json({ message: 'Invalid email or password' });
    }   
    } catch (error) {
    // Log the full error for debugging.
    console.error(error);
    // Send a generic server error message.
    res.status(500).json({ message: 'Server Error' });
  }
}///abb jab yeh coomplete hogaya to hume ek login route banan hai wo routes  mai hoga  