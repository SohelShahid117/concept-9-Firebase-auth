import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Register = () => {
  // const AuthInfo = useContext(AuthContext);
  // console.log(AuthInfo);
  const { registerUser } = useContext(AuthContext);
  console.log(registerUser);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleRegSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, photo, email, password, confirmPassword);
    registerUser(email, password);

    if (!/@gmail\.com$/.test(email)) {
      setEmailError("email address must end with @gmail.com");
      return;
    }
    if (password.length < 6) {
      setError("password must be minimum 6 charecter");
      return;
    }
    if (password !== confirmPassword) {
      setError("password not match with confirm password");
      return;
    }
    if (!/\d{2,}$/.test(password)) {
      setError("password must end with minimum 2 digit");
      return;
    }
    if (!/[@#$%&^*]/.test(password)) {
      setError("pls add an special charecter as like as-@,#,$,%,&,^,*");
      return;
    }
    setError("");
    setEmailError("");
  };
  return (
    <div className="w-[40%] min-w-[500px] mx-auto border-2 border-red-500 p-5">
      <div className="w-[100%] text-center">
        <form action="" onSubmit={handleRegSubmit}>
          <div>
            <p>Name</p>
            <input
              type="text"
              name="name"
              placeholder="Type your name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Photo</p>
            <input
              type="text"
              name="photo"
              placeholder="Photo url"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {emailError && <small className="text-red-800">{emailError}</small>}
          <div>
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Type your password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Type your confirm password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {error && <small className="text-red-600">{error}</small>}
          <button
            type="submit"
            className="btn btn-active btn-accent w-full my-2"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
