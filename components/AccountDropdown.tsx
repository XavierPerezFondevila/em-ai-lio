"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function AccountDropdown() {

  const { data: session } = useSession();

  if (!session?.user?.image) return null;
  
  return (
    <div className="flex gap-2 items-center">
      <Image
        src={session.user.image}
        alt={session.user.name ?? "Avatar"}
        width={40}
        height={40}
        className="rounded-full aspect-square h-[40px] w-[40px]"
      />
      <p className="text-sm">{session.user.name}</p>
    </div>
  );

}