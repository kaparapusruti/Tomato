import mongoose from "mongoose";
 
export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://neha9nanda:bJwoQLl5qQWpvwY0@cluster0.xs3egbl.mongodb.net/TOMATO')
    .then (()=>console.log('db connected'));
    
}  