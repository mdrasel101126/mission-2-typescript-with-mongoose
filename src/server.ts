import mongoose from "mongoose";
import app from "./app";
const port:number =5000;




async function bootstrap(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
        console.log("Database connection successfull");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    }catch(err){
        console.log("Something went wrong!! ",err);
        process.exit(1);
    }
}

bootstrap();


  
  