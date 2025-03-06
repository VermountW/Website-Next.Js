import Image from 'next/image';
import Sidebar from '../../components/sidebar';
import Newss from '../../public/assets/img/News.jpg';

const News = () => {
  return (
    <div className="bg-white">
      {/* Main Content and Sidebar Layout */}
      <div className="relative h-[60vh]">
        <Image
          src={Newss}
          alt="News"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <p className="text-6xl font-bold tracking-wider">Fresh Insights</p>
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
                {/* Nature Spot 1 */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Jakarta New Trasportation</h2>
                  <div className="relative w-full h-[500px] mb-6">
                    <Image 
                      src="/assets/img/News1.jpg" 
                      alt="MRT"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                        PT Mass Rapid Transit (MRT) Jakarta recently celebrated its 13th anniversary, marking a significant milestone in the development of Jakarta’s public transportation system. As the organization responsible for both building the MRT infrastructure and operating the mass transit system, PT MRT Jakarta has played a crucial role in transforming the city’s transportation landscape. The journey to establish this state-of-the-art mass transit system took around 25 years of careful planning, coordination, and preparation. This long process reflected Jakarta’s commitment to solving its traffic congestion and environmental challenges, and after years of anticipation, the MRT finally began operating in Jakarta on December 24, 2022.
                    </p>
                    <p>
                    The official inauguration of the first phase of the project, which covers the route from Lebak Bulus to the Hotel Indonesia Roundabout, was a historic moment. The event was attended by Indonesian President Joko Widodo, who marked the opening of the service with a ceremony at the HI Roundabout area in Central Jakarta. The MRT has since become an essential part of the capital's public transportation network, providing a faster, more efficient alternative to traditional modes of travel. It is also contributing to Jakarta’s sustainable development efforts, helping reduce traffic congestion and lowering environmental impact.
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

export default News;