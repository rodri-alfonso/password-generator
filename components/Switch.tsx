import { useState } from "preact/hooks";
import { purgedArray } from "../lib/utils.ts";
import { config, ConfigType } from "../signals/config.ts";

interface SwitchProps {
  isChecked: boolean;
  listName: ConfigType;
  label: string;
}

export default function Switch(props: SwitchProps) {
  const { isChecked, label, listName } = props;
  const [checked, setChecked] = useState(isChecked);

  const newList = [...config.value, listName];

  function handleChange() {
    setChecked(!checked);

    if (!checked) config.value = newList;
    else config.value = purgedArray(listName, newList);
  }

  return (
    <div className="bg-indigo-900 rounded-md p-4 flex justify-between items-center">
      <span className="text-gray-300 font-medium">{label}</span>
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          checked={!!checked}
          onChange={handleChange}
        />
        <div />
      </label>
    </div>
  );
}
