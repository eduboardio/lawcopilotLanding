import Image from "next/image";
import Marquee from "react-fast-marquee";

interface BannerItemProps {
  text: string;
}

const BannerItem: React.FC<BannerItemProps> = ({ text }) => (
  <div className="flex justify-center items-center gap-2">
    <span className="font-semibold text-pink-600 text-lg">BETA</span>
    <p className="text-secondary">{text}</p>
  </div>
);

export const Banner: React.FC = () => {
  const bannerText =
    "All users subscribed to the beta will receive a free 2-month subscription!";
  const ninjaStarSrc = `/ninja-star.svg`;

  return (
    <Marquee className="w-full py-6 md:py-10 bg-foreground flex justify-center items-center" speed={100}>
      {[...Array(10)].map((_, index) => (
        <div className="flex justify-center items-center" key={index}>
          <BannerItem text={bannerText} />
          <Image
            src={ninjaStarSrc}
            alt="ninja star"
            width={15}
            height={15}
            className="mx-6"
          />
        </div>
      ))}
    </Marquee>
  );
};
