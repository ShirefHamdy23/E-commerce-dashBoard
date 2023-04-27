const router = require("express").Router();
module.exports = router;
const connection = require("../DB/dbConnection");

const { body, validationResult } = require("express-validator");
const util =require("util");//helper
const bcrypt =require("bcrypt");
const crypto =require("crypto");
const { log } = require("console");
//login
router.post(
    "/login",
body('email').isEmail().withMessage('please enter a valid email'),
body('password')
.isLength({min: 8, max: 12})
.withMessage('password should bebetween (8--12) character'),
async (req, res) => {
    try {
        //validation request
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }
    //check if email exists (async/wait)
    const query =util.promisify(conn.query).bind(conn);//transform query mysql-->promise to use(await/asyinc)
    const user = await query(
         "select * from users where email = ?", 
         [req.body.email]
    );
    if (user.length == 0) {
        res.status(404).json({
            errors: [
                {
                    msg:"email or password not found !",
                },
            ],
        });
    }
    //compare hashed password
    const checkpassword= await bcrypt.compare(req.body.password,
        user[0].password
    );
    if(checkpassword){
       delete user[0].password;
        res.status(200).json(user[0]);
    } else {
        res.status(404).json({
            errors: [
                {
                    msg :"email or password not found !", 
                },
            ],
        });
    }

} catch (err) {
    console.log(err);
    res.status(500).json({ err: err});
    }
  }
);

// registration
router.post(
    "/register",
body('email').isEmail().withMessage('please enter a valid email'),
body('name')
.isString()
.withMessage('please enter a valid name')
.isLength({min: 10,max: 20})
.withMessage("name should bebetween (10--20) character"),
body('password')
.isLength({min: 8, max: 12})
.withMessage('password should bebetween (8--12) character'),
async (req, res) => {
    try {
        //validation request
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }
    //check if email exists (async/wait)
    const query =util.promisify(conn.query).bind(conn);//transform query mysql-->promise to use(await/asyinc)
    const checkEmailExists = await query(
         "select * from users where email = ?",
         [req.body.email]
    );
    if (checkEmailExists.length > 0) {
        res.status(400).json({
            errors: [
                {
                    msg:"email already exists!",
                },
            ],
        });
    }
    //prepare user object -->to save
    const userData = {
        name: req.body.name,
        email: req.body.email, 
        password: await bcrypt.hash(req.body.password, 10),
        token: crypto.randomBytes(16).toString("hex"),

    };
    //insert user object to db
    await query("insert into users set ?",userData);
  delete userData.password;
    res.status(200).json(userData);
} catch (err) {
    console.log(err);
    res.status(500).json({ err: err});
    }
  }
);

module.exports = router;
