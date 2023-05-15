import { IUser } from "./user.interface";
import User from "./user.model.schema";


export const createUserToDB=async(data:IUser):Promise<IUser>=>{
    console.log(data);
    const user = new User(data)
    console.log(user.fullName());

    return await user.save();

}

export const getUsersFromDb=async():Promise<IUser[]>=>{
    try{
        return await User.find({});
    }catch(err){
        throw new Error(err);
    }
}

export const getUserByIdFromDb=async(payload:string):Promise<IUser |null>=>{
    const id=payload;
    try{
        return await User.findById({_id:id});
    }catch(err){
        throw new Error(err);
    }
}

export const getAllAdminFromDB=async()=>{
  const admins = User.getAllAdmin();
  return admins;
}