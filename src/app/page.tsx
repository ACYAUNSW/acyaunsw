'use client';

import Header from "./components/header"
import Highlight from "./components/highlight";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <div className="relative h-screen overflow-hidden">
          <Parallax speed={-20}>
            <Image src="/placeholder-banner.jpg" alt="ACYA Event" width={1200} height={800} className="h-screen w-full object-cover brightness-80" />
          </Parallax>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center space-x-4 tracking-tight font-semibold">
            <h1 className="bg-gradient-to-tr from-acya to-red-400/80 bg-clip-text text-transparent text-8xl mt-1">UNSW</h1>
            <div className="flex flex-col text-white space-y-1">
              <h1 className="w-max text-4xl">
                Australia–China Youth Association
              </h1>
              <h1 className="w-max text-3xl">
                中澳青年联合会
              </h1>
            </div>
          </div>
        </div>
      </ParallaxProvider>

      <div className="mx-50 my-36 space-y-16">
        <Header text="Our" important="mission" />
        <p>
          Australia-China Youth Association is a not-for-profit organisation with an aim to foster a translational community of 
          young people who are interested in the Australia-China space and want to gain insight into these countries. Through our 
          social and professional events in the careers, education and people-to-people portfolio, we aim to encourage our members 
          to take initiative to develop and challenge themselves. 

          Our goal is to encourage the active involvement of students in developing cultural, social and economic awareness and to 
          build on existing knowledge through building relationships, sharing experiences and taking on new challenges. 
        </p>

        <Header text="Behind the" important="logo" />
        <p>
        The character <Highlight>和</Highlight> means togetherness and harmony. This is reflective of our organisation&apos;s mission of bringing like-minded 
        individuals together. It is our goal to break down barriers between different cultures and create a community of passionate 
        students to develop personally and professionally. 

        We value the diversity of our members and continuously work towards creating a positive environment for everyone.  
        </p>

      </div>
    </>


  );
}
