const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('uploads'));
const cors = require("cors");
app.use(cors());

const auth = require("./routes/Auth");
const porducts = require("./routes/products");

app.listen(5500,"localhost",()=>{
    console.log("SERVER IS RUNNING !");
});

app.use("./routes/Auth.js",auth);
app.use("./routes/Products.js",porducts);

console.log("ALL IS DONE !");
