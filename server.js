const express = require("express");
const app = express();
const path = require("path");

// Router
const homeRouter = require("./routes/public");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));



app.use("/", homeRouter);



app.listen(3000, ()=>{
    console.log("My server is running");
})