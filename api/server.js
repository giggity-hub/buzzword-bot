const express = require('express');
const app = express()


// app.get('/', (req, res)=>{
//     res.send('hellol world')
// })

app.get('*', (req, res)=>{
    const {userSubmittedUrl} = req.query;

    console.log(userSubmittedUrl);
    res.send('yeah boi')
})

app.listen(3080)