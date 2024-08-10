import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    setIsSignForm(!isSignForm);
  };

  const handleSubmit = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message)
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
         <p className="text-red-500 font-bold text-sm ">{errorMessage}</p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
         <p className="text-red-500 font-bold text-sm ">{errorMessage}</p>
        <buttton
          className="p-4 my-6 bg-red-700 w-full cursor-pointer"
          onClick={handleSubmit}
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </buttton>
        <p onClick={handleButtonClick} className="py-8 cursor-pointer">
          {isSignForm
            ? "New to Netflix ? Sign Up Now"
            : "Already registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
