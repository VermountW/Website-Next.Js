import Image from 'next/image';
import Sidebar from '../../components/sidebar';
import cultureImage from '../../public/assets/img/culture2.jpg';

const CulturePage = () => {
  return (
    <div className="bg-white">
      {/* Main Content and Sidebar Layout */}
      <div className="relative h-[60vh]">
        <Image
          src={cultureImage}
          alt="Jakarta Culture Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <p className="text-6xl font-bold tracking-wider">Timeless Heritage</p>
          </div>
        </div>
      </div>
      {/* Main Content and Sidebar Layout */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="md:col-span-3">
              <article className="space-y-16">
                {/* Cultural Site 1 */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Museum Fatahillah</h2>
                  <div className="relative w-full h-[500px] mb-6">
                    <Image 
                      src="/assets/img/culture.jpg" 
                      alt="Museum Fatahillah"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                      This building used to be the City Hall of Batavia. This building resembles the Dam Palace in Amsterdam, consisting of a main building with two wings on the east and west as well as a side building used as an office, courtroom, and dungeons used as a prison. On March 30 1974, this building was inaugurated as the Jakarta History Museum.
                    </p>
                  </div>
                  <div className="w-[600px] h-[400px] mt-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.866105259067!2d106.8133!3d-6.1352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12f0032d678c0745!2sMuseum%20Sejarah%20Jakarta!5e0!3m2!1sid!2stw!4v1672064188932!5m2!1sid!2stw" 
                      className="w-full h-full border-0 rounded-lg" 
                      allowFullScreen 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                {/* Cultural Site 2 */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800">2. Museum Bank Indonesia</h2>
                  <div className="relative w-full h-[500px] mb-6">
                    <Image 
                      src="/assets/img/bank.jpg" 
                      alt="Museum Bank Indonesia"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                      This museum presents information on the role of the central bank of Indonesia in the course of the nation's history which began before the arrival of western nations in the archipelago until the establishment of Bank Indonesia in 1953 and Bank Indonesia's policies, including the background and impact of Bank Indonesia's policies on society until now.
                    </p>
                  </div>
                  <div className="w-[600px] h-[400px] mt-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9523346899905!2d106.81079591468533!3d-6.137106595556442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f601eb6b390f%3A0x6dd4776b240168a3!2sMuseum%20Bank%20Indonesia!5e0!3m2!1sid!2stw!4v1672065240751!5m2!1sid!2stw" 
                      className="w-full h-full border-0 rounded-lg" 
                      allowFullScreen 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                {/* Cultural Site 3 */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800">3. Monas</h2>
                  <div className="relative w-full h-[500px] mb-6">
                    <Image 
                      src="/assets/img/monas.jpg" 
                      alt="Monas"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                      The National Monument or abbreviated as Monas or Tugu Monas is a memorial monument located right in Central Jakarta. Monas was established to commemorate the resistance and struggle of the Indonesian people in gaining independence from the colonial government of the Dutch Empire. Construction began on August 17, 1961 and was inaugurated until July 12, 1975. This monument is crowned with a flame covered with gold leaf which symbolizes the burning spirit of struggle of the Indonesian people.
                    </p>
                  </div>
                  <div className="w-[600px] h-[400px] mt-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31734.289299604825!2d106.80499536278171!3d-6.159387514592467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2stw!4v1672065285516!5m2!1sid!2stw" 
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

export default CulturePage;