require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 4000


app.get('/',(req,res)=>{
    res.send('This is working!')
})
app.listen(PORT, () => console.log(`Listening on port:${PORT}`))