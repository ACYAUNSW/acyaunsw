'use client';

interface HeaderProps {
    text: string;
    important: string;
  }

export default function Header({ text, important }: HeaderProps) {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
        {text}{' '}
        <span className="underline underline-offset-3 decoration-8 decoration-red-500">
          {important}
        </span>
      </h1>


    </>

  );
}