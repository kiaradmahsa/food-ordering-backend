import { Request , Response } from "express";
import User from "../models/user";

const createCurrentUser = async(req: Request , res:Response) =>{
    try{
        const {auth0Id} = req.body;
        //check if the user exist
        const existingUser = await User.findOne({ auth0Id });

        if( existingUser ){
            return res.status(200).send();
        }

        //create new user if it doesn't exist
        const newUser = new User(req.body);
        await newUser.save();

        //return the user object to the calling client(frontend)
        //201 means its created
        res.status(201).json(newUser.toObject());
        
    }catch(error){
        res.status(500).json({message: "Error creating user"});
    }
}

export default {
    createCurrentUser,
}