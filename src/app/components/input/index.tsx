import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="mb-4 w-full h-16 rounded-md bg-egg-shell text-default p-3 "
    />
  );
};

export default Input;
