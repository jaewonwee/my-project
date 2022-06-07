const express = require('express')
const app = express()

let port = process.env.PORT;
if(port==null || port==""){
    port = 4000;
}

app.listen(port, ()=>{
    console.log('App listening on port 4000')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

