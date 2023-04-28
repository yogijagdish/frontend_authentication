import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useResgiterAPIMutation } from "../../services/authAPI";
import {storeToken} from "../../services/userTokenService"

export default function Register() {

  // it is the api for interacting with backend
  const [registerUser, {isLoading}] = useResgiterAPIMutation();

  // this state is used to store the information about the user that it logs in the form
  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
  });

  // holds the error if there is any observed from backend
  const [error, setError] = useState({});

  // naviagte the user to front part if there is right credentials are hit
  const navigate = useNavigate();

  // update the registeruser state when user enters anything in the input form
  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // when user clicks the submit button this function is called
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(registerData);

    // api call
    const response = await registerUser(registerData);
    // error encountered
    if (response.error) {
      console.log("error occured")
      setError(response.error.dara)
    }
    // correct credentials are enteredd
    if (response.data) {
      console.log(response.data)
      storeToken(response.data.token)
      navigate('/dashboard')
    }
  
  };

  return (
    <div className="grid place-content-center mt-52">
      <p className="text-2xl ml-8"> Register your account</p>

      {/* email field */}
      <label htmlFor="email" className="text-sm mt-6">
        {" "}
        Email ID
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="border-2 rounded-lg w-80 h-8 mt-4"
        onChange={handleChange}
      />
      <p className="text-red-700"> {error.email}</p>

      {/* name field */}
      <label htmlFor="name" className="text-sm mt-6">
        {" "}
        Name{" "}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="border-2 rounded-lg w-80 h-8 mt-4"
        onChange={handleChange}
      />
      <p className="text-red-700"> {error.name}</p>

      {/* password field */}
      <label htmlFor="password" className="text-sm mt-6">
        password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="border-2 rounded-lg w-80 h-8 mt-4"
        onChange={handleChange}
      />
      <p className="text-red-700"> {error.password}</p>    const access_token = {}


      {/* confirm password field */}
      <label htmlFor="confirmation" className="text-sm mt-6">
        Confirm password
      </label>
      <input
        type="password"
        name="password2"
        id="password2"
        className="border-2 rounded-lg w-80 h-8 mt-4"
        onChange={handleChange}
      />
      <p className="text-red-700"> {error.password2}</p>

      {/* submit button field */}
      <button
        type="submit"
        className="mt-6 w-80 h-8 bg-sky-600 rounded-lg"
        onClick={handleClick}
      >
        {" "}
        Register{" "}
      </button>

      {/* log in redirect */}
      <p className="mt-6 ml-16">
        {" "}
        Have an account?{" "}
        <NavLink to="/signin" className="text-blue-600">
          {" "}
          Log in
        </NavLink>
      </p>
      <p className="text-red-700"> {error.non_field_errors} </p>
    </div>
  );
}
