import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="register-page">
      <InputField id={"username"} label={"Username"} />
      <InputField id={"password"} label={"Password"} type="password" />
      <InputField
        id={"confirm-password"}
        label={"Confirm Password"}
        type="password"
      />
    </div>
  );
};

export default Login;
