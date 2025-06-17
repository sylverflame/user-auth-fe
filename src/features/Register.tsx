import { useState } from "react";
import InputField from "../components/InputField";
import { axiosInstance as axios } from "../api/axios";
import { END_POINTS } from "../api/api-urls";
import { Status } from "../constants";
import { RegisterUserSchema, type RegisterUser } from "../schemas/schemas";
import { useNavigate } from "react-router-dom";
import { handleError } from "../utils/helperFunctions";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const validatePassword = (userData: RegisterUser) => {
    RegisterUserSchema.parse(userData);
    if (!(password === confirmPassword)) {
      throw new Error("Confirm password does not match");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      validatePassword({
        username,
        firstName,
        lastName,
        password,
        confirmPassword,
      });

      const URL = import.meta.env.VITE_API_BASE_URL + END_POINTS.auth.register;
      const payload = { username, password, firstName, lastName };
      const response = await axios.post(URL, payload);
      if (response.status === Status.Created) {
        alert("User registered successfully!");
        navigate("/");
      }
    } catch (error: any) {
      handleError(error);
    }
  };
  return (
    <div className="register-page">
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputField
          id={"firstName"}
          label={"First Name"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          id={"lastName"}
          label={"Last Name"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <InputField
          id={"confirm-password"}
          label={"Confirm Password"}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
