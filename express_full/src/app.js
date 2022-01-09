const express = require("express");
const res = require("express/lib/response");

app = express();

app.get("", (req,res)=>{
    console.log("hit to the index server page")
    res.send("<h1><i>hello</i></h1>")
    // fetch is not working server site
    // fetch("192.168.56.1:3000/fetching").then((response) => {
    //     response.json().then((data)=>{
    //         console.log(data)
    //     })
    // })
    console.log(req)

})

app.get("fetching", ()=>{
    res.send({"name" : "Subham"})
})

app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
})