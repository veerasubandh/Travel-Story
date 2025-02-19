import Tour from '../models/Tour.js'

export const createTour = async (req,res)=> {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        res.status(200).json({success:true,message:"Sucessful",data:savedTour})
    } catch (error) {
        res.status(500).json({success:false,message:"Error"})
    }
}

export const updateTour = async(req,res)=>{
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id,{$set: req.body},{new:true});
        res.status(200).json({success:true,message:"Sucessfully Created",data:updatedTour})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Create"})
    }
}

export const deleteTour = async(req,res)=>{
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Sucessfully Deleted"})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Delete"})
    }
}

export const getSingleTour = async(req,res)=>{
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id);
        res.status(200).json({success:true,message:"Sucessful",data:tour})
    } catch (error) {
        res.status(404).json({success:false,message:"Not Found"})
    }
}

export const getAllTour = async(req,res)=>{
    const page = parseInt(req.query.page)
    try {
        const tours = await Tour.find({}).populate('reviews').skip(page*8).limit(8);
        res.status(200).json({success:true,count:tours.length,message:"Sucessful",data:tours})    
    } catch (error) { 
        res.status(404).json({success:false,message:"Not Found"})  
    }
}

export const getTourBySearch = async (req,res)=>{
    const city = new RegExp(req.query.city,"i");
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try {
        const tours = await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}})
        res.status(200).json({success:true,message:"Sucessful",data:tours})
    } catch (error) {
        res.status(404).json({success:false,message:"Not Found"})
    }
}

export const getFeaturedTour = async(req,res)=>{
    try {
        const tours = await Tour.find({featured:true}).limit(8);
        res.status(200).json({success:true,message:"Sucessful",data:tours})    
    } catch (error) { 
        res.status(404).json({success:false,message:"Not Found"})  
    }
}

export const getTourCount = async(req,res)=>{
    try {
       const tourCount = await Tour.estimatedDocumentCount();
       res.status(200).json({success:true,data:tourCount}) 
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Fetch"})
    }
}