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
            // Calculate the navbar height dynamically
            const navbar = document.querySelector('header');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            
            // Add additional offset to ensure content is clearly visible below navbar
            const additionalOffset = 20; 
            
            window.scrollTo({
              top: targetElement.offsetTop - navbarHeight - additionalOffset,
              behavior: 'smooth'
            });
            
            // Update URL hash without causing another scroll
            history.pushState(null, '', `#${targetId}`);
          }
        }
      };
      
      document.addEventListener('click', handleAnchorClick);
      
      // Handle initial page load with hash in URL
      setTimeout(() => {
        if (window.location.hash) {
          const targetId = window.location.hash.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const navbar = document.querySelector('header');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const additionalOffset = 20;
            
            window.scrollTo({
              top: targetElement.offsetTop - navbarHeight - additionalOffset,
              behavior: 'smooth'
            });
          }
        }
      }, 500);
      
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