import React from "react";

import { useNavigate } from "react-router-dom";
import { deleteToken } from "../../services/userTokenService";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../../features/authSlice";
import { unSetUserData } from "../../features/userSlice";
export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    navigate("/signin");
    dispatch(unSetUserToken({access_token:null}))
    dispatch(unSetUserData({id:"",email:"",name:""}))
    deleteToken();
  };
  return (
    <>
      <button
        type="submit"
        className="w-90 h-8 bg-sky-600 rounded-lg"
        onClick={handleClick}
      >
        Log Out
      </button>
    </>
  );
}
