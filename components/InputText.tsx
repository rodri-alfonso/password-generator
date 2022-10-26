import { JSX } from "preact";

export default function InputText(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className={`text-white ${props.className}`}
      {...props}
    />
  );
}
