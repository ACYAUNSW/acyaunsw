'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    pathname === path
      ? 'border-b-3 border-black/70'
      : 'border-b-3 border-transparent hover:border-red-700/70 transition';

  return (
    <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-lg text-md">
      <ul className="flex w-full h-14 px-36 justify-evenly items-center space-x-16">
        <li className="flex flex-1 justify-center items-center">
          <Link href="/">       
            <Image src="/logo.png" alt="ACYA Logo" width={100} height={100} className="max-h-12 max-w-12 hover:brightness-75" />
          </Link>
        </li>
        <li className={`flex flex-1 h-full items-center justify-center ${linkStyle('/')}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`flex flex-1 h-full items-center justify-center ${linkStyle('/about-us')}`}>
          <Link href="/about-us">About Us</Link>
        </li>
        <li className={`flex flex-1 h-full items-center justify-center ${linkStyle('/events')}`}>
          <Link href="/events">Events</Link>
        </li>
        <li className={`flex flex-1 h-full items-center justify-center ${linkStyle('/contact-us')}`}>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}