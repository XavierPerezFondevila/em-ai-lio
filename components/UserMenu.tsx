"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button } from "./ui/Button";
import { LogOut , ChevronDown} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function UserMenu() {

  const { data: session } = useSession();
  if (!session?.user?.image) return null;
  
  const userInitials = session?.user?.name?.split(" ").map(word => word[0].toUpperCase()).join("") ?? "XX";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-[50px]!">
          <Avatar>
            <AvatarImage
              src={session?.user?.image}
              alt={session?.user?.name ?? userInitials}
            />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
          <span>{ session.user.name }</span>
          <ChevronDown size={18}/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-md border-light min-w-[180px]">
        <DropdownMenuGroup>
          <DropdownMenuLabel>
          <p>{ session?.user?.name }</p>
          <p className="text-xs font-light">{ session?.user?.email }</p>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="py-0 hover:bg-transparent!">
          <Button variant="ghost" className="flex gap-2 hover:bg-transparent! hover:text-red-500 p-0! cursor-pointer w-full justify-start" onClick={()=>signOut()}>
            <LogOut/>
            <span>Log out</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

}