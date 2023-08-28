import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { setUser } from "../../../redux/features/users/usersSlice";

interface FormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const dispatch = useAppDispatch();

  const handleSignup = (data: FormData) => {
    console.log(data);
    dispatch(setUser(data.email)); // Store only non-sensitive data in the Redux store
  };

  const [signUpError, setSignUpError] = useState("");

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 bg-violet-700">
        <h2 className="text-xl text-center text-white">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password" // Change the type to "password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6}$/,
                  message: "Password must include uppercase, lowercase, and a number",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <input className="w-full btn btn-outline text-white mt-2" type="submit" value="Sign Up" />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="text-center text-white">
          Already have an account? <Link className="text-black" to="/login">Please Login</Link>
        </p>
        <div className="divider text-white">OR</div>
        <button className="w-full btn btn-outline text-white">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
