import React from "react";
import { useState } from "react";

export default function SendEmailToReset() {
  const [email, setEmail] = useState({ resetemail: "" });
  const [error, setError] = useState();

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (email.resetemail) {
      console.log(email);
    } else {
      setError("Enter Your Email Id");
    }
  };

  return (
    <div className="grid place-content-center mt-32">
      <p className="text-3xl"> Enter your Email for Confirmation</p>
      <label htmlFor="email" className="text-sm mt-8">
        Enter your Email ID{" "}
      </label>
      <input
        type="email"
        name="resetemail"
        id="resetemail"
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
      <p className="text-red-700 mt-8">{error}</p>
    </div>
  );
}
