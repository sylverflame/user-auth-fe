import { useState } from "react";
import { END_POINTS } from "../api/api-urls";
import { axiosInstance as axios } from "../api/axios";
import InputField from "../components/InputField";
import { Status } from "../constants";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { handleError } from "../utils/helperFunctions";
import type { User } from "../context/AuthContext";

const Login = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const performLogin = async (username: string, password: string) => {
    try {
      const URL = API_BASE_URL + END_POINTS.auth.login;
      const response = await axios.post(URL, { username, password });
      if (response.status === Status.Success) {
        const user: User = (response.data as any).user;
        login(user);
      }
    } catch (error: any) {
      handleError(error);
    }
  };
  const handleLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    performLogin(username, password);
  };

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => handleLoginFormSubmit(e)}>
        <InputField
          id={"username"}
          label={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          id={"password"}
          label={"Password"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{"Log in"}</button>
      </form>
      <p>Not registerd yet?</p>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
