import mongoose from 'mongoose'

let isConnected = false;

export const connectionToDB = async () => {
    mongoose.set('strictQuery',true)

    if(isConnected){
        console.log('MondoDB is already connected')
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'NEXTAUTHDB',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected= true;
        console.log('MongoDB connected')
    }
    catch(err){
        console.log(err)
    }
}