const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require ('mongoose')

const Form=require("../backend/models/model.js")

app.use(cors());
app.use(express.json())




app.post('/save',(req,res)=>{
    console.log(req.body)
    var data={
     uname:req.body.uname,
     email:req.body.email,
     phonenumber:req.body.phonenumber,
     hobbies:req.body.hobbies
    }
    //console.log("data"+ data)

    input=Form(data)
    input.save()
    console.log("input"+input)

})

app.get('/table',(req,res)=>{
    Form.find()
    .then(addtable=>{res.json(addtable)})
})

app.delete("/delete/:id", (req, res) => {
    console.log(req.params);
    Form.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });
  
  app.put("/update/:id", (req, res) => {
    Form.findByIdAndUpdate(
      { _id: req.params.id },
      {
        uname: req.body.uname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        hobbies: req.body.hobbies
      }
    )
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });



app.listen(3001,()=>{
    console.log("server running on port 3001")

})
