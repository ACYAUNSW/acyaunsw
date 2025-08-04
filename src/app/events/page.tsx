'use client';

import EventsBlog from "../components/events-blog";
import Header from "../components/header";
import NewsletterBanner from "../components/newsletter-banner";

export default function Events() {
  return (
    <>
      <NewsletterBanner/>
      <div className="flex-col px-8 md:px-10 py-8 md:py-16 mx-auto max-w-7xl space-y-16">
          <Header text="The latest" important="events" />
          <EventsBlog/>
      </div>
    </>


  );
}
