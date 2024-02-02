import mongoose from "mongoose";
async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MONGODB CONNECTED...')
    } catch (error) {
        console.log(error)
    }
}

export default connect;