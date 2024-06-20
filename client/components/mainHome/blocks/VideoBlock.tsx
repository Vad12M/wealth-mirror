import { useEffect, useState } from "react";

export default function VideoBlock() {
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
    } else {
      setScale(1);
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
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/zhPayDylYSc?si=69DV1i1QmPtUxULh"
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </div>
  )
}
