import Image from 'next/image';
import Link from 'next/link';
import heroimage from '../public/assets/img/hero1.jpg';

const Home = () => {
  return (
    <div className="bg-white">
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
              The Capital City of Indonesia
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-wide">JAKARTA</h1>
          </div>
        </div>
      </div>

      {/* Events Section with Fixed Layout */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                img: "/assets/img/rumah.jpg",
                date: "01-01-2023",
                title: "Haunted House Ride",
                link: "https://www.instagram.com/wahanahantuid/"
              },
              {
                img: "/assets/img/djakarta.jpg",
                date: "11-12-2022",
                title: "Djakarta Warehouse Project",
                link: "https://www.djakartawarehouse.com/"
              },
              {
                img: "/assets/img/pesta.jpeg",
                date: "18-03-2023",
                title: "Festival Pesta Rakyat",
                link: "/events/festival-pesta-rakyat"
              },
              {
                img: "/assets/img/bigbang2.jpg",
                date: "22-12-2022",
                title: "Big Bang Jakarta",
                link: "/events/big-bang-jakarta"
              }
            ].map((event, index) => (
              <Link key={index} href={event.link} passHref>
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
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.date}
                    </div>
                    <span className="text-lg font-semibold group-hover:text-blue-300 transition-colors duration-200">
                      {event.title}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section with Improved Grid */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main News Card */}
            <Link href="/news">
              <div className="relative group h-96 rounded-xl shadow-xl overflow-hidden block">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/img/mrt.jpg"
                    alt="Jakarta Transportation"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm text-gray-200">27-12-2022</span>
                  <h3 className="text-2xl font-bold mt-2 group-hover:text-blue-300 transition-colors duration-200">
                    Jakarta New Transportation
                  </h3>
                </div>
              </div>
            </Link>

            {/* News Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { 
                  img: "/assets/img/gelora.jpg", 
                  date: "30-11-2022", 
                  title: "Gelora Bungkarno Renovation", 
                  link: '/news' 
                },
                { 
                  img: "/assets/img/e.jpg", 
                  date: "27-11-2022", 
                  title: "Formula-E Success", 
                  link: '/news' 
                },
                { 
                  img: "/assets/img/dwp.jpg", 
                  date: "30-10-2022", 
                  title: "Biggest Music Fair", 
                  link: '/news' 
                },
                { 
                  img: "/assets/img/covid.jpg", 
                  date: "15-12-2022", 
                  title: "COVID-19 Precautions", 
                  link: '/news' 
                }
              ].map((news, index) => (
                <Link key={index} href={news.link} passHref>
                  <div className="relative group h-44 rounded-lg shadow-xl overflow-hidden block">
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
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <span className="text-xs text-gray-200">{news.date}</span>
                      <h4 className="text-base font-semibold mt-1 group-hover:text-blue-300 transition-colors duration-200">
                        {news.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;