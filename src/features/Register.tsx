import { useState } from "react";
import InputField from "../components/InputField";
const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [registerationForm, setRegisterationForm] = useState(initialState);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="register-page">
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputField id={"username"} label={"Username"} />
        <InputField id={"password"} label={"Password"} type="password" />
        <InputField
          id={"confirm-password"}
          label={"Confirm Password"}
          type="password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
