import Image from 'next/image';
import Sidebar from '../../components/sidebar';
import cultureImage from '../../public/img/culture2.jpg';
import Hero from '../../components/Hero';

// Content data
const culturalSites = [
  {
    id: 1,
    title: "Museum Fatahillah",
    image: "/img/culture.jpg",
    description: "This building used to be the City Hall of Batavia. This building resembles the Dam Palace in Amsterdam, consisting of a main building with two wings on the east and west as well as a side building used as an office, courtroom, and dungeons used as a prison. On March 30 1974, this building was inaugurated as the Jakarta History Museum.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.866105259067!2d106.8133!3d-6.1352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12f0032d678c0745!2sMuseum%20Sejarah%20Jakarta!5e0!3m2!1sid!2stw!4v1672064188932!5m2!1sid!2stw"
  },
  {
    id: 2,
    title: "Museum Bank Indonesia",
    image: "/img/bank.jpg",
    description: "This museum presents information on the role of the central bank of Indonesia in the course of the nation's history which began before the arrival of western nations in the archipelago until the establishment of Bank Indonesia in 1953 and Bank Indonesia's policies, including the background and impact of Bank Indonesia's policies on society until now.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9523346899905!2d106.81079591468533!3d-6.137106595556442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f601eb6b390f%3A0x6dd4776b240168a3!2sMuseum%20Bank%20Indonesia!5e0!3m2!1sid!2stw!4v1672065240751!5m2!1sid!2stw"
  },
  {
    id: 3,
    title: "Monas",
    image: "/img/monas.jpg",
    description: "The National Monument or abbreviated as Monas or Tugu Monas is a memorial monument located right in Central Jakarta. Monas was established to commemorate the resistance and struggle of the Indonesian people in gaining independence from the colonial government of the Dutch Empire. Construction began on August 17, 1961 and was inaugurated until July 12, 1975. This monument is crowned with a flame covered with gold leaf which symbolizes the burning spirit of struggle of the Indonesian people.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31734.289299604825!2d106.80499536278171!3d-6.159387514592467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2stw!4v1672065285516!5m2!1sid!2stw"
  }
];

// Reusable components
const CulturalSiteImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-[500px] mb-6">
    <Image 
      src={src} 
      alt={alt}
      fill
      className="object-cover rounded-lg"
    />
  </div>
);

const CulturalSiteMap = ({ url }: { url: string }) => (
  <div className="relative w-full h-[400px] mt-6">
    <iframe 
      src={url}
      className="w-full h-full border-0 rounded-lg" 
      allowFullScreen 
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

const CulturalSiteCard = ({ site }: { site: typeof culturalSites[0] }) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">{site.id}. {site.title}</h2>
    <CulturalSiteImage src={site.image} alt={site.title} />
    <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
      <p>{site.description}</p>
    </div>
    <CulturalSiteMap url={site.mapUrl} />
  </div>
);

const CulturePage = () => {
  return (
    <div className="bg-white">
      <Hero 
        title="Timeless Heritage"
        backgroundImage={cultureImage}
      />
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <article className="space-y-16">
                {culturalSites.map(site => (
                  <CulturalSiteCard key={site.id} site={site} />
                ))}
              </article>
            </div>
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