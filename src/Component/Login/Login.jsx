import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin, setUser, fbLogin } = useContext(AuthContext);
  console.log(loginUser);

  const handleLogSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    loginUser(email, password);
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error.message));
  };
  const handleFbLogin = () => {
    fbLogin()
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-[40%] min-w-[500px] mx-auto border-2 border-red-500 p-5">
      <div className="w-[100%] text-center">
        <form action="" onSubmit={handleLogSubmit}>
          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Type your password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button
            type="submit"
            className="btn btn-active btn-accent w-full my-2"
          >
            Login
          </button>
        </form>
        <button className="btn btn-secondary" onClick={handleGoogleLogin}>
          Google login
        </button>
        <button className="btn btn-primary" onClick={handleFbLogin}>
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
