import Alert from "../components/Alert.tsx";
import { useState } from "preact/hooks";
import { password } from "../signals/config.ts";

export default function Password() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(password.value).then(() => {
      setIsAlertOpen(true);
    });
  }

  return (
    <section>
      {isAlertOpen && (
        <Alert
          isOpen={isAlertOpen}
          onClose={() => setIsAlertOpen(false)}
          lifeTime={2000}
          label="copied to clipboard!"
        />
      )}
      <span className="text-white">Generated password</span>
      <div className="h-10 flex bg-purple-300 max-w-md items-center">
        <label className="bg-gray-300 rounded-md h-10 w-screen flex justify-center items-center text-red-500">
          {password.value}
        </label>
        <button
          disabled={!password.value}
          onClick={handleCopy}
          className="bg-white p-2"
        >
          copy
        </button>
      </div>
    </section>
  );
}
