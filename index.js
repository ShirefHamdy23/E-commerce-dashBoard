const express = require("express");
const app = express();
const db = require("./DB/dbConnection");
const userRouter = require("./routes/usersRoutes");
const crudRouter = require("./routes/products");//add like this
const categoryRouter = require("./routes/category");
const ordersRouter = require("./routes/orders");
db.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.set('frontend', '/frontend');
const auth = require("./routes/Auth");
const { cookie } = require("express-validator");

app.listen(5500,"localhost",()=>{
    console.log("SERVER IS RUNNING !");
});

app.use("/crudOrders", ordersRouter);
app.use("/users", userRouter);//add like this
app.use("/crudCategory", categoryRouter);
app.use("/crud", crudRouter);
console.log("ALL IS DONE !");

