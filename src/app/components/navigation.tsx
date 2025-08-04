'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    pathname === path
      ? 'border-b-3 border-black/70'
      : 'border-b-3 border-transparent hover:border-red-700/70 transition';

  const mobileLinkStyle = (path: string) => {
    return `
      border-l-4 
      ${pathname === path ? 'bg-gray-100 font-semibold border-red-600' : 'border-transparent'}
      transition-colors duration-200
    `
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-lg text-md">

      {/* MOBILE */}
      <div className="md:hidden flex justify-between items-center h-14 px-4">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="ACYA Logo" 
            width={100} 
            height={100} 
            className="max-h-12 max-w-12 hover:brightness-75" 
          />
        </Link>
        <button 
          className="p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={`
            md:hidden bg-white/95 backdrop-blur-lg fixed inset-0 z-50 mt-14
          `}>
          <ul className="flex flex-col bg-white">
            <li className={`py-3 px-4 ${mobileLinkStyle('/')}`}>
              <Link href="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </li>
            <li className={`py-3 px-4 ${mobileLinkStyle('/our-team')}`}>
              <Link href="/our-team" className="block" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link>
            </li>
            <li className={`py-3 px-4 ${mobileLinkStyle('/events')}`}>
              <Link href="/events" className="block" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
            </li>
            <li className={`py-3 px-4 ${mobileLinkStyle('/contact-us')}`}>
              <Link href="/contact-us" className="block" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}


      {/* DESKTOP */}
      <ul className="hidden md:flex w-full h-14 px-36 justify-evenly items-center space-x-16">
        <li className="flex flex-1 justify-center items-center">
          <Link href="/">       
            <Image src="/logo.png" alt="ACYA Logo" width={100} height={100} className="max-h-12 max-w-12 hover:brightness-75" />
          </Link>
        </li>
        <li className={`flex flex-1 h-full items-center justify-center ${linkStyle('/')}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`flex flex-1 h-full items-center justify-center ${linkStyle('/our-team')}`}>
          <Link href="/our-team">Our Team</Link>
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