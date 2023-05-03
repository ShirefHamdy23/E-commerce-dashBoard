import { Link } from "react-router-dom";

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
