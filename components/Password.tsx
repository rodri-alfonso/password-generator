// import { useConfig } from "../context/config";
import Alert from "./Alert/index.tsx";
import { useState } from "preact/hooks";
import CopyIcon from "../assets/Copy.tsx";

export default function Password() {
  //   const { password } = useConfig();
  const password = "lalalala";
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(password).then(() => {
      setIsAlertOpen(true);
    });
  }

  return (
    <div>
      <Alert
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        lifeTime={2000}
      />
      <span className="text-white">Generated password</span>
      <div className="h-10 flex bg-purple-300 max-w-md items-center">
        <label className="bg-gray-300 rounded-md h-10 w-screen flex justify-center items-center text-red-500">
          {password}
        </label>
        <button
          disabled={!password}
          onClick={handleCopy}
          className="bg-white p-2"
        >
          <CopyIcon />
        </button>
      </div>
    </div>
  );
}
