import { JSX } from "preact";
import Slider from "../components/Slider.tsx";
import Switch from "../components/Switch.tsx";

import { generatePassword } from "../lib/utils.ts";
import { config, length, password } from "../signals/config.ts";

const Section = (
  props: { title: string; children: JSX.Element },
) => {
  return (
    <section className="grid gap-2 w-full">
      <label className="text-blue-700 uppercase font-semibold">
        {props.title}
      </label>
      {props.children}
    </section>
  );
};

export default function PasswordForm() {
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    password.value = generatePassword(length.value, config.value);
  }

  return (
    <form className="grid gap-6 w-full" onSubmit={handleSubmit}>
      <Section title="Length">
        <Slider />
      </Section>

      <Section title="Settings">
        <div className="grid gap-2">
          <Switch isChecked label="Include uppercase" listName="UPPERCASE" />
          <Switch isChecked label="Include numbers" listName="NUMBERS" />
          <Switch isChecked label="Include symbols" listName="SYMBOLS" />
        </div>
      </Section>

      <button className="bg-blue-400 text-white font-semibold py-3 rounded-lg w-full">
        Generate password
      </button>
    </form>
  );
}
