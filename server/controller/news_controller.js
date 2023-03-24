
import News from "../model/newsSchema.js"

export const getNews = async (req,res)=>{
    
    try{

        let data = await News.find({});
        res.status(200).json(data);
    }catch(err){
        console.log(error);
        response.status(500).json(error);
    }
}