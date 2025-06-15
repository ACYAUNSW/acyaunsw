'use client';

import Exec from "../components/exec";
import Header from "../components/header";

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
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-6 z-10 flex flex-row justify-center items-center">
            <div className="w-3 h-23 mt-1 bg-acya" />
            <div className="flex flex-col text-white space-y-3 font-extrabold">
              <h1 className="text-5xl">
                Meet the team
              </h1>
              <h1 className="text-4xl">
                我们的团队
              </h1>
            </div>
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
