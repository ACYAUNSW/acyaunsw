import Image from "next/image";

interface ExecProps {
  url: string;
  name: string;
  children: React.ReactNode;
}

export default function Exec({ url, name, children }: ExecProps) {
  return (
    <div className="flex-col p-6 bg-zinc-200/70 rounded-lg space-y-4 h-fit w-80">
      <Image src={url} alt={name} width={1200} height={800} className="rounded-lg" />
      <div>
        <h1 className="text-2xl">{name}</h1>
        <p>
          {children}
        </p>
      </div>
    </div>
  );
}