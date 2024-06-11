const mongoose=require("mongoose")

export default async function(){
    try{
mongoose.connect("mongodb+srv://admin:usman47@cluster0.ha0a6k7.mongodb.net/blogApp")
console.log("connected to database")
    }catch(e){
console.log(e)
    }
}