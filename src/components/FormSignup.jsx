import React, { useState } from "react";
import BookImg from "../Images/icon-desc.png";
import { useNavigate } from "react-router-dom";

const FormSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstnameErorr, setFirstNameError] = useState("");
  const [lastnameErorr, setLastnameErorr] = useState("");
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
    if (firstname.length < 4) {
      setFirstNameError("First Name must be at least 4 characters");
      isValid = false;
    } else {
      setFirstNameError("");
    }
    if (lastname.length < 4) {
      setLastnameErorr("Last Name must be at least 4 characters");
      isValid = false;
    } else {
      setLastnameErorr("");
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
      <div className="container mx-auto py-[40px]">
        <h1 className="text-[72px] font-black text-center text-secondary">
          Sign up for Libib!
        </h1>
        <p className="text-secondary text-[28px] font-light text-center my-[30px]">
          Your library catalog available anywhere, anytime.
        </p>
        <form
          onSubmit={formValidet}
          className="flex flex-col items-start justify-center w-[80%] mx-auto mt-[120px]"
        >
          <h1 className="text-[28px] my-[40px] font-black text-secondary">
            Account Info:
          </h1>
          {/* container  username */}
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <div className="flex flex-col w-full">
              <label
                className="text-[14px] text-secondary font-normal my-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="h-[40px] ps-5 border-[1px] border-main border-solid rounded focus:border-main focus:outline-none"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstnameErorr ? (
                <p className="p-3 bg-red-400 my-2">{firstnameErorr}</p>
              ) : null}
            </div>
            <div className="flex flex-col w-full">
              <label
                className="text-[14px] text-secondary font-normal my-2"
                htmlFor="lasttName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lasttName"
                name="lasttName"
                placeholder="Last Name"
                className="h-[40px] ps-5 border-[1px] border-main border-solid rounded focus:border-main focus:outline-none"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              {lastnameErorr ? (
                <p className="p-3 bg-red-400 my-2">{lastnameErorr}</p>
              ) : null}
            </div>
          </div>
          {/* container  Email&&Password */}
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <div className="flex flex-col w-full">
              <label
                className="text-[14px] text-secondary font-normal my-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="Email"
                className="h-[40px] ps-5 border-[1px] border-main border-solid rounded focus:border-main focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError ? (
                <p className="p-3 bg-red-400 my-2">{emailError}</p>
              ) : null}
            </div>
            <div className="flex flex-col w-full">
              <label
                className="text-[14px] text-secondary font-normal my-2"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                type="password"
                id="Password"
                name="Password"
                placeholder="Password"
                className="h-[40px] ps-5 border-[1px] border-main border-solid rounded focus:border-main focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError ? (
                <p className="p-3 bg-red-400 my-2">{passwordError}</p>
              ) : null}
            </div>
          </div>
          <button
            className="text-[19px] w-[50%] lg:w-[25%] text-white bg-bgbtn font-bold py-[9px] my-[15px] rounded-lg"
            type="submit"
          >
            Start My Library
          </button>
        </form>
        {/* the desc end  here */}
        <div className="hidden lg:flex bg-main gap-4 justify-center items-center w-[80%] mx-auto mt-[50px] py-[30px] px-[10px] rounded-lg">
          <img src={BookImg} alt="BookImg" />
          <p className="w-[90%] text-[16px] text-white font-normal">
            For organizations and school districts that need a way to manage
            multiple accounts with a centralized dashboard, Libib has created a
            new product offering: Libib District.{" "}
            <a href="#" className="font-bold underline">
              Learn More
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default FormSignup;
