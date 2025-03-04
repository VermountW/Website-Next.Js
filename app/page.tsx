import Image from 'next/image';
import heroimage from '../public/assets/img/hero1.jpg'; // Adjust the path as needed

const Home = () => {
  return (
    <div className="bg-white">
      <div>
        {/* Hero Section */}
        <div className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: `url(${heroimage.src})` }}>
          <div className="absolute inset-0 bg-black/15"></div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="text-white px-4">
              <p className="text-3xl mb-2 font-semibold">The Capital City of Indonesia</p>
              <h1 className="text-5xl font-bold">JAKARTA</h1>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl text-black font-bold mb-8">Event</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Event 1 */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
                <Image 
                  src="/assets/img/rumah.jpg" 
                  alt="Haunted House Ride" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div>
                    <a href="" className="text-base text-gray-300 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      01-01-2023
                    </a>
                    <a href="https://www.instagram.com/wahanahantuid/" className="text-lg font-semibold hover:text-[#5a91c7] transition duration-200">
                      Haunted House Ride
                    </a>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
                <Image 
                  src="/assets/img/djakarta.jpg" 
                  alt="Djakarta Warehouse Project" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div>
                    <a href="" className="text-base text-gray-300 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      11-12-2022
                    </a>
                    <a href="https://www.djakartawarehouse.com/" className="text-lg font-semibold hover:text-[#5a91c7] transition duration-200">
                      Djakarta Warehouse Project
                    </a>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
                <Image 
                  src="/assets/img/pesta.jpeg" 
                  alt="Festival Pesta Rakyat" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div>
                    <a href="" className="text-base text-gray-300 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      18-03-2023
                    </a>
                    <a href="" className="text-lg font-semibold hover:text-[#5a91c7] transition duration-200">
                      Festival Pesta Rakyat
                    </a>
                  </div>
                </div>
              </div>

              {/* Event 4 */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
                <Image 
                  src="/assets/img/bigbang2.jpg" 
                  alt="Big Bang Jakarta" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div>
                    <a href="" className="text-base text-gray-300 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      22-12-2022
                    </a>
                    <a href="" className="text-lg font-semibold hover:text-[#5a91c7] transition duration-200">
                      Big Bang Jakarta
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-black">News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Large News Item */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-96">
                <Image 
                  src="/assets/img/mrt.jpg" 
                  alt="Jakarta New Transportation" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div>
                    <a href="" className="text-base text-gray-300 flex items-center">
                      27-12-2022
                    </a>
                    <a href="news.html" className="text-2xl font-semibold hover:text-[#5a91c7] transition duration-200">
                      Jakarta New Transportation
                    </a>
                  </div>
                </div>
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* News Item 1 */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg h-44">
                  <Image 
                    src="/assets/img/gelora.jpg" 
                    alt="Gelora Bungkarno Renovation" 
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <div>
                      <a href="" className="text-sm text-gray-300 flex items-center ">
                        30-11-2022
                      </a>
                      <a href="news.html" className="text-base font-semibold hover:text-[#5a91c7] transition duration-200">
                        Gelora Bungkarno Renovation
                      </a>
                    </div>
                  </div>
                </div>

                {/* News Item 2 */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg h-44">
                  <Image 
                    src="/assets/img/e.jpg" 
                    alt="Formula-E is Successful" 
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <div>
                      <a href="" className="text-sm text-gray-300 flex items-center">
                        27-11-2022
                      </a>
                      <a href="news.html" className="text-base font-semibold hover:text-[#5a91c7] transition duration-200">
                        Formula-E is Successful
                      </a>
                    </div>
                  </div>
                </div>

                {/* News Item 3 */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg h-44">
                  <Image 
                    src="/assets/img/dwp.jpg" 
                    alt="The biggest Music Fair" 
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <div>
                      <a href="" className="text-sm text-gray-300 flex items-center">
                        30-10-2022
                      </a>
                      <a href="news.html" className="text-base font-semibold hover:text-[#5a91c7] transition duration-200">
                        The biggest Music Fair
                      </a>
                    </div>
                  </div>
                </div>

                {/* News Item 4 */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg h-44">
                  <Image 
                    src="/assets/img/covid.jpg" 
                    alt="Covid 19 Precaution" 
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <div>
                      <a href="" className="text-sm text-gray-300 flex items-center">
                        15-12-2022
                      </a>
                      <a href="news.html" className="text-base font-semibold hover:text-[#5a91c7] transition duration-200">
                        Covid 19 Precaution
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

