import express from "express"


 const app = express()
 const port = process.env.PORT || 4000;

 app.get("/", (req,res) => {
    res.send('Hello world')
 })
 app.get("/abhiit", (req,res) => {
    res.send('Hello , I am Abhijit')
 })


 app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port : ${port}`);
    
 })
