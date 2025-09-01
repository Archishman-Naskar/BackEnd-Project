import mongoose from "mongoose";
import { HttpsProxyAgent } from "https-proxy-agent";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect('mongodb+srv://archi:archi@cluster0.ijl3rnb.mongodb.net/'); 

        console.log(`✅ MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("❌ MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default connectDB;
