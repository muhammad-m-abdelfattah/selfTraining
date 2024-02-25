const express = require('express')
const app = express()
const cors = require("cors")
app.use(express.json());

const db = require('./models')
app.use(cors());

//Routers

const postRouter = require('./routes/Posts')
app.use("/posts", postRouter);




db.sequelize.sync().then(() => {

app.listen(3001, () => {
    console.log("yea bud this thang working")
});

});
