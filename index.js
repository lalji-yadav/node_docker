const express = require('express')
const app = express()

const port = 3000

app.get('/',(req,res)=>{
    res.send("<h1>Hello Anubhav yadav</h1>")
})

app.listen(port, ()=>{
    console.log('server running aa port123', `${port}`);
});
