import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';
import Todo from '../../public/img/whattodo.jpg';
import Hero from '../../components/Hero';
const ExploreSection = () => {
  const categories = [
    { name: 'Culture', image: '/img/culture.jpg', link: '/Culture' },
    { name: 'Nature', image: '/img/Nature.jpg', link: '/Nature.html' },
    { name: 'Shopping', image: '/img/Shopping.jpg', link: '/Shopping' },
    { name: 'Adventure', image: '/img/action.jpg', link: '/Action&sports' }
  ];

  return (
    <div className="bg-white">
      <Hero 
        title="Discover Jakarta"
        backgroundImage={Todo}
      />


      <section className="site-section section-portfolio py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Explore Based on Your Interest</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="portfolio-item relative group overflow-hidden rounded-lg">
                {/* Base Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Category title positioned in bottom left with semi-transparent black background */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <h4 className="text-xl font-semibold text-white">{category.name}</h4>
                </div>
                
                {/* Overlay that slides from left to right on hover */}
                <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                  <Link href={category.link} className="flex flex-col items-center group/link">
                    <h4 className="text-xl font-semibold text-black group-hover/link:text-[#5a91c7] mb-4">{category.name}</h4>
                    <ArrowRightCircle className="w-10 h-10 text-black group-hover/link:text-[#5a91c7]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreSection;