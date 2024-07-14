import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import router from './routes/book.route.js';
dotenv.config({ path: "./.env" });

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_DB_URL = process.env.MONGODBURI

app.use("/book", router)





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
