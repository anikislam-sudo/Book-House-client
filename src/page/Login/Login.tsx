import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { setLoading } from "../../../redux/features/users/usersSlice";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  
  const { user, isLoading } = useAppSelector((state) => state.users); // Renamed isLoading to loading
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleLogin = (data: FormData) => {
    console.log(data);
    dispatch(setLoading(true)); // Indicate that a loading process is ongoing
    // Perform login actions, API calls, etc.
    // After successful login, setUser action should be dispatched with the user's data
  };

  useEffect(() => {
    if (user.email && ! isLoading) {
      navigate("/");
    }
  }, [user.email,  isLoading]);

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7 bg-violet-700">
        <h2 className="text-xl text-center text-white">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
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
              })}
              className="input input-bordered w-full max-w-xs"
            />
            <span className="label-text pb-4 text-white">Forget Password</span>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <input
            className="w-full btn btn-outline text-white"
            type="submit"
            value="Login"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="text-center text-white">
          New to BOOKSCLUB?
          <Link className="text-black " to="/signup">
            Create new account
          </Link>
        </p>
        <div className="divider text-white">OR</div>
        <button className="w-full btn btn-outline text-white">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
