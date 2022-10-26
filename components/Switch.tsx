import { JSX } from "preact";

export default function Switch(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className={`text-white ${props.className}`}
      {...props}
    />
  );
}
