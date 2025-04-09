"use client";
import { useEffect, useState } from "react";

export function SmoothScroll() {
  // Add isMounted state to ensure component only runs on client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true
    setIsMounted(true);

    // Only add event listener if component is mounted on client
    if (isMounted) {
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();

          const targetId = target.getAttribute('href')?.substring(1);
          const targetElement = document.getElementById(targetId || '');

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });

            history.pushState(null, '', `#${targetId}`);
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);

      return () => {
        document.removeEventListener('click', handleAnchorClick);
      };
    }
  }, [isMounted]); // Add isMounted to dependency array

  // Return null during server-side rendering
  if (!isMounted) return null;

  // Return null for client-side too as this component doesn't render anything
  return null;
}