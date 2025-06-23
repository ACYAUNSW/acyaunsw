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
    imageUrl: 'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/509355566_1306907878104222_1353836354201970224_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=75d36f&_nc_ohc=08fR2dzhy3kQ7kNvwF5GMw1&_nc_oc=AdlFvGHlilcOeJEPl-79U32Qnf0ms8t0y1luo4btx36vHHfUOHvA6A-QkHaXR9svDZA&_nc_zt=23&_nc_ht=scontent-syd2-1.xx&_nc_gid=sr1AG7X4gl97GE5TqGN91Q&oh=00_AfOVCsE7PwLjoFQTRB-DSsSGs-_rPQAaErPEPwqeX9DtBQ&oe=685F31FF'
  },
  {
    title: 'Straight Outta Chinatown Pubcrawl',
    club: 'MCBSOC × ACYA × RAPSOC',
    date: '2025-06-13',
    href: 'https://fb.me/e/bsYMuYyGt',
    imageUrl: 'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/504916571_686388024008799_1371745847090288605_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=75d36f&_nc_ohc=q207Y4iSwaoQ7kNvwHvGE0F&_nc_oc=AdlvR7C0ejQcPFXJivVVjdTLL0EI-scfZxGsLJIN6UB54o7RyQQFVnR5cAp5s_swRdE&_nc_zt=23&_nc_ht=scontent-syd2-1.xx&_nc_gid=Sny7cjitbB6fUY-TY8JNqg&oh=00_AfOmzax6PUci5mtE7Qn4cxrPGBojidIq1z_50Y4Hf02-SQ&oe=685F38DE'
  },
  {
    title: 'Dragon Boat Festival',
    club: 'ACYA',
    date: '2025-06-05',
    href: 'https://fb.me/e/9sAuXHkXN',
    imageUrl: 'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/499638750_675780581736210_2955227396924982769_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=75d36f&_nc_ohc=a3WrXzJl4jwQ7kNvwFmnqvz&_nc_oc=AdkTys8eKywIjVwKG1kLLxOfPdMYSB9AMroNg7T9UpRgJxYPNsR0UIV2hD50rPw6KhA&_nc_zt=23&_nc_ht=scontent-syd2-1.xx&_nc_gid=sGosQpY-s0HpNLZEzhektw&oh=00_AfMPLaQwh5JV7B2S_1KaBldtfoBenH8uoJwnZafR-yq06w&oe=685F36E1'
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