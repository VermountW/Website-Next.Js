import Image from 'next/image';
import Sidebar from '../../components/sidebar';
import natureImage from '../../public/assets/img/Nature.jpg';

const NaturePage = () => {
  return (
    <div className="bg-white">
      {/* Main Content and Sidebar Layout */}
      <div className="relative h-[60vh]">
        <Image
          src={natureImage}
          alt="Jakarta Nature Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <p className="text-6xl font-bold tracking-wider">Nature Awaits</p>
          </div>
        </div>
      </div>
      {/* Main Content and Sidebar Layout */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="md:col-span-3">
              <article className="space-y-16">
                {/* Nature Spot 1 */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">1. PIK Mangrove Forest</h2>
                  <div className="relative w-full h-[500px] mb-6">
                    <Image 
                      src="/assets/img/Nature.jpg" 
                      alt="PIK Mangrove Forest"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                      PIK Mangrove Forest is part of the mangrove ecosystem, as well as a habitat for various types of water birds. When setting foot in the PIK Mangrove Forest area, visitors will be able to enjoy views of the other side of the city of Jakarta. Not only Mangrove Forests, this area also provides various facilities that bring visitors closer to nature. Starting from speedboat water tours, canoe rowing boats, canoes, mangrove planting, lodging, to pre-wedding photos.
                    </p>
                  </div>
                  <div className="relative w-full h-[400px] mt-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36932.51504008984!2d106.71445652688524!3d-6.122864955250468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d6c3b1175b5%3A0xae9945ee4ad2bb9f!2sKawasan%20Ekowisata%20Mangrove%20PIK!5e0!3m2!1sid!2stw!4v1672068976057!5m2!1sid!2stw" 
                      className="w-full h-full border-0 rounded-lg" 
                      allowFullScreen 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                {/* Nature Spot 2 */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800">2. Thousand islands</h2>
                  <div className="relative w-full h-[500px] mb-6">
                    <Image 
                      src="/assets/img/seribu.jpg" 
                      alt="Thousand Islands"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                      The Thousand Islands is one of the areas included in the administration of the Provincial Government of DKI Jakarta which consists of more than 110 islands. The Thousand Islands are divided into 6 regions namely Kelapa Island, Harapan Island, Panggang Island, Tidung Island, Pari Island and Untung Jawa Island.
                    </p>
                    <p>
                      The Thousand Islands have extraordinary marine beauty. You can enjoy it while chilling on the beach. For those of you who want to visit the Thousand Islands, there are many islands that you can visit with various activities that you can do while there.
                    </p>
                  </div>
                  <div className="relative w-full h-[400px] mt-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100093.76061701411!2d106.55842760257616!3d-5.784481402800958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a74107792be57%3A0x10dc0063d9262fea!2sTaman%20Nasional%20Kepulauan%20Seribu!5e0!3m2!1sid!2stw!4v1672069956967!5m2!1sid!2stw" 
                      className="w-full h-full border-0 rounded-lg" 
                      allowFullScreen 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                {/* Nature Spot 3 */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800">3. Jimbaran outer lounge</h2>
                  <div className="relative w-full h-[500px] mb-6">
                    <Image 
                      src="/assets/img/jimbaran.jpg" 
                      alt="Jimbaran Outer Lounge"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                      Jimbaran Outer Lounge is a restaurant that comes with beautiful views which of course is comfy. You will be spoiled with tropical vibes complete with lush trees and beautiful flowing rivers. You could feel a different vibe of modern city in the middle of Jakarta.
                    </p>
                  </div>
                  <div className="relative w-full h-[400px] mt-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.663746440343!2d106.8196047!3d-6.2087422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc38220ab4937c40!2sJimBARan%20Outdoor%20Lounge!5e0!3m2!1sid!2stw!4v1672069025438!5m2!1sid!2stw" 
                      className="w-full h-full border-0 rounded-lg" 
                      allowFullScreen 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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

export default NaturePage;