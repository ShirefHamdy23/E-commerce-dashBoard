import { log } from "console";
import { Link } from "react-router-dom";
import env from "../env/env";
import axios from "axios";
import {useState} from "react"

const Login = () => {
  const [input, setInput] = useState({
    email:"",
    password:""
  })
const [err,setErr]=useState<any>('')
  const handleChange = (e:any) => {
    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
  };
  console.log(input);
  
  const data={
    email:input.email,
    password:input.password
  }
  const signIn =async()=>{
    try {
      await axios.post(`${env.api}/signIn`,data)
    } catch (error) {
      setErr(error)
    }
  }
  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form method="POST">
          <div className="user-box">
            <input type="text"
            onChange={handleChange}
             name="email" required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password"
            onChange={handleChange}
            name="password" required />
            <label>Password</label>
          </div>
          <div>{err}</div>
          <Link onClick={()=>signIn()} to="#">
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