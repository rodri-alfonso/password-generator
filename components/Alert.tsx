import { useEffect } from "preact/hooks";

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  lifeTime: number;
  label: string;
}

export default function Alert(props: AlertProps) {
  const { onClose, isOpen, lifeTime, label } = props;

  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, lifeTime);
  }, [isOpen]);

  return (
    <section className="absolute top-5 left-0 right-0 ">
      <div
        className={`m-auto w-48 p-2 bg-blue-500 text-center text-white font-medium rounded-md`}
      >
        <p>{label}</p>
      </div>
    </section>
  );
}
