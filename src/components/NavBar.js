import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FcAbout, FcContacts } from "react-icons/fc";
import { getToken } from "../services/userTokenService";
import {BsWindowDash} from "react-icons/bs";

export default function Navbar() {
  const {access_token} = getToken()
  return (
    <nav className="flex p-4 bg-slate-500">
      {/* flex 1  */}
      <div className="basis-2/4 ml-48 px-32">
        {" "}
        <a href="/"> Jagdish Yogi</a>{" "}
      </div>

      {/* flex 2  */}
      <ul className="flex basis-2/4 justify-center space-x-28">
        <li>
          {" "}
          <Link to="/">
            {" "}
            <AiFillHome className="float-left mr-2" size={26} /> Home{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/about">
            {" "}
            <FcAbout className="float-left mr-2" size={26} /> About{" "}
          </Link>
        </li>
        {!access_token?<li>
          {" "}
          <Link to="/signin">
            {" "}
            <FcContacts className="float-left mr-2" size={26} /> Sign In
          </Link>
        </li>:
        <li> <Link to='/dashboard'><BsWindowDash className="float-left mr-2" size={26}/> Dashboard</Link></li>}
      </ul>
    </nav>
  );
}
