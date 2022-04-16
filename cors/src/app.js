const express = require("express")
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.status(202).send("Hello")
})

app.post("/", (req,res)=>{
    res.send("Here is the post body")
    console.log(req.body)
})



app.listen(2000, ()=> console.log("port running on 2000"))
