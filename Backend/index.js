import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRouter from './routes/book.route.js';
import userRouter from './routes/user.route.js'
dotenv.config({ path: "./.env" });
import cors from 'cors'



const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))



const PORT = process.env.PORT || 3000;
const MONGO_DB_URL = process.env.MONGODBURI


app.use(express.json({limit:"16kb"}))



app.use("/book", bookRouter)
app.use("/user", userRouter)





//connected to mongodb
const dbConnection = async() => {
  await  mongoose.connect(MONGO_DB_URL).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

}



dbConnection().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server listening on Port http://localhost:${PORT}`);
    });
})
