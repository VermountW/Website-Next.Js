import Link from 'next/link';
import Image from 'next/image';

interface NewsItemProps {
  title: string;
  href: string;
}

const NewsItem = ({ title, href }: NewsItemProps) => (
  <li>
    <Link 
      href={href} 
      className="inline-block text-gray-700 hover:text-[#5a91c7] transition duration-200 hover:translate-x-2"
    >
      {title}
    </Link>
  </li>
);

const newsItems = [
  { title: 'Jakarta New Transportation', href: '/news' },
  { title: 'Gelora Bungkarno Renovation', href: '/news' },
  { title: 'Formula-E is Successful', href: '/news' },
  { title: 'The biggest Music Fair', href: '/news' },
  { title: 'Covid 19 Precaution', href: '/news' }
];

const Sidebar = () => {
  return (
    <div className="p-6">
      {/* Recent Posts Widget */}
      <div className="mb-8">
        <h4 className="text-3xl font-bold text-gray-800 mb-4">News</h4>
        <ul className="space-y-3 text-lg">
          {newsItems.map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
        </ul>
      </div>

      {/* Sidebar Image */}
      <div className="mt-6">
        <Image
          src="/img/side.png"
          alt="Sidebar Image"
          width={300}
          height={200}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Sidebar;