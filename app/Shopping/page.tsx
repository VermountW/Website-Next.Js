import Image from 'next/image';
import Sidebar from '../../components/sidebar';
import shoppingimage from '../../public/assets/img/shopping2.jpg';

const ShoppingPage = () => {
  return (
    <div className="bg-white">
      {/* Main Content and Sidebar Layout */}
      <div className="relative h-[60vh]">
        <Image
          src={shoppingimage}
          alt="Jakarta Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <p className="text-6xl font-bold tracking-wider">Where to Shop ?</p>
          </div>
        </div>
      </div>
      {/* Main Content and Sidebar Layout */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="md:col-span-3 space-y-16">
              <article className="space-y-16">
                <div className="text-black text-xl text-justify leading-relaxed">
                  <p>
                    Shopping centers are spread all over Jakarta. You could find and buy anything in Jakarta, from the cheapest to the most expensive. Here are some recommended shopping centers you could visit :
                  </p>
                </div>

                {/* Shopping Mall 1 */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Grand Indonesia</h2>
                  <div className="relative w-full h-[500px] mb-6">
                    <Image 
                      src="/assets/img/grand.jpg" 
                      alt="Grand Indonesia"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                    Grand Indonesia is the largest and most prestigious shopping mall in Jakarta, offering a luxurious retail and lifestyle experience. Located in the heart of the city, it features high-end international brands, premium local boutiques, and a modern design. The mall is divided into East and West sections, connected by the Skybridge, making it easy to explore its diverse shopping options.
                    </p>
                    <p>
                    Beyond shopping, Grand Indonesia offers world-class dining and entertainment. Visitors can enjoy fine dining, trendy cafés, a state-of-the-art cinema, and a mesmerizing musical fountain show. Whether for luxury shopping or leisure, it is a top destination for both locals and tourists in Jakarta.
                    </p>
                  </div>
                  <div className="w-[600px] h-[400px] mt-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.517963712404!2d106.81825251468562!3d-6.195180095515055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f421c2ebd463%3A0xccfcc89b95aaf1ae!2sGrand%20Indonesia!5e0!3m2!1sid!2stw!4v1672065621566!5m2!1sid!2stw" 
                      className="w-full h-full border-0 rounded-lg" 
                      allowFullScreen 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                {/* Shopping Mall 2 */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800">2. Mangga Dua</h2>
                  <div className="relative w-full h-[500px] mb-6">
                    <Image 
                      src="/assets/img/mangga2.jpg" 
                      alt="Mangga Dua"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                      Mangga Dua is a well-known shopping center in Jakarta, offering a wide range of products at affordable prices. It is a popular destination for those looking for textiles, souvenirs, and accessories, as well as clothing for men, women, and children. With its diverse selection of items, the shopping center attracts both local and international visitors searching for great deals.
                    </p>
                    <p>
                      In addition to local goods, Mangga Dua also features international products from China, Korea, Hong Kong, and Thailand. Shoppers can find everything from fashion and electronics to household items, making it a one-stop destination for bargain hunters. Its competitive prices and vast selection make it a favorite shopping hub in Jakarta.
                    </p>
                  </div>
                  <div className="w-[600px] h-[400px] mt-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.952911642041!2d106.82213601468527!3d-6.1370290955565165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f8cafe5231%3A0x9c53d9645074bdfe!2sMangga%20Dua%20Mall!5e0!3m2!1sid!2stw!4v1672065738557!5m2!1sid!2stw" 
                      className="w-full h-full border-0 rounded-lg" 
                      allowFullScreen 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                {/* Shopping Mall 3 */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800">3. Pasar Baru</h2>
                  <div className="relative w-full h-[500px] mb-6">
                    <Image 
                      src="/assets/img/pasarbaru.jpg" 
                      alt="Pasar Baru"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4 text-black text-xl text-justify leading-relaxed">
                    <p>
                      Pasar Baru is the oldest shopping center in Jakarta, located on Jalan Pasar Baru, Central Jakarta. It features clothing stores, tailor shops, shoe stores, eyewear shops, and gold jewelry shops. It's a popular thrifting destination for millennials.
                    </p>
                    <p>
                    In recent years, Pasar Baru has become a popular thrifting spot for millennials looking for stylish and affordable fashion. Many vintage and second-hand clothing stores offer unique finds at budget-friendly prices. Its nostalgic atmosphere, diverse selection, and bargain-friendly deals make it a must-visit shopping hub in Jakarta.
                    </p>
                  <div/>
                  <div className="w-[600px] h-[400px] mt-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.936752778181!2d106.82515082561707!3d-6.166339928569542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5cf671b73c7%3A0x7c42154ce46ec4ef!2sPs.%20Baru%2C%20Kecamatan%20Sawah%20Besar%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2C%20Indonesia!5e0!3m2!1sid!2stw!4v1672065667879!5m2!1sid!2stw" 
                      className="w-full h-full border-0 rounded-lg" 
                      allowFullScreen 
                      loading="lazy"
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

export default ShoppingPage;
