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
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 tracking-tight font-semibold text-center md:text-left">
              <h1 className="bg-gradient-to-tr from-acya to-red-400/80 bg-clip-text text-transparent text-6xl md:text-8xl mt-1">UNSW</h1>
              <div className="flex flex-col text-white space-y-1 items-center md:items-start">
                <h1 className="w-max text-xl md:text-4xl">
                  Australia–China Youth Association
                </h1>
                <h1 className="w-max text-lg md:text-3xl">
                  中澳青年联合会
                </h1>
              </div>
            </div>

          </div>
        </div>
      </ParallaxProvider>

      <div className="mx-auto px-6 md:px-10 py-12 md:py-16 max-w-7xl space-y-16">
        <Header text="Our" important="mission" />
        <p>
          The Australia-China Youth Association (ACYA) is a not-for-profit organisation dedicated to 
          fostering a transnational community of young people with an interest in the Australia-China 
          relationship. We provide opportunities for students to deepen their understanding of both 
          countries through a diverse range of social and professional events across our careers, 
          education, and people-to-people (P2P) portfolios. Our goal is to empower members to take 
          initiative, step outside their comfort zones, and grow personally and professionally. By 
          encouraging active engagement, we aim to cultivate cultural, social, and economic awareness
          while building meaningful relationships, sharing experiences, and embracing new challenges.
        </p>

        <Header text="Behind the" important="logo" />
        <p>
          Ever wondered what the meaning of 和 is in our ACYA logo? 
          <br/>
          The character <Highlight>和</Highlight> symbolises harmony and togetherness - values that lie at the heart of our 
          organisation. This reflects our mission to unite like-minded individuals, foster 
          cross-cultural connections, and build a vibrant community of passionate students. We are 
          committed to breaking down cultural barriers and creating an inclusive space where every 
          member can grow both personally and professionally. Diversity is one of our greatest strengths,
          and we continuously strive to cultivate a supportive and welcoming environment for all.
        </p>

      </div>
    </>


  );
}
