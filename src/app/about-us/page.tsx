'use client';

import Exec from "../components/exec";
import Header from "../components/header";
import Highlight from "../components/highlight";

import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <div className="relative h-screen overflow-hidden">
          <Parallax speed={-20}>
            <Image src="/induction.jpg" alt="ACYA Event" width={1200} height={800} className="h-screen w-full object-cover brightness-80" />
          </Parallax>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 z-10 flex flex-col justify-center items-center">
            <h1 className="w-max text-white text-7xl font-extrabold">
              Our <span className="bg-gradient-to-tr from-acya to-red-700/80 bg-clip-text text-transparent">team</span>
            </h1>
          </div>
        </div>
      </ParallaxProvider>

      <div className="mx-50 my-36 space-y-16">
        <Header text="" important="Executives" />
        <div className="flex flex-wrap justify-between space-y-8 py-6">
          <Exec url="/exec/jason.jpeg" name="Jason Lao">President</Exec>
          <Exec url="/exec/eric.jpeg" name="Eric Duong">Treasurer</Exec>
          <Exec url="/exec/auston.jpeg" name="Auston Yang">Vice President Education</Exec>
          <Exec url="/exec/candy.jpeg" name="Candy Ma">Vice President Socials</Exec>
          <Exec url="/exec/amy.jpeg" name="Amy Yang">Vice President Careers</Exec>
          <Exec url="/exec/Robert.jpeg" name="Robert Zheng">Vice President Internals</Exec>
        </div>
      </div>
    </>


  );
}
