import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
      <div className="p-6">
        {/* Recent Posts Widget */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-4">News</h4>
          <ul className="space-y-3 text-lg">
            <li>
              <Link href="/news" className="text-gray-700 hover:text-blue-500 transition-colors">
                Jakarta New Transportation
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-gray-700 hover:text-blue-500 transition-colors">
                Gelora Bungkarno Renovation
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-gray-700 hover:text-blue-500 transition-colors">
                Formula-E is Successful
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-gray-700 hover:text-blue-500 transition-colors">
                The biggest Music Fair
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-gray-700 hover:text-blue-500 transition-colors">
                Covid 19 Precaution
              </Link>
            </li>
          </ul>
        </div>

        {/* Sidebar Image */}
        <div className="mt-6">
          <Image
            src="/assets/img/side.png"
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