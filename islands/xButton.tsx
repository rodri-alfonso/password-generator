import { JSX } from "preact";
import { config, length, password } from "../signals/test.ts";
import { generatePassword } from "../lib/utils.ts";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  console.log("🚀 ~ file: xButton.tsx ~ line 3 ~ password", password.value);
  function generate() {
    const generated = generatePassword(length.value, config.value);

    password.value = generated;
  }

  return <button {...props} onClick={generate} />;
}
