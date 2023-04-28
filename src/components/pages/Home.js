import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const userData = useSelector(state => state.user)
  console.log(userData)
  return (
    <>
      <h1> This is HOme page</h1>
      <p>{userData.name}</p>
    </>
  );
}
