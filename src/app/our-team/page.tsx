'use client';

import { useState } from "react";

import Exec from "../components/exec";
import Header from "../components/header";
import Highlight from "../components/highlight";

import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function OurTeam() {
  const [portfolio, setPortfolio] = useState('Education');

  const switchPortfolio = (event: React.SyntheticEvent, p: string) => {
    setPortfolio(p);
  };

  type Person = {
    name: string;
    role: string;
  };

  type PortfolioProps = {
    people: Person[];
  };

  function Portfolio({ people }: PortfolioProps) {
    return (
      <div className="flex flex-col p-0">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {people.map((person, index) => (
            <li key={index} className="border p-4 rounded-lg">
              <h2 className="font-bold">{person.name}</h2>
              <p className="text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const education: Person[] = [
    {
      name: 'Eddy Yue',
      role: 'Director',
    },
    {
      name: 'Elizabeth Hua',
      role: 'Director',
    },
    {
      name: 'Orlando Su',
      role: 'Subcommittee',
    },
    {
      name: 'Tom Collins',
      role: 'Subcommittee',
    },
    {
      name: 'Angelina He',
      role: 'Subcommittee',
    },
    {
      name: 'Ashley Peng',
      role: 'Subcommittee',
    },
    {
      name: 'Jasmine Zhang',
      role: 'Subcommittee',
    }
  ]

  const careers: Person[] = [
    {
      name: 'Theo Lau',
      role: 'Director',
    },
    {
      name: 'Nancy Huynh',
      role: 'Director',
    },
    {
      name: 'Adrian Choy',
      role: 'Subcommittee',
    },
    {
      name: 'Terry Hong',
      role: 'Subcommittee',
    },
    {
      name: 'Stanley Wang',
      role: 'Subcommittee',
    },
    {
      name: 'Yuqi Li',
      role: 'Subcommittee',
    },
    {
      name: 'Kelly Leung',
      role: 'Subcommittee',
    },
    {
      name: 'Ellen Chen',
      role: 'Subcommittee',
    },
  ]

  const hr: Person[] = [
    {
      name: 'Anthony Han',
      role: 'Director',
    },
    {
      name: 'Fong Yun Han',
      role: 'Director',
    },
    {
      name: 'Nick Zhou',
      role: 'Subcommittee',
    },
    {
      name: 'Larissa Liang',
      role: 'Subcommittee',
    },
    {
      name: 'Jamie Charoensri',
      role: 'Subcommittee',
    },
    {
      name: 'Rosamond Zhang',
      role: 'Subcommittee',
    },
    {
      name: 'Chris Ho',
      role: 'Subcommittee',
    }
  ]

  const p2p: Person[] = [
    {
      name: 'Emily Huo',
      role: 'Director',
    },
    {
      name: 'Syd Yan',
      role: 'Director',
    },
    {
      name: 'Andrew Peng',
      role: 'Subcommittee',
    },
    {
      name: 'Rohan Zhao',
      role: 'Subcommittee',
    },
    {
      name: 'Henry Liu',
      role: 'Subcommittee',
    },
    {
      name: 'Kirsty Lee-Sawitto',
      role: 'Subcommittee',
    },
    {
      name: 'Sammi Cheung',
      role: 'Subcommittee',
    }
  ]

  const marketing: Person[] = [
    {
      name: 'Adam Li',
      role: 'Director',
    },
    {
      name: 'Ethan Liu',
      role: 'Director',
    },
    {
      name: 'Isabella Yu',
      role: 'Director',
    },
    {
      name: 'Hebe Wang',
      role: 'Subcommittee',
    },
    {
      name: 'Iris Yan',
      role: 'Subcommittee',
    },
    {
      name: 'Jacqueline Yu',
      role: 'Subcommittee',
    },
    {
      name: 'Jia Yi Weng',
      role: 'Subcommittee',
    },
    {
      name: 'Jonah Kearns',
      role: 'Subcommittee',
    },
    {
      name: 'Karen Zhang',
      role: 'Subcommittee',
    },
    {
      name: 'Peter Yang',
      role: 'Subcommittee',
    },
    {
      name: 'Stella Gunawan',
      role: 'Subcommittee',
    },
    {
      name: 'Zhenyao Fan',
      role: 'Subcommittee',
    },
  ]

  return (
    <>
      <ParallaxProvider>
        <div className="relative h-screen overflow-hidden">
          <Parallax speed={-20}>
            <Image src="/induction.jpg" alt="ACYA Event" width={1200} height={800} className="h-screen w-full object-cover brightness-80" />
          </Parallax>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-6 z-10 flex flex-row justify-center items-center">

            <div className="flex flex-col text-white space-y-3 font-extrabold items-center">
              <h1 className="text-3xl md:text-5xl">
                MEET THE TEAM
              </h1>
              <div className="w-xs md:w-lg h-1 bg-acya" />
              <h1 className="text-2xl md:text-4xl">
                我们的团队
              </h1>
            </div>
          </div>
        </div>
      </ParallaxProvider>

      <div className="max-w-7xl mx-auto px-8 md:px-10 py-8 md:py-16 space-y-8 md:space-y-12">
        <Header text="Our" important="executives" />
        <div className="flex flex-wrap justify-between space-y-8 md:py-6">
          <Exec url="/exec/jason.jpeg" name="Jason Lao">President</Exec>
          <Exec url="/exec/eric.jpeg" name="Eric Duong">Treasurer</Exec>
          <Exec url="/exec/auston.jpeg" name="Auston Yang">Vice President Education</Exec>
          <Exec url="/exec/candy.jpeg" name="Candy Ma">Vice President Socials</Exec>
          <Exec url="/exec/amy.jpeg" name="Amy Yang">Vice President Careers</Exec>
          <Exec url="/exec/Robert.jpeg" name="Robert Zheng">Vice President Internals</Exec>
        </div>

        <Header text="Our" important="portfolios" />
        <div className="md:w-max md:mt-10 flex flex-row overflow-x-auto scrollbar-hide whitespace-nowrap ring-2 ring-acya rounded">
          {['Education', 'Careers', 'Human Resources', 'P2P', 'Marketing'].map((label) => (
            <button
              key={label}
              className={`py-2 px-4 transition duration-300 ${
                portfolio === label
                  ? 'bg-acya text-white'
                  : 'relative before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-acya before:w-0 hover:before:w-full before:transition-all before:duration-300'
              }`}
              onClick={(e) => switchPortfolio(e, label)}
            >
              {label}
            </button>
          ))}
        </div>

        {portfolio === 'Education' && <Portfolio people={education} />}
        {portfolio === 'Careers' && <Portfolio people={careers} />}
        {portfolio === 'Human Resources' && <Portfolio people={hr} />}
        {portfolio === 'P2P' && <Portfolio people={p2p} />}
        {portfolio === 'Marketing' && <Portfolio people={marketing} />}
      </div>
    </>


  );
}
