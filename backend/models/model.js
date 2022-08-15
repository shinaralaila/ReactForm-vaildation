const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://userone:userone@cluster0.elmop.mongodb.net/formdb?retryWrites=true&w=majority",()=>{console.log("connected to formdb")})

const formSchema={
    
    uname:String,
    email:String,
    phonenumber:Number,
    hobbies:String

}
const Form=mongoose.model("Form",formSchema)
module.exports=Form;