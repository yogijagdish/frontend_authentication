import React from "react";
import { useState } from "react";
import {useSendUserResetEmailMutation} from "../../services/authAPI"

export default function SendEmailToReset() {
  const [email, setEmail] = useState({email:""});

  const [sendUserResetEmail,{isLoading}] = useSendUserResetEmailMutation();

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("email",email)
    const response = await sendUserResetEmail(email);
    console.log(response)
  };

  return (
    <div className="grid place-content-center mt-32">
      <p className="text-3xl"> Enter your Email for Confirmation</p>
      <label htmlFor="email" className="text-sm mt-8">
        Enter your Email ID{" "}
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="w-96 h-8 border-2 rounded-lg mt-4"
        onChange={handleChange}
      />
      <button
        type="submit"
        value="Send"
        className="mt-8 w-96 h-8 bg-sky-600 rounded-lg"
        onClick={handleClick}
      >
        {" "}
        Send Email
      </button>
    </div>
  );
}
