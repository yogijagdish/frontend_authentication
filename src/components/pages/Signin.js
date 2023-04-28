import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginAPIMutation } from "../../services/authAPI";
import { getToken, storeToken } from "../../services/userTokenService";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../features/authSlice";

export default function Signin() {

  // stores the data entered by the user in sign in form
  const [signData, setSignData] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  // api for connecting with backend
  const [loginUser, {isLoading}] = useLoginAPIMutation();

  // stores the error if occured
  const [error, setError] = useState({});

  // redirect page when required
  const navigate = useNavigate();

  // update the sigData state if any chnage in sigin form accurs
  const handleChange = (e) => {
    setSignData({ ...signData, [e.target.name]: e.target.value });
  };


  // this function is called when user hits the submit button
  const handleClick = async (e) => {
    e.preventDefault();
    // api call
    const response = await loginUser(signData)
    // if error occurs
    if (response.error){
      setError(response.error.data.error)
    }
    // if right credentials occurs
    if (response.data){
      // console.log(response.data)
      storeToken(response.data.token)
      let {access_token} = getToken();
      dispatch(setUserToken({access_token:access_token}));
      navigate('/dashboard')

    }
  };

  let {access_token} = getToken()

  useEffect(()=>{
    dispatch(setUserToken({access_token:access_token}));
  },[access_token,dispatch])
  return (
    <>
      <div id="form" className="grid place-content-center mt-52">
        <p className="ml-32 text-2xl"> Sign In </p>


        {/* username fields */}
        <label htmlFor="username" className="text-sm mt-6">
          {" "}
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="user"
          placeholder="email address"
          className="w-80 h-8 mt-4 border-2 rounded-lg"
          onChange={handleChange}
        />
        <p className="text-red-700"> {error.email} </p>

        {/* password field */}
        <label htmlFor="password" className="text-sm mt-6">
          {" "}
          Password{" "}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="w-80 h-8 mt-4 border-2 rounded-lg"
          onChange={handleChange}
        />
        <p className="text-red-700"> {error.password} </p>

        {/* remember me field */}
        <div className="mt-6">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remeber"> Remember Me </label>
          <NavLink to="/sendemail" className="ml-16">
            {" "}
            Forget Password?{" "}
          </NavLink>
        </div>

        {/* submit button */}
        <button
          type="submit"
          className="mt-6 bg-sky-600 w-80 h-8 rounded-lg"
          onClick={handleClick}
        >
          {" "}
          Submit{" "}
        </button>

        <p className="text-red-700"> {error.non_field_errors} </p>

        {/* redirect ti register page */}
        <p className="mt-4 ml-12">
          {" "}
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-600">
            {" "}
            Register{" "}
          </NavLink>
        </p>
      </div>
    </>
  );
}
