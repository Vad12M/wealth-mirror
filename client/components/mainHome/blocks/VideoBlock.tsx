import { useEffect, useRef, useState } from "react";

export default function VideoBlock() {
  const videoRef = useRef(null);
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const blockTop = (document.getElementById('scale-block')?.offsetTop || 0) - 300;

    if (!blockTop) return;

    if (scrollY >= blockTop - windowHeight && scrollY <= blockTop) {
      const progress = (scrollY - (blockTop - windowHeight)) / windowHeight;
      setScale(1 + progress);
    } else if (scrollY > blockTop) {
      setScale(2);
      if (videoRef.current) {
        (videoRef.current as any).play();
      }
    } else {
      setScale(1);
      if (videoRef.current) {
        (videoRef.current as any).pause();
      }
    }

    if (scrollY > blockTop + windowHeight) {
      if (videoRef.current) {
        (videoRef.current as any).pause();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        id="scale-block"
        className="transition-transform duration-200 ease-out w-1/2 h-[520px] mt-10"
        style={{ transform: `scale(${scale})` }}
      >
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          muted
          controls={false}
        >
          <source src="/hero/video.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}
