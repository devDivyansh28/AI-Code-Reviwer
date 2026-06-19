"use client"
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { authClient } from "@/lib/auth-client";
import { UserMenuWithSession } from "@/features/auth/components/user-menu";

export default function Home() {
  const {data} = authClient.useSession();

  console.log(data?.user)

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <UserMenuWithSession variant="compact"/>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      </main>
    </div>
  );
}
