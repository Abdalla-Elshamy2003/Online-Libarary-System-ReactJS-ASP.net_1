import React, { useEffect, useState } from "react";
import Logo from "../Images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const formValidet = (e) => {
    e.preventDefault();
    let isValid = true;

    if (email.indexOf("@") === -1 || email.length <= 14) {
      setEmailError("Invalid email");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center my-[50px]">
        {/* Lgin Form */}
        <form
          onSubmit={formValidet}
          className="drop-shadow-2xl py-[20px] w-[50%]"
        >
          <div className="flex items-center gap-[20px]">
            <img src={Logo} alt="Logo" />
            <h1 className="text-[28px] font-light text-secondary">
              Manager Login
            </h1>
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[40px] my-[15px] ps-2 text-main text-[16px] font-normal border-[1px] border-main border-solid rounded focus:border-main focus:outline-none"
            type="enail"
            required
            placeholder="Email"
          />
          {emailError ? (
            <p className="p-3 bg-red-400 my-2">{emailError}</p>
          ) : null}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[40px] my-[15px] ps-2 text-main text-[16px] font-normal border-[1px] border-main border-solid rounded focus:border-main focus:outline-none"
            type="password"
            placeholder="Password"
          />
          {passwordError ? (
            <p className="p-3 bg-red-400 my-2">{passwordError}</p>
          ) : null}
          <div className="flex gap-2">
            <input type="checkbox" name="remember" id="remember" />
            <label
              className="text-[16px] font-light text-secondary"
              htmlFor="remember"
            >
              Remember Me
            </label>
          </div>
          <button
            className="w-full text-[24px] text-white bg-bgbtn font-bold py-[9px] my-[15px] rounded-lg"
            type="sbmmit"
          >
            Sign In
          </button>
        </form>
        {/* Sign Up  Button */}
        <div className="drop-shadow-2xl py-[20px]">
          <h1 className=" text-[18px] font-medium">
            Don't have an account?
            <Link to="/signup" className="text-main ms-2 opacity-[70%]">
              Sign Up!
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
