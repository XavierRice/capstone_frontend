import React, { useContext, useState } from "react";
import { AuthData } from "../Provider/AuthProv";
import LoginForm from "../Components/userManagement/LoginForm";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'

const LoginPage = () => {

  const navigate = useNavigate();

  const { API, setUser, setToken } = useContext(AuthData);
  const [loginError, setLoginError] = useState("")

  const handleLogin = async (userData) => {
    try {
      const response = await API.post("/users/login", userData);
      console.log("Login response:", response.data);

      const { user, token } = response.data;
      setUser(user);
      setToken(token);
      localStorage.setItem('token', token)
      setLoginError("")
      navigate("/")
    } catch (error) {
      setLoginError("Failed to log in. Please check your username and password.")
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-page">
    <div className="">
      <LoginForm onSubmit={handleLogin} loginError={loginError} />
    </div>
  </div>
  );
};

export default LoginPage;
