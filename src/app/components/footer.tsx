'use client';

import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-zinc-200 px-4 py-2 md:px-12 md:py-4 mt-8 flex flex-row justify-between items-center">
      <div className="w-auto flex justify-start">
        <Image src="/logo-full.png" alt="ACYA Logo" width={120} height={60} className="brightness-100 w-auto h-10 md:h-14" />
      </div>
      <div className="flex flex-col items-center gap-2 w-auto">
        <div className="flex gap-3 md:gap-4 pb-1 md:pb-2 border-b border-zinc-300">
          <SocialIcon url="https://www.instagram.com/acyaunsw/" bgColor="transparent" fgColor="gray" className="!h-6 !w-6 md:!h-8 md:!w-8 hover:brightness-90 transition"/>
          <SocialIcon url="https://www.facebook.com/acyaunsw/" bgColor="transparent" fgColor="gray" className="!h-6 !w-6 md:!h-8 md:!w-8 hover:brightness-90 transition"/>
          <SocialIcon url="https://discord.gg/2XASXHcn8a" bgColor="transparent" fgColor="gray" className="!h-6 !w-6 md:!h-8 md:!w-8 hover:brightness-90 transition"/>
          <SocialIcon url="wechat" bgColor="transparent" fgColor="gray" className="!h-6 !w-6 md:!h-8 md:!w-8 hover:brightness-90 transition"/>
        </div>
        <span className="text-xs hidden md:block">&copy; UNSW Australia-China Youth Association </span>
      </div>
    </footer>
  );
}