import { useEffect, useState } from "react";

export default function useInnerWidth() {
  const isClient = typeof window === 'object';

  const [innerWidth, setInnerWidth] = useState<number>(
    isClient ? window.innerWidth : 0
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return innerWidth;
}
