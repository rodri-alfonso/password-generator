import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import Slider from "../components/Slider.tsx";
import Switch from "../components/xSwitch.tsx";
import Password from "../components/Password.tsx";

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
  const length = 10;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="grid place-items-center w-screen h-screen">
      <Head>
        <title>Fresh App</title>
      </Head>
      <Password />

      <form
        className="grid gap-8 items-center max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <Section title="Length">
          <div className="w-full bg-indigo-900 h-14 p-4 flex items-center gap-6 rounded-md">
            <Slider
              value={length}
              // onChange={(e) => setLength(e.target.value)}
              min="10"
              max="35"
            />
            <span className="text-gray-300 font-semibold">{length}</span>
          </div>
        </Section>

        <Section title="Settings">
          <div className="grid gap-2">
            <Switch isChecked label="Include uppercase" title="UPPERCASE" />
            <Switch isChecked label="Include numbers" title="NUMBERS" />
            <Switch isChecked label="Include symbols" title="SYMBOLS" />
          </div>
        </Section>

        <button className="bg-blue-400 text-white font-semibold py-3 rounded-lg">
          Generate password
        </button>
      </form>
    </main>
  );
}
