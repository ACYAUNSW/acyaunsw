export interface Event {
  title: string;
  club: string;
  date: string;
  href: string;
  imageUrl: string;
}

export const events: Event[] = [
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