'use client';

import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-zinc-200 px-12 py-4 flex justify-between items-center">
      <div className="text-white">
        <Image src="/logo-full.png" alt="ACYA Logo" width={150} height={50} className="brightness-100"/>
      </div>
      <div className="flex flex-col space-y-4 items-center">
        <div className="flex pb-1 gap-3 border-b border-zinc-300">
          <SocialIcon url="https://www.instagram.com/acyaunsw/" bgColor="transparent" fgColor="gray" className="hover:brightness-90 transition"/>
          <SocialIcon url="https://www.facebook.com/acyaunsw/" bgColor="transparent" fgColor="gray" className="hover:brightness-90 transition"/>
          <SocialIcon url="https://discord.gg/2XASXHcn8a" bgColor="transparent" fgColor="gray" className="hover:brightness-90 transition"/>
          <SocialIcon url="wechat" bgColor="transparent" fgColor="gray" className="hover:brightness-90 transition"/>
        </div>
        <span className="text-xs">&copy; UNSW Australia-China Youth Association </span>
      </div>
    </footer>
  );
}