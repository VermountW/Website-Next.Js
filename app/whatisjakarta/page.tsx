import Image from 'next/image';
import heroimage from '../../public/assets/img/hero1.jpg';
import capitalcity from '../../public/assets/img/capitalcity.jpg';
import batavia from '../../public/assets/img/Batavia.jpg';
import Sidebar from '../../components/sidebar';

const WhatIsJakarta = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={heroimage}
          alt="Jakarta Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <p className="text-6xl font-bold tracking-wider">JAKARTA</p>
          </div>
        </div>
      </div>

      {/* Main Content and Sidebar Layout */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="md:col-span-3 space-y-16">
              {/* Blog Post 1 */}
              <article>
                <Image src={capitalcity} alt="Jakarta The Capital City" width={800} height={500} className="w-full h-[500px] object-cover" />
                <div className="mt-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Jakarta The Capital City</h2>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                    The Republic of Indonesia's capital city is called Jakarta. Over 10 million residents from many ethnic groups and regions of Indonesia live in the enormous, expansive metropolis of Jakarta. The number rises during the day as commuters head into the city for work, and it plummets at night when they all head out.
                    </p>
                    <p>
                    The province of DKI Jakarta, which is located on Java Island's northwest coast, has rapidly grown through time. The city of Jakarta is basically made up from a collection of villages, that are now connected and developed into one of the largest cities in Southeast Asia.
                    </p>
                  </div>
                </div>
              </article>

              {/* Blog Post 2 */}
              <article>
                <Image src={batavia} alt="History of Jakarta" width={800} height={500} className="w-full h-[500px] object-cover" />
                <div className="mt-10">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">History Of Jakarta</h2>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                    During the colonial era, Jakarta was intended to be constructed as a trading post for the English East India Company. in the time of Dutch Colony conflicted with the migrating Englishmen, after the city is win by the Dutch colony as the right to rule the city and they changed the name to Batavia.
                    </p>
                    <p>
                    Trading activities drew traders from all over the region, primarily from China. Because of the trade and commercial activities, Batavia becomes one of the most values in that area in that time.
                    </p>
                    <p>
                    The Indonesian nationalists surpassed the Dutch Colony by 1942. then is appoint the capital of city Indonesia. After a long 350 years under the Dutch colony, Indonesia finally declared its independence in 1945. Since then, Jakarta has rapidly grown. they start to develop it by building major highways, hotels and shopping malls becoming Being the nation’s center of government as well as its economic pillar.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsJakarta;
