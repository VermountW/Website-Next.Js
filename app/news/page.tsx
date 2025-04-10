import Image from 'next/image';
import Sidebar from '../../components/sidebar';
import newsImage from '../../public/img/News.jpg';
import Hero from '../../components/Hero';

interface NewsArticleProps {
  title: string;
  imageSrc: string;
  content: string[];
}

// Extracted News Article Component
const NewsArticle = ({ title, imageSrc, content }: NewsArticleProps) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      {title}
    </h2>
    
    <div className="relative w-full h-[500px] mb-6">
      <Image 
        src={imageSrc}
        alt={title}
        fill
        className="object-cover rounded-lg"
      />
    </div>

    <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
      {content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </div>
);

// Main News Component
const News = () => {
  const articleContent = [
    "PT Mass Rapid Transit (MRT) Jakarta recently celebrated its 13th anniversary, marking a significant milestone in the development of Jakarta's public transportation system. As the organization responsible for both building the MRT infrastructure and operating the mass transit system, PT MRT Jakarta has played a crucial role in transforming the city's transportation landscape. The journey to establish this state-of-the-art mass transit system took around 25 years of careful planning, coordination, and preparation. This long process reflected Jakarta's commitment to solving its traffic congestion and environmental challenges, and after years of anticipation, the MRT finally began operating in Jakarta on December 24, 2022.",
    "The official inauguration of the first phase of the project, which covers the route from Lebak Bulus to the Hotel Indonesia Roundabout, was a historic moment. The event was attended by Indonesian President Joko Widodo, who marked the opening of the service with a ceremony at the HI Roundabout area in Central Jakarta. The MRT has since become an essential part of the capital's public transportation network, providing a faster, more efficient alternative to traditional modes of travel. It is also contributing to Jakarta's sustainable development efforts, helping reduce traffic congestion and lowering environmental impact."
  ];

  return (
    <div className="bg-white">
      <Hero 
        title="Fresh Insights"
        backgroundImage={newsImage}
      />

      {/* Main Content and Sidebar Layout */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="md:col-span-3">
              <article className="space-y-16">
                <NewsArticle 
                  title="Jakarta New Transportation"
                  imageSrc="/assets/img/News1.jpg"
                  content={articleContent}
                />
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

export default News;