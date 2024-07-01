import Link from "next/link";
import Image from "next/image";

import { ShoppingCart } from "lucide-react";
import { Profile } from "./Avatar";

import logoImg from "/public/logo.svg"

export function Header(){
  return(
    <header className="m-8 flex items-center justify-between pb-4 border-b border-gray-200">
      <div className="flex items-center gap-10">
        <Image src={logoImg} alt="logo image"/>
        <nav className="flex items-center gap-4 text-gray-400">
          <Link href="/">Colletions</Link>
          <Link href="/">Men</Link>
          <Link href="/">Women</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </nav>
      </div>
      <div className="flex items-center gap-8">
        <Link href="">
          <ShoppingCart className="text-gray-400 w-7 h-7" />
        </Link>
        <Profile/>
      </div>
    </header>
  )
}