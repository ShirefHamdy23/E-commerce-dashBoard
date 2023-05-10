const express = require("express");
const app = express();
const db = require("./DB/dbConnection");
const userRouter = require("./routes/usersRoutes");
const crudRouter = require("./routes/products");//add like this//add like this
const categoryRouter = require("./routes/category");
const ordersRouter = require("./routes/orders");
const usersMange = require("./routes/userMange");
const http = require('http');
db.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.set('frontend', '/frontend');
const { cookie } = require("express-validator");
const products = require("./routes/products");

app.listen(55300,"localhost",()=>{
    console.log("SERVER IS RUNNING !");
});
app.use("/crudOrders", ordersRouter);
app.use("/usersValid", userRouter);//add like this//add like this
app.use("/crudCategory", categoryRouter);
app.use("/crudProducts", crudRouter);
app.use("/usersMange", usersMange);
console.log("ALL IS DONE !");

