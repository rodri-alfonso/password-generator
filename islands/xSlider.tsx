import { length } from "../signals/test.ts";
import Slider from "../components/Slider.tsx";

export default function MagSlider() {
  function handleChange(e) {
    length.value = Number(e.target.value);
  }

  return (
    <div className="w-full bg-indigo-900 h-14 p-4 flex items-center gap-6 rounded-md">
      <Slider
        value={length}
        onChange={handleChange}
        min="10"
        max="35"
      />
      <span className="text-gray-300 font-semibold">{length}</span>
    </div>
  );
}
