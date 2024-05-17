const mongoose=require("mongoose")

export default async function(){
    try{
mongoose.connect("mongodb://127.0.0.1:27017/next-blogging-application")
    }catch(e){
console.log(e)
    }
}