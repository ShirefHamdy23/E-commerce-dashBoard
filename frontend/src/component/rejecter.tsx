import { Link } from "react-router-dom";

const Rejecter = () => {
  return (
    <>
      <div className="back"></div>
      <div className="login-box">
        <h2>Rejecter</h2>
        <form method="POST">
          <div className="user-box">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="phone" name="phone" required />
            <label>phone</label>
          </div>

          <Link to="#">
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
