import { useState } from "react";
import InputField from "../components/InputField";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
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
    </div>
  );
};

export default Login;
