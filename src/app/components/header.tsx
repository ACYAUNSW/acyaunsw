'use client';

interface HeaderProps {
    text: string;
    important: string;
  }

export default function Header({ text, important }: HeaderProps) {
  return (
    <>
      <header className="mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl">
        {text}{' '}
        <span className="underline underline-offset-4 decoration-6 decoration-acya">
          {important}
        </span>
      </header>


    </>

  );
}