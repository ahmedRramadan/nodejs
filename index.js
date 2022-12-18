import  express  from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import router from "./routes/products-router.js";
const app = express();
const port = 5000;
app.use(express.json())
app.use(cors())


const initialMongoose = async ()=>{
    try
    {
        await mongoose.connect('mongodb+srv://castil:castilpass@cluster0.a8ddlnz.mongodb.net/test?retryWrites=true&w=majority')
        console.log('connected to mongo db')
  }
    catch(err)
    {
        console.log(err)
    }
}
initialMongoose()


app.use('/',router)



app.listen(port,()=>console.log('server is running'))