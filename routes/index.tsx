import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import Password from "../components/Password.tsx";
import Switch from "../islands/xSwitch.tsx";
import MagSlider from "../islands/xSlider.tsx";
import Button from "../islands/xButton.tsx";

const Section = (
  props: { title: string; children: JSX.Element },
) => {
  return (
    <section className="grid gap-2">
      <label className="text-blue-700 uppercase font-semibold">
        {props.title}
      </label>
      {props.children}
    </section>
  );
};

export default function Home() {
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return (
    <main className="grid place-items-center w-screen h-screen">
      <Head>
        <title>Password generator</title>
      </Head>
      <Password />

      <div className="grid gap-8 items-center max-w-md w-full" // onSubmit={handleSubmit}
      >
        <Section title="Length">
          <MagSlider />
        </Section>

        <Section title="Settings">
          <div className="grid gap-2">
            <Switch isChecked label="Include uppercase" title="UPPERCASE" />
            <Switch isChecked label="Include numbers" title="NUMBERS" />
            <Switch isChecked label="Include symbols" title="SYMBOLS" />
          </div>
        </Section>

        <Button className="bg-blue-400 text-white font-semibold py-3 rounded-lg">
          Generate password
        </Button>
      </div>
    </main>
  );
}
