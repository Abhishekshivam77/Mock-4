const express = require('express');
const User =  require('../models/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const userRouter = express.Router()
require('dotenv').config()
userRouter.get("/",(req,res)=>{
    res.send("Welcome to user section!")
})

//used to Register user
userRouter.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, address } = req.body;
    
        // Check if user already exists in the DB
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Creating new user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            address
        });
    
        await user.save();
    
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred' });
    }
});
  
  // used to  login any registered user
userRouter.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
    
        // Checking if the user already exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    
        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.secret);
    
        return res.status(201).json({"message":"User login Successfully", token });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred' });
    }
});
  


module.exports = {userRouter}