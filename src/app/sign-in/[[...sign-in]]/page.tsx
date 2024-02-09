import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      <h1 className="text-4xl font-bold mt-20">Login</h1>
      <SignIn />
    </div>
  );
}
