import Image from 'next/image';
import Sidebar from '../../components/sidebar';
import attractionsImage from '../../public/img/action.jpg';
import Hero from '../../components/Hero';

// Content data
const attractions = [
  {
    id: 1,
    title: "Dufan",
    image: "/img/dufan.jpg",
    description: "Dunia Fantasi is an outdoor entertainment center, Dufan is also the largest physics edutainment area in Indonesia which pampers visitors with Fantasy Around the World, through high-tech game rides, which are divided into nine regions, namely Indonesia, Jakarta, Asia, Europe, America, Greece, Saga, Kalila and Fantasy Lights. Feel the thrilling experience with joy and fun.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15868.160214346486!2d106.8335377!3d-6.1253124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x275b93253d2232e3!2sDunia%20Fantasi!5e0!3m2!1sid!2stw!4v1672070707604!5m2!1sid!2stw"
  },
  {
    id: 2,
    title: "ROJA",
    image: "/img/Roja.jpg",
    description: "ROJA is a roller skate rink but it is not the ordinary roller skate rink. ROJA is designed really well with bright colors combined with pastel colors so that they seem soft and cheerful. With rainbow walls, neon lights, and walls with various interesting backgrounds. The right place for you to find content for Instagram.\n\nVisitors can feel the sensation of taking pictures at the instagenic spots provided while skating. That way, tourists can freely. The spots offered vary and come with a variety of interesting themes.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.396933411648!2d106.8031745!3d-6.2175929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3c0973316bd0c5c!2sMOJA%20Museum!5e0!3m2!1sid!2stw!4v1672071508311!5m2!1sid!2stw"
  },
  {
    id: 3,
    title: "Jet Ski Safari",
    image: "/img/jetski.jpg",
    description: "Jet Ski Safari Jakarta is the best water adventure center in Jakarta. Experience an island hopping adventure with a jetski to the Seribu Islands. You can enjoy the beauty of Jakarta and the Thousand Islands while driving your own jetski. Feel the thrilling sensation that you've never felt. Adventure awaits you.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.076478913843!2d106.8299295!3d-6.120408199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd651aa4e71749168!2sSeadoo%20Safari%20Jakarta!5e0!3m2!1sid!2stw!4v1672072114968!5m2!1sid!2stw"
  }
];

// Reusable components
const AttractionImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-[500px] mb-6">
    <Image 
      src={src} 
      alt={alt}
      fill
      className="object-cover rounded-lg"
    />
  </div>
);

const AttractionMap = ({ url }: { url: string }) => (
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

const AttractionCard = ({ attraction }: { attraction: typeof attractions[0] }) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">{attraction.id}. {attraction.title}</h2>
    <AttractionImage src={attraction.image} alt={attraction.title} />
    <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
      {attraction.description.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    <AttractionMap url={attraction.mapUrl} />
  </div>
);

const AttractionsPage = () => {
  return (
    <div className="bg-white">
      <Hero 
        title="Explore More"
        backgroundImage={attractionsImage}
      />
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <article className="space-y-16">
                {attractions.map(attraction => (
                  <AttractionCard key={attraction.id} attraction={attraction} />
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

export default AttractionsPage;