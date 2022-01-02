import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import history from "../History";
import App from "../App";

const Login = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const checkLogin = () => {
    if (email === "khushi@gmail.com" && pwd === "12345678") {
      alert("yes");
      history.push("/App");
    } else {
      alert("Invalid Email or Password!!!");
    }
  };
  function handleSubmit(event) {
    event.preventDefault();
  }
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <>
      <h2 style={{ textAlign: "center" }}>&nbsp;&nbsp;Login </h2>
      <div>
        <form name="f1" className="add-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>&nbsp;&nbsp;&nbsp;Email</label>
            <input
              style={{ marginLeft: "14px" }}
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label>&nbsp;&nbsp;&nbsp;Password</label>
            <input
              style={{ marginLeft: "14px" }}
              type="password"
              placeholder="Enter Password"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <input
              type="submit"
              value="Login"
              className="btn btn-block"
              onClick={checkLogin}
            />
          </div>
          {}
        </form>
      </div>
    </>
  );
};

export default Login;
