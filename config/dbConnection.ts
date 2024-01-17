
import {MONGO_URL} from './config.ts'
import mongoose from 'mongoose'
export const dbConnection = async () => {
    try{
        const connection = await mongoose.connect(MONGO_URL)
        console.log(`MongoDB connected: ${connection.connection.host}`)
    }
    catch(err){
        console.log(err)
    }
}