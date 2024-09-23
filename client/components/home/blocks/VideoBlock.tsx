import { useEffect, useRef, useState } from "react";
import MuteIcon from "@/ui/icons/MuteIcon";
import UnmuteIcon from "@/ui/icons/UnmuteIcon";
import styles from "./videoBlock.module.scss";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";
import Typography from "@/ui/typography/Typography";

export default function VideoBlock() {
  const isMobile = useGetIsMobile();
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
    <div className="flex items-center justify-center">
      <div
        className={`flex flex-col items-center justify-center md:h-[1000px] h-[350px] w-full md:max-w-[2100px] ${styles.blurBorder}`}>
        <div
          id="scale-block"
          className="transition-transform duration-200 ease-out w-1/2 mt-10 relative"
          style={{ transform: `scale(${scale})` }}
        >
          {!isMobile ? <button
              className="absolute right-0 bottom-[40%] m-4 bg-opacity-50 rounded-full p-1 z-50 flex flex-col items-center space-y-3"
              onClick={() => setMuted(!muted)}
            >
              {!muted
                ? <MuteIcon size={50}/>
                : <UnmuteIcon size={50}/>}
              <Typography text={muted ? 'Tap to unmute' : 'Tap to mute'} type={'link2'} color={'text-primaryLight2'}/>
            </button>

            : <button
              className="absolute bottom-0 left-[37%] bg-opacity-50 rounded-full p-1 z-50 flex flex-col items-center"
              onClick={() => setMuted(!muted)}
            >
              {!muted
                ? <MuteIcon size={25}/>
                : <UnmuteIcon size={25}/>}
              <Typography text={muted ? 'Tap to unmute' : 'Tap to mute'} type={'link2'} color={'text-primaryLight2'}/>
            </button>}
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
    </div>
  );
}
