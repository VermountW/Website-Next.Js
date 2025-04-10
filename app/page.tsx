import Image from "next/image";
import Link from "next/link";
import heroimage from "../public/img/hero1.jpg";

// Content data
const events = [
  {
    img: "/img/rumah.jpg",
    date: "01-01-2023",
    title: "Haunted House Ride",
    link: "https://www.instagram.com/wahanahantuid/",
  },
  {
    img: "/img/djakarta.jpg",
    date: "11-12-2022",
    title: "Djakarta Warehouse Project",
    link: "https://www.djakartawarehouse.com/",
  },
  {
    img: "/img/pesta.jpeg",
    date: "18-03-2023",
    title: "Festival Pesta Rakyat",
    link: "/events/festival-pesta-rakyat",
  },
  {
    img: "/img/bigbang2.jpg",
    date: "22-12-2022",
    title: "Big Bang Jakarta",
    link: "/events/big-bang-jakarta",
  },
];

const newsItems = [
  {
    img: "/img/mrt.jpg",
    date: "27-12-2022",
    title: "Jakarta New Transportation",
    link: "/news",
  },
  {
    img: "/img/gelora.jpg",
    date: "30-11-2022",
    title: "Gelora Bungkarno Renovation",
    link: "/news",
  },
  {
    img: "/img/e.jpg",
    date: "27-11-2022",
    title: "Formula-E Success",
    link: "/news",
  },
  {
    img: "/img/dwp.jpg",
    date: "30-10-2022",
    title: "Biggest Music Fair",
    link: "/news",
  },
  {
    img: "/img/covid.jpg",
    date: "15-12-2022",
    title: "COVID-19 Precautions",
    link: "/news",
  },
];

// Reusable components
const EventCard = ({ event }: { event: typeof events[0] }) => (
  <Link href={event.link} passHref>
    <div className="relative group h-64 overflow-hidden rounded-lg shadow-xl block cursor-pointer">
      <div className="relative w-full h-full">
        <Image
          src={event.img}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="flex items-center text-sm text-gray-200 mb-1">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {event.date}
        </div>
        <span className="text-lg font-semibold group-hover:text-blue-300 transition-colors duration-200">
          {event.title}
        </span>
      </div>
    </div>
  </Link>
);

const NewsCard = ({ news, isMain = false }: { news: typeof newsItems[0]; isMain?: boolean }) => (
  <Link href={news.link} passHref>
    <div className={`relative group ${isMain ? 'h-96 rounded-xl' : 'h-44 rounded-lg'} shadow-xl overflow-hidden block`}>
      <div className="relative w-full h-full">
        <Image
          src={news.img}
          alt={news.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className={`absolute bottom-0 left-0 right-0 ${isMain ? 'p-6' : 'p-4'} text-white`}>
        <span className={`${isMain ? 'text-sm' : 'text-xs'} text-gray-200`}>{news.date}</span>
        <h3 className={`${isMain ? 'text-2xl' : 'text-base'} font-bold mt-2 group-hover:text-blue-300 transition-colors duration-200`}>
          {news.title}
        </h3>
      </div>
    </div>
  </Link>
);

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Fixed Hero Section */}
      <div className="relative h-[90vh]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={heroimage}
            alt="Jakarta Skyline"
            layout="fill"
            objectFit="cover"
            priority
            className="z-0"
          />
        </div>
        <div className="absolute inset-0 bg-black/15 z-10"></div>
        <div className="relative h-full flex items-center justify-center text-center z-20">
          <div className="text-white px-4">
            <p className="text-3xl md:text-4xl mb-2 font-semibold">
              Capital City of Indonesia
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
              JAKARTA
            </h1>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <section className="py-16 px-4 bg-white relative z-20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 md:px-0 bg-white relative z-20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NewsCard news={newsItems[0]} isMain />
            <div className="grid grid-cols-2 gap-6">
              {newsItems.slice(1).map((news, index) => (
                <NewsCard key={index} news={news} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
