import { Link } from "react-router-dom";
import React from 'react';


const Login = () => {
  return (
    <>
      <div className="back"></div>
      <div className="login-box">
        <h2>Login</h2>
        <form method="POST">
          <div className="user-box">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>

          <Link to="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
// user







//USING useState , useEffect , APIS


// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";
// // import "../../css/Login.css";
// import axios from "axios";
// import { setAuthUser } from "../helper/Storage";
// import { useNavigate } from "react-router-dom";



// const Login = () => {
//   const navigate = useNavigate();
//   const [login, setLogin] = useState({
//     email: "",
//     password: "",
//     loading: false,
//     err: [],
//   });
//   const LoginFun = (e) => {
//     e.preventDefault();
//     setLogin({ ...login, loading: true, err: [] });
//     axios
//       .post("////APIII LINK", {
//         email: login.email,
//         password: login.password,
//       })
//       .then((resp) => {
//         setLogin({ ...login, loading: false, err: [] });
//         setAuthUser(resp.data);
//         navigate("/");
//       })
//       .catch((errors) => {
//         setLogin({
//           ...login,
//           loading: false,
//           err: errors.response.data.errors,
//         });
//       });
//   };
//   return (
//     <>
//       <div className="back"></div>
//       <div className="login-box">
//         <h2>Login</h2>
        
//       {login.err.map((error, index) => (
//         <Alert key={index} variant="danger" className="p-2">
//           {error.msg}
//         </Alert>
//       ))}
//         <form method="POST" OnSubmit={LoginFun}>
//           <div className="user-box">
//             <input type="email" name="email" required             value={login.email}
//                         onChange={(e) => setLogin({ ...login, email: e.target.value })}
//                         />
//             <label>Email</label>
//           </div>
//           <div className="user-box">
//             <input type="password" name="password" required              value={login.password}
//             onChange={(e) => setLogin({ ...login, password: e.target.value })} />
//             <label>Password</label>
//           </div>

//           <Button
//           className="btn btn-dark w-100"
//           variant="primary"
//           type="submit"
//           disabled={login.loading === true}>
//           Login
//         </Button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
// // user
