import { useEffect } from "preact/hooks";
// import styles from "./alert.module.css";

export default function Alert({ isOpen = false, onClose, lifeTime = 1000 }) {
  //   if (!isOpen) return;

  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, lifeTime);
  }, [isOpen]);

  return (
    <section className="absolute top-5 left-0 right-0 ">
      <div
        // className={`m-auto w-48 p-2 bg-blue-500 text-center text-white font-medium rounded-md alert ${styles.animation}`}
      >
        <p>copied to clipboard!</p>
      </div>
    </section>
  );
}
