import Image from 'next/image';
import Sidebar from '../../components/sidebar';
import eatimage from '../../public/assets/img/whattoeat.jpg';

const TraditionalFood = () => {
  return (
    <div className="bg-white">
      {/* Hero Section can be added here similar to WhatIsJakarta page */}
      <div className="relative h-[60vh]">
        <Image
          src={eatimage}
          alt="Jakarta Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <p className="text-6xl font-bold tracking-wider">What to Eat</p>
          </div>
        </div>
      </div>
      {/* Main Content and Sidebar Layout */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="md:col-span-3 space-y-16">
              <article className="space-y-8">
                <div className="relative w-full h-[500px]">
                  <Image 
                    src="/assets/img/traditionalfood.jpg" 
                    alt="Traditional Food"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Traditional Food</h2>
                  <p>
                  As a capital city of Indonesia, Jakarta provides a lot of varieties of traditional food all around Indonesia. Our traditional food is made from the best herbs and spices that will give you the incredible taste.
                  </p>
                  <p>
                    These are some food recommendation that you really need to taste.
                  </p>
                </div>
                
                {/* Food Item 1 */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">1. Soto</h2>
                  <div className="relative w-full h-[500px]">
                    <Image 
                      src="/assets/img/soto.jpg" 
                      alt="Soto"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-black text-xl text-justify leading-relaxed">
                    Soto also known by several local names, such as, sroto, sauto, tauto, or coto is a typical Indonesian food such as soup made from meat and vegetable. The most commonly used meats are beef and chicken, but some use pork, horse or mutton.
                  </p>
                </div>
                
                {/* Food Item 2 */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">2. Ketoprak</h2>
                  <div className="relative w-full h-[500px]">
                    <Image 
                      src="/assets/img/ketoprak.jpg" 
                      alt="Ketoprak"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-black text-xl text-justify leading-relaxed">
                    Ketoprak consists of tofu, vermicelli, cucumber, bean sprouts, and you can also use boiled eggs topped with peanut sauce, sweet soy sauce, and a sprinkling of fried shallots. It can also be served with additional crackers or chips. Some versions also include tempeh.
                  </p>
                </div>
                
                {/* Food Item 3 */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">3. Satay</h2>
                  <div className="relative w-full h-[500px]">
                    <Image 
                      src="/assets/img/satay.jpg" 
                      alt="Satay"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-black text-xl text-justify leading-relaxed">
                    Satay or satai is a food made from meat which is cut into small pieces and stabbed in such a way with a bone stick from coconut leaves or bamboo, then grilled using charcoal coals. Satay is served with peanut sauce or curry sauce. Meat that is used as satay includes chicken, goat, lamb, beef, pork, rabbit, horse, and others.
                  </p>
                </div>
                
                {/* Restaurant Recommendations */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Restaurant Recommendation</h2>
                  
                  {/* Restaurant 1 */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">1. Lembur Kuring</h2>
                    <div className="relative w-full h-[500px]">
                      <Image 
                        src="/assets/img/kuring.jpg" 
                        alt="Lembur Kuring"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full h-[400px]">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10141.930919157612!2d106.6865601305234!3d-6.113948762943761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02d9963fb003%3A0x1d231ede33d44861!2sRumah%20Makan%20Lembur%20Kuring!5e0!3m2!1sid!2stw!4v1672075528006!5m2!1sid!2stw" 
                        className="w-full h-full border-0" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                  
                  {/* Restaurant 2 */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">2. Bandar Djakarta</h2>
                    <div className="relative w-full h-[500px]">
                      <Image 
                        src="/assets/img/bandar.jpg" 
                        alt="Bandar Djakarta"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full h-[400px]">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253818.94733328655!2d106.58163998056088!3d-6.274111139189813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1e3d05306511%3A0x820b6f7432af7bcd!2sBandar%20Djakarta!5e0!3m2!1sid!2stw!4v1672075603392!5m2!1sid!2stw" 
                        className="w-full h-full border-0" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                  
                  {/* Restaurant 3 */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">3. Sate Khas Senayan</h2>
                    <div className="relative w-full h-[500px]">
                      <Image 
                        src="/assets/img/senayan.jpg" 
                        alt="Sate Khas Senayan"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full h-[400px]">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.7740075372!2d106.74266125139047!3d-6.227535550415616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15f15800229%3A0x193158d993c78a6e!2sSate%20Khas%20Senayan!5e0!3m2!1sid!2stw!4v1672075940496!5m2!1sid!2stw" 
                        className="w-full h-full border-0" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
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

export default TraditionalFood;