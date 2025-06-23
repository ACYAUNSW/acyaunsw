'use client';

import EventsBlog from "../components/events-blog";
import Header from "../components/header";
import NewsletterBanner from "../components/newsletter-banner";

export default function Events() {
  return (
    <>
      <NewsletterBanner/>
      <div className="flex-col mx-50 my-12 space-y-16">
          <Header text="The latest" important="events" />
          <EventsBlog/>
          {/* <Header text="Past" important="newsletters" /> */}
      </div>
    </>


  );
}
