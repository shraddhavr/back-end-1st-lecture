import  express from "express";
const app=express();
app.use(express.json());

app.get('/name',(req,res)=>{
    res.send("Shradha")
})
app.get('/address',(req,res)=>{
    res.send("Deolali-Pravara,tal-Rahuri,dis:A-Nagar")
})
app.get('/college',(req,res)=>{
    res.send("Rajarshi Shahu Mahavidyalaya Deolali-Pravara ")
})


app.listen(5000,()=>{
    console.log("Server is runing on port 5000");
})