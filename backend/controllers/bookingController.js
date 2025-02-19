import Booking from '../models/Booking.js'

export const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({success:true,message:"Tour Booking Successful",data:savedBooking});
    } catch (error) {
        res.status(500).json({success:false,message:"Tour Booking Failed"});
    }
}

export const getBooking = async(req,res)=>{
    const id = req.params.id;
    try {
        const book = await Booking.findById(id);
        res.status(200).json({success:true,message:"Successful",data:book})
    } catch (error) {
        res.status(404).json({success:false,message:"Not Found"});       
    }
}

export const getAllBooking = async(req,res)=>{
    try {
        const books = await Booking.find();
        res.status(200).json({success:true,message:"Successful",data:book})
    } catch (error) {
        res.status(500).json({success:false,message:"Internal Server Error"});       
    }
}