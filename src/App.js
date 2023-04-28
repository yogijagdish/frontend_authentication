import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Signin from "./components/pages/Signin";
import Register from "./components/pages/Register";
import SendEmailToReset from "./components/pages/SendEmailToReset";
import ResetPassword from "./components/pages/ResetPassword";
import Dashboard from "./components/pages/Dashboard";
import { useSelector } from "react-redux";


function App() {
  const {access_token} = useSelector(state=> state.auth)
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="about" element={<AboutMe/>}/>
              <Route path="signin" element={!access_token?<Signin/>:<Navigate to='/dashboard'/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="sendemail" element={<SendEmailToReset/>}/>
              <Route path="resetpassword" element={<ResetPassword/>}/>
             </Route>
             <Route path="/dashboard" element={access_token?<Dashboard/>:<Navigate to="/signin"/>}/>
        </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
