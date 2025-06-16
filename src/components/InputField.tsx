import "./inputfield.css";

type InputFieldProps = {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  id,
  label,
  ...props
}: InputFieldProps): React.ReactNode => {
  return (
    <div className={"input-field-component"}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export default InputField;
