import Badge from "./badge";
import Image from "next/image";
import { Event } from "../data/events-data";
import { events } from "../data/events-data";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const today = new Date();
  const eventDate = new Date(event.date);

  return (
    <div className="bg-white rounded-md overflow-hidden max-w-md">
      {eventDate > today && (
        <Image
          src={event.imageUrl}
          alt={event.title}
          className="w-full max-w-lg aspect-[16/9]"
        />
      )}

      <div className="flex flex-col p-4 space-y-3">
        <div className="flex justify-between items-center space-x-4">
          <div className="group relative">
            <a href={event.href}>
              <h2 className="text-sm font-bold">
                {event.title}
              </h2>
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
          <span className="uppercase text-xs text-gray-400">Hosted by</span>
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
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}