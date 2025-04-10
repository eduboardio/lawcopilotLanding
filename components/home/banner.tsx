"use client";
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

interface BannerItemProps {
  text: string;
  ninjaStarSrc: string;
}

const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
  loading: () => <div className="w-full py-6 md:py-10 bg-foreground flex justify-center items-center">Loading...</div>
});

const BannerItem = memo(({ text, ninjaStarSrc }: BannerItemProps) => (
  <div className="flex justify-center items-center">
    <div className="flex justify-center items-center gap-2">
      <span className="font-semibold text-pink-600 text-lg">BETA</span>
      <p className="text-secondary">{text}</p>
    </div>
    <Image
      src={ninjaStarSrc}
      alt="ninja star"
      width={15}
      height={15}
      className="mx-6"
      priority={false}
    />
  </div>
));

BannerItem.displayName = 'BannerItem';

export const Banner = () => {
  const [mounted, setMounted] = useState(false);
  const bannerText = "All users subscribed to the beta will receive a free 2-month subscription!";
  const ninjaStarSrc = `/ninja-star.svg`;
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const bannerItems = [];
  for (let i = 0; i < 5; i++) {
    bannerItems.push(
      <BannerItem key={i} text={bannerText} ninjaStarSrc={ninjaStarSrc} />
    );
  }
  
  if (!mounted) {
    return (
      <div className="w-full py-6 md:py-10 bg-foreground flex justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <span className="font-semibold text-pink-600 text-lg">BETA</span>
          <p className="text-secondary">{bannerText}</p>
        </div>
      </div>
    );
  }

  return (
    <Marquee 
      className="w-full py-6 md:py-10 bg-foreground flex justify-center items-center" 
      speed={100}
      gradient={false}
      pauseOnHover={false}
    >
      {bannerItems}
      {bannerItems}
    </Marquee>
  );
};