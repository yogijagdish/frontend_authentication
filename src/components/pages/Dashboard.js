import React, { useEffect, useState } from "react";
import Navbar from "../NavBar"
import Logout from "./Logout";
import { useGetUserDataQuery } from "../../services/authAPI";
import { getToken } from "../../services/userTokenService";

import { useDispatch } from "react-redux";
import { setUserData } from "../../features/userSlice";


export default function Dashboard() {

  const {access_token} = getToken();

  const dispatch = useDispatch()

  const [useData,setUseData] = useState({id:"",email:"",name:""})

  const {data,isSuccess} = useGetUserDataQuery(access_token)

  // if we want to use the access data in the same componennt
useEffect(()=>{
  if (data && isSuccess){
    setUseData({
      id:data.id,
      email:data.email,
      name:data.name
    })
  }
},[data,isSuccess])


//  if we want to use data in other component also
useEffect(()=>{
  if (data && isSuccess){
    dispatch(setUserData({
      id:data.id,
      email:data.email,
      name:data.name
    }))
  }
},[data,isSuccess,dispatch])

 
  return (
    <>
    <Navbar/>
      <p> this is dashboard</p>
      <p> {useData.id}</p>
      <br/>
      <p> {useData.email}</p>
      <br/>
      <p> {useData.name}</p>
      <Logout/>
    </>
  );
}
