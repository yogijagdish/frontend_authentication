import React from "react";
import { useState } from "react";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState({
    newpassword: "",
    confirmpassword: "",
  });
  const [error, setError] = useState();

  const handleChange = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    console.log(newPassword);
    if (newPassword.newpassword && newPassword.confirmpassword) {
      if (newPassword.newpassword === newPassword.confirmpassword) {
        console.log("data unsucessful");
      } else {
        setError("Password And Confirm Password Doesn't Match");
      }
    } else {
      setError("All Fields Required");
    }
  };

  return (
    <div className="grid place-content-center mt-32">
      <p className="text-3xl"> Reset Password</p>
      <label htmlFor="new password" className="text-sm mt-6">
        {" "}
        New Password{" "}
      </label>
      <input
        type="password"
        name="newpassword"
        id="newpassword"
        className="w-96 h-8 rounded-lg border-2 mt-4"
        onChange={handleChange}
      />
      <label htmlFor="confirm password" className="text-sm mt-6">
        Confirm Password{" "}
      </label>
      <input
        type="password"
        name="confirmpassword"
        id="confirmpassword"
        className="w-96 h-8 rounded-lg border-2 mt-4"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-sky-600 mt-6 rounded-lg w-96 h-8"
        onClick={handleClick}
      >
        {" "}
        Save{" "}
      </button>
      <p className="text-red-700 mt-8">{error}</p>
    </div>
  );
}
