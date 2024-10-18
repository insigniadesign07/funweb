import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { DB_NAME } from './constants.js';
import express from 'express';
const app = express();

app.use(express())


dotenv.config({
    path: './env'
})


connectDB()
.then((result) => {
     app.listen(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Server is Running..!}`)   
}).catch((err) => {
    console.log("MONGODB CONNECTION FAILED: " , err)
});
/*
(async()=>{
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/
        ${DB_NAME}`)
        app.on("error:" , (error)=>{
            console.log("ERROR: " , error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Server is Running on ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("error: " , error)
        throw err
    }
})() */