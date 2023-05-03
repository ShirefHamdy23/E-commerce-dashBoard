const express = require("express");
const app = express();
const db = require("./DB/dbConnection");
const userRouter = require("./routes/usersRoutes");
const crudRouter = require("./routes/CRUD");
db.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.set('front-end', '/front-end');
const auth = require("./routes/Auth");
const products = require("./routes/products");
const { cookie } = require("express-validator");

app.listen(5500,"localhost",()=>{
    console.log("SERVER IS RUNNING !");
});

app.use("/users", userRouter);
app.use("/crud", crudRouter);
app.use("./routes/Auth.js", auth);
app.use("./routes/products.js", products);
console.log("ALL IS DONE !");

