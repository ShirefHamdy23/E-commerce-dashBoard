import { Link } from "react-router-dom";
import React, {  useState } from "react";
import env from "../env/env";
import axios from "axios";


const Rejecter = () => {
  const [input, setInput] = useState({
    firstName:"",
lastName:"",
email:"",
number:"",
password:"",
confirmPassword:""
  })
  console.log(input);
  
const [err,setErr]=useState<any>('')
  const handleChange = (e:any) => {
    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
  };
  const data={
    email:input.email,
    firstName:input.firstName,
    lastName:input.lastName,
    number:input.number,
    password:input.password,
    confirmPassword:input.confirmPassword
  }
  const signup =async()=>{
    try {
      await axios.post(`${env.api}/signup`,data)
    } catch (error) {
      setErr(error)

      
    }
  }
  return (
    <>
      <div className="login-box">
        <h2>Rejecter</h2>
        <form method="POST">
          <div className="user-box">
            <input type="text" onChange={handleChange} name="firstName" required />
            <label>First-Name</label>
          </div>
          <div className="user-box">
            <input type="text"onChange={handleChange} name="lastName" required />
            <label>Last-Name</label>
          </div>
          <div className="user-box">
            <input type="text "onChange={handleChange} name="email" required />
            <label>Email-Address</label>
          </div>
          <div className="user-box">
            <input type="phone"onChange={handleChange} name="number" required />
            <label>Phone-Number</label>
          </div>
          <div className="user-box">
            <input type="password" onChange={handleChange}name="password" required />
            <label>password</label>
          </div>

          <div className="user-box">
            <input type="password"onChange={handleChange} name="confirmPassword" required />
            <label>confirm-password</label>
          </div>
<div>{err}</div>
          <Link onClick={()=>signup()} to="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Rejecter
          </Link>
        </form>
      </div>
    </>
  );
};

export default Rejecter;
// user