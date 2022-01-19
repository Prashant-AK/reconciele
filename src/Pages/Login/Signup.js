import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./SignUpIn.css";
function Signup() {
  //   const history = useHistory();
  const [email, setEmail] = useState("");
  const [fullName, setfullName] = useState("");
  const [password, setPassword] = useState("");
  const signIN = (e) => {
    e.preventDefault();
    // console.log("hello I am pressed", email, password);
  };
  return (
    <div className="login">
      <div className="box_container">
        <div className="login_top_row">
          <div>
            {" "}
            <button className="btn btn-sm">
              {" "}
              <span style={{ margin: "0px 5px 0px 0px" }}>
                <FcGoogle />
              </span>{" "}
              Sign in with Google{" "}
            </button>
          </div>
          <div>
            {" "}
            <button className="btn btn-sm">
              <span style={{ margin: "0px 5px 0px 0px" }}>
                <FaFacebook style={{ color: "#3f51b5" }} />
              </span>{" "}
              Sign in with Facebook{" "}
            </button>
          </div>
        </div>
        <p style={{ textAlign: "center", margin: "10px" }}>
          <b>Or</b>
        </p>
        <form className="custom_form" onSubmit={(e) => signIN(e)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFullName"
              placeholder="Enter Your Full Name"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label class="form-check-label" for="invalidCheck2">
                <small>
                  I agree to{" "}
                  <Link to="#" style={{ color: "#7cbe90" }}>
                    the Terms & Services and Privacy Policy
                  </Link>
                </small>
              </label>
            </div>
          </div>
          <button
            type="submit"
            style={{
              //   border: "2px solid tomato",
              backgroundColor: "#dbdadb",
            }}
            className="btn btn-block "
          >
            <b>Create account</b>
          </button>
          <div>
            <p style={{ textAlign: "center" }}>
              <b>
                Don't have an account?{" "}
                <Link to="/login" style={{ color: "#7cbe90" }}>
                  Login
                </Link>{" "}
              </b>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
