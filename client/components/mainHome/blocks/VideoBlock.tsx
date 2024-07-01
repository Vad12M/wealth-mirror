import { useEffect, useRef, useState } from "react";

export default function VideoBlock() {
  const videoRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [muted, setMuted] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const blockTop = (document.getElementById('scale-block')?.offsetTop || 0) - 370;

    if (blockTop === undefined) return;

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
    <div className="flex flex-col items-center justify-center min-h-screen mt-[130px]">
      <div
        id="scale-block"
        className="transition-transform duration-200 ease-out w-1/2 h-[650px] mt-10 relative"
        style={{ transform: `scale(${scale})` }}
      >
        <button
          className="absolute right-0 bottom-[60%] m-4 bg-opacity-50 rounded-full p-1 z-50"
          onClick={() => setMuted(!muted)}
        >
          {muted ? 'Unmute' : 'Mute'}
        </button>
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          controls={false}
          loop={true}
          muted={muted}
        >
          <source src="/hero/video.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}
