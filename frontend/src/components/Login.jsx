import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate(); // Use navigate to programmatically navigate
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal open">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close modal and navigate back to home */}
            <Link to="/"
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email id"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('email', { required: 'Email is required' })}
              />
              <br/>
              {errors.email && <span className=" text-sm text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('password', { required: 'Password is required' })}
              />
              <br/>
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>

            {/* Login Button */}
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>Not Registered?! 
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Sign-up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

