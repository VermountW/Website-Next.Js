import Image from 'next/image';
import heroimage from '../../public/img/hero1.jpg';
import capitalcity from '../../public/img/capitalcity.jpg';
import batavia from '../../public/img/Batavia.jpg';
import Sidebar from '../../components/sidebar';
import Hero from '../../components/Hero';

interface BlogPostProps {
  title: string;
  imageSrc: any; // Using any for imported images
  imageAlt: string;
  paragraphs: string[];
}

const BlogPost = ({ title, imageSrc, imageAlt, paragraphs }: BlogPostProps) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
    
    <div className="relative w-full h-[500px]">
      <Image 
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover rounded-lg"
      />
    </div>

    <div className="mt-6">
      <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
);

const WhatIsJakarta = () => {
  const blogPosts = [
    {
      title: "Jakarta The Capital City",
      imageSrc: capitalcity,
      imageAlt: "Jakarta The Capital City",
      paragraphs: [
        "The Republic of Indonesia's capital city is called Jakarta. Over 10 million residents from many ethnic groups and regions of Indonesia live in the enormous, expansive metropolis of Jakarta. The number rises during the day as commuters head into the city for work, and it plummets at night when they all head out.",
        "The province of DKI Jakarta, which is located on Java Island's northwest coast, has rapidly grown through time. The city of Jakarta is basically made up from a collection of villages, that are now connected and developed into one of the largest cities in Southeast Asia."
      ]
    },
    {
      title: "History Of Jakarta",
      imageSrc: batavia,
      imageAlt: "History of Jakarta",
      paragraphs: [
        "During the colonial era, Jakarta was intended to be constructed as a trading post for the English East India Company. in the time of Dutch Colony conflicted with the migrating Englishmen, after the city is win by the Dutch colony as the right to rule the city and they changed the name to Batavia.",
        "Trading activities drew traders from all over the region, primarily from China. Because of the trade and commercial activities, Batavia becomes one of the most values in that area in that time.",
        "The Indonesian nationalists surpassed the Dutch Colony by 1942. then is appoint the capital of city Indonesia. After a long 350 years under the Dutch colony, Indonesia finally declared its independence in 1945. Since then, Jakarta has rapidly grown. they start to develop it by building major highways, hotels and shopping malls becoming Being the nation's center of government as well as its economic pillar."
      ]
    }
  ];

  return (
    <div className="bg-white">
      <Hero 
        title="Jakarta"
        backgroundImage={heroimage}
      />

      {/* Main Content and Sidebar Layout */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="md:col-span-3">
              <article className="space-y-16">
                {blogPosts.map((post, index) => (
                  <BlogPost key={index} {...post} />
                ))}
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