import { Brain } from "lucide-react"
import Link from "next/link";
import Logo from "./Logo";
import AccountDropdown from "./AccountDropdown";

export default function Header(){

  
  return (
  <header className="py-4 px-6 border-light border-b bg-secondary">
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        <Link href={'/'}>
          <Logo size={28}/>
        </Link>
        <div className="flex-flex-col font-montserrat">
          <h1 className="text-lg font-medium">Em<span className="font-bold">AI</span>lio gener<span className="font-bold">AI</span>tor</h1>
          <p className="text-xs text-zinc-600">Think big, do nothing</p>
        </div>
      </div>
      <AccountDropdown />
    </div>
  </header>);
}