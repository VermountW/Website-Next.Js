import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface HeroProps {
  title: string;
  backgroundImage: string | StaticImageData;
}

const Hero = ({ title, backgroundImage }: HeroProps) => {
  return (
    <div className="bg-white">
      <div className="relative h-[60vh]">
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <p className="text-6xl font-bold tracking-wider">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 