import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAllAdminFromDB, getUserByIdFromDb, getUsersFromDb } from "./user.service";
import { IUser } from "./user.interface";

export const createUser= async(req:Request, res:Response,next:NextFunction) => {
   const data=req.body;
   const user =await createUserToDB(data);
   res.status(200).json({
      status:"success",
      data:user,
   })
}

export const getUser=async(req:Request,res:Response)=>{
   const users=await getUsersFromDb();
   res.status(200).json({
      status:"success",
      data:users,
     })
}

export const getUserById=async(req:Request,res:Response)=>{
   const {id}=req.params;
   const user=await getUserByIdFromDb(id);
   res.status(200).json({
      status:"success",
      data:user,
     })
}

export const getAllAdmins=async(req:Request,res:Response)=>{
   const admins = await getAllAdminFromDB();
   res.status(200).json({
      status:"success",
      data:admins,
     })
}


//Route->Controller->Service