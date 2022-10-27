import { length } from "../signals/config.ts";
import { MAX_LENGTH, MIN_LENGTH } from "../lib/config.ts";

export default function Slider() {
  function handleChange(currentLength: number) {
    length.value = Number(currentLength);
  }

  return (
    <div className="w-full bg-indigo-900 h-14 p-4 flex items-center gap-6 rounded-md">
      <input
        type="range"
        value={length.value}
        onChange={(e) =>
          handleChange(Number((e.target as HTMLInputElement).value))}
        min={MIN_LENGTH}
        max={MAX_LENGTH}
      />
      <span className="text-gray-300 font-semibold">{length}</span>
    </div>
  );
}
