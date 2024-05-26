import React from "react";

const Login = () => {
  const handleLogSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
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
      </div>
    </div>
  );
};

export default Login;
