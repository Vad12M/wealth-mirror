import { useEffect, useState } from "react";

export const useGetIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const detectMobile = () => setIsMobile(window.innerWidth < 768);
    detectMobile();
    window.addEventListener("resize", detectMobile);
    return () => window.removeEventListener("resize", detectMobile);
  }, []);
  return isMobile;
};
