import React, { useEffect, useState } from "react";
import Navbar from "../NavBar"
import Logout from "./Logout";
import { useGetUserDataQuery } from "../../services/authAPI";
import { getToken } from "../../services/userTokenService";

import { useDispatch } from "react-redux";
import { setUserData } from "../../features/userSlice";

import { useChangeUserPasswordMutation } from "../../services/authAPI";

export default function Dashboard() {

  const [changeUserPassword, {isLoading}] = useChangeUserPasswordMutation();

  const [newPassword,setNewPassword] = useState({password:"",password2:""})

  const [serverError,setServerError] = useState({});
  const [sucessfulMsg,setSucessfulMsg] = useState({});

  // const {access_token} = getToken();

  // const dispatch = useDispatch()

  // const [useData,setUseData] = useState({id:"",email:"",name:""})

  // const {data,isSuccess} = useGetUserDataQuery(access_token)

  const handleChange = (e) => {
    setNewPassword({...newPassword,[e.target.name]:e.target.value})
  }

  const {access_token} = getToken();
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(newPassword)
    const response = await changeUserPassword({ newPassword, access_token})
    console.log(response)
    if (response.error){
      setServerError(response.error.data.error)
    }
    if (response.data) {
      console.log(response)
      setSucessfulMsg(response.data)
    }

  }

  // if we want to use the access data in the same componennt
// useEffect(()=>{
//   if (data && isSuccess){
//     setUseData({
//       id:data.id,
//       email:data.email,
//       name:data.name
//     })
//   }
// },[data,isSuccess])


// //  if we want to use data in other component also
// useEffect(()=>{
//   if (data && isSuccess){
//     dispatch(setUserData({
//       id:data.id,
//       email:data.email,
//       name:data.name
//     }))
//   }
// },[data,isSuccess,dispatch])

 
  return (
    <>
    <Navbar/>
      <p> this is dashboard</p>
      {/* <p> {useData.id}</p>
      <p> {useData.email}</p>
      <p> {useData.name}</p> */}
      <div className="grid place-content-center">
        <p className="text-lg m-4"> Change Your Password Here</p>
      <label htmlFor="Password" className="text-sm mt-6">Enter New Password</label>
      <input type="password" name="password" id="newpassword" className="border-2 rounded-lg h-8 w-72" onChange={handleChange}/>
      <p className="text-red-700"> {serverError.password}</p>
      <label htmlFor="password" className="text-sm mt-6">Confirm Password </label>
      <input type="password" name="password2" id="confirmpassword" className="border-2 rounded-lg h-8 w-72" onChange={handleChange}/>
      <p className="text-red-700"> {serverError.password2}</p>
      <div className="text-lg border-2 w-24 h-8 m-4 rounded-lg bg-sky-500">
      <button type="submit" className="ml-4" onClick={handleClick}>Submit</button>
      </div>
      <p className="text-red-700"> {serverError.non_field_errors}</p>
      <p className="text-green-700">{sucessfulMsg.msg}</p>
      </div>
      <Logout/>
    </>
  );
}
