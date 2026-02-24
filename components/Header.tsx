import { Brain } from "lucide-react"
import Link from "next/link";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

export default function Header(){

  
  return (
  <header className="py-4 px-6 border-light border-b bg-secondary">
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <Link href={'/'}>
          <Logo size={28}/>
        </Link>
        <div className="flex-flex-col font-montserrat">
          <h1 className="text-lg font-medium">Em<span className="font-bold">AI</span>lio gener<span className="font-bold">AI</span>tor</h1>
          <p className="text-xs text-zinc-600">Think big, do nothing</p>
        </div>
      </div>
      <UserMenu />
    </div>
  </header>);
}