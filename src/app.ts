import express, { Application} from 'express';
import cors from 'cors';
import userRoute from './app/modules/user/user.route'
const app:Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/user",userRoute);


/**
 * step1:Interface
 * step2:Schema
 * step3:Model
 * step4:Database Query
 */

export default app;