import { JSX } from "preact";

export default function Slider(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="range"
      className={`text-white ${props.className}`}
      {...props}
    />
  );
}
