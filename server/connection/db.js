
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


// const  Connection= async()=>{
//    try{
//      await mongoose.connect(process.env.MONGO_URL)
//        console.log("db connect success");
//    }catch(err){
//       console.log("db connect error");
//    }
// }
const  Connection= async()=>{
   mongoose.connect(process.env.MONGO_URL)
.then(function(db){
    console.log("db connected success");
})
.catch(function(err){
console.log("db connected error",err);
       
})
}

export default Connection;