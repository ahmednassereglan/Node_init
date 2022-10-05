const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const sequelize = require('./config/db');

const Posts = require("./models/Posts")

app.use(express.json())

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")


app.get('/', async (req, res) => {
    
    let PostsData = await Posts.findAll();

    res.status(200).json({
        PostsData
    })

})


sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`listen -> http://localhost:${port}`)
    })
})


