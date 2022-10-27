import { Head } from "$fresh/runtime.ts";
import Password from "../islands/Password.tsx";
import PasswordForm from "../islands/PasswordForm.tsx";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 max-w-md w-full h-screen m-auto p-2">
      <Head>
        <title>Password generator</title>
      </Head>
      <Password />
      <PasswordForm />
    </main>
  );
}
