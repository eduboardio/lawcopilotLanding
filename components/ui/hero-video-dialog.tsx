"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
  isOpen = false,
  onOpenChange,
}: HeroVideoProps) {
  const [isVideoOpenInternal, setIsVideoOpenInternal] = useState(false);
  const selectedAnimation = animationVariants[animationStyle as keyof typeof animationVariants];
  
  // Use either controlled or uncontrolled state
  const videoOpen = onOpenChange ? isOpen : isVideoOpenInternal;
  const setVideoOpen = (open: boolean) => {
    if (onOpenChange) {
      onOpenChange(open);
    } else {
      setIsVideoOpenInternal(open);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div
        className="relative cursor-pointer group"
        onClick={() => setVideoOpen(true)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          width={1920}
          height={1080}
          className="w-full transition-all duration-300 group-hover:brightness-[0.85] ease-out shadow-lg rounded-xl border border-white/10"
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 scale-100 transition-all duration-300 ease-out">
          <div className="bg-primary/20 flex items-center justify-center rounded-full backdrop-blur-md size-28 border border-white/20 shadow-lg">
            <div
              className="flex items-center justify-center bg-gradient-to-b from-primary/70 to-primary shadow-lg rounded-full size-20 transition-all ease-out duration-300 relative group-hover:scale-110 scale-100"
            >
              <Play
                className="size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-300 ease-out"
                style={{
                  filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setVideoOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video mx-4 md:mx-0"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                className="absolute -top-16 right-0 text-white text-xl bg-black/30 border border-white/20 ring-1 ring-white/10 backdrop-blur-md rounded-full p-2 hover:bg-black/50 transition-all duration-300"
                onClick={() => setVideoOpen(false)}
              >
                <XIcon className="size-5" />
              </motion.button>
              <div className="size-full border-2 border-white/20 rounded-2xl overflow-hidden isolate z-[1] relative shadow-2xl">
                <iframe
                  src={videoSrc}
                  className="size-full rounded-2xl"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}