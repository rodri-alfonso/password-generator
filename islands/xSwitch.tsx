import { useState } from "preact/hooks";
import { purgedArray } from "../lib/utils.ts";
import { config, ConfigType } from "../signals/test.ts";

interface SwitchProps {
  isChecked: boolean;
  title: ConfigType;
  label: string;
}

export default function Switch(props: SwitchProps) {
  const { isChecked, label, title } = props;
  const [checked, setChecked] = useState(isChecked);

  const newList = [...config.value, title];

  function handleChange() {
    setChecked(!checked);

    if (!checked) config.value = newList;
    else config.value = purgedArray(title, newList);
  }

  return (
    <div className="bg-indigo-900 rounded-md p-4 flex justify-between items-center">
      <span className="text-gray-300 font-medium">{label}</span>
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          value={checked}
          checked={!!checked}
          onChange={handleChange}
          // className="sr-only"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
      </label>
    </div>
  );
}
