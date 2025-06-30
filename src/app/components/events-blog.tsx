import Badge from "./badge";

interface Event {
  title: string;
  club: string;
  date: string;
  href: string;
  imageUrl: string;
}

const events: Event[] = [
  {
    title: 'Dumpling Games',
    club: 'UNSW Food Lovers × ACYA',
    date: '2025-06-26',
    href: 'https://www.facebook.com/share/p/1FcRwHNCq9/',
    imageUrl: 'dumplinggames.jpg'
  },
  {
    title: 'Straight Outta Chinatown Pubcrawl',
    club: 'MCBSOC × ACYA × RAPSOC',
    date: '2025-06-13',
    href: 'https://fb.me/e/bsYMuYyGt',
    imageUrl: 'pubcrawl.jpg'
  },
  {
    title: 'Dragon Boat Festival',
    club: 'ACYA',
    date: '2025-06-05',
    href: 'https://fb.me/e/9sAuXHkXN',
    imageUrl: 'dragonboat.jpg'
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const today = new Date();
  const eventDate = new Date(event.date);

  return (
    <div className="bg-white rounded-md overflow-hidden w-max">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full max-w-lg aspect-[16/9]"
      />
      <div className="flex flex-col p-4 space-y-3">
        <div className="flex justify-between items-center">
          <div className="group relative w-max">
            <a href={event.href}>
              <h2 className="text-md font-bold">{event.title}</h2>
            </a>
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-acya group-hover:w-full" />
          </div>

          {eventDate > today ? (
            <Badge>Upcoming</Badge>
          ) : (
            <Badge>Past</Badge>
          )}
        </div>

        <div className="flex flex-col">
          <span className="uppercase text-xs text-gray-400">
            Hosted by
          </span>
          <span className="text-gray-700 text-sm">{event.club}</span>
          <span className="text-gray-400 text-sm">{event.date}</span>
        </div>
      </div>
    </div>
  );
};
export default function EventsBlog() {
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  return (
    <div className="my-10 flex items-start justify-between flex-wrap space-y-10">
      {sortedEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}