import React from "react";

const Register = () => {
  return (
    <div>
      <form action="">
        <div>
          <p>Name</p>
          <input
            type="text"
            placeholder="Type your name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <p>Photo</p>
          <input
            type="text"
            placeholder="Photo url"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            placeholder="Type your email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            placeholder="Type your password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="Type your confirm password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-active btn-accent">Register</button>
      </form>
    </div>
  );
};

export default Register;
