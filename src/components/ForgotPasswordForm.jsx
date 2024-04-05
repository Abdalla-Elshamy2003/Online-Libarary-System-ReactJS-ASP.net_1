import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const formValidet = (e) => {
    if (email.indexOf("@") === -1 || email.length <= 5) {
      setEmailError("Invalid email");
      e.preventDefault();
    } else {
      setEmailError("");
    }
  };
  return (
    <>
      <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[120px] my-[90px]">
        <div>
          <h1 className="text-[46px] lg:text-[72px] font-black text-secondary">
            Forgot Password?
          </h1>
          <p className="mt-4 text-[17px] text-secondary font-medium w-[80%] lg:w-[50%]">
            Enter the email address that you used to sign-up with. A password
            reset link will be emailed to you.
          </p>
          <form onClick={formValidet} className="mt-[40px] flex flex-col">
            <label
              htmlFor="email"
              className="text-[14px] font-light text-secondary"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="h-[40px] ps-5 border-[1px] border-main border-solid rounded focus:border-main focus:outline-none"
              type="text"
              id="email"
              name="email"
            />
            {emailError ? (
              <p className="p-3 bg-red-400 my-2">{emailError}</p>
            ) : null}
            <button
              className="text-[19px] w-[50%] lg:w-[25%] text-white bg-bgbtn font-bold py-[9px] my-[15px] rounded-lg"
              type="sbmmit"
            >
              Request Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
