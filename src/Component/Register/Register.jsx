import React from "react";

const Register = () => {
  const handleRegSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, photo, email, password, confirmPassword);
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
