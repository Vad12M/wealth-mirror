import { useState, useRef, useEffect } from "react";
import Typography from "@/ui/typography/Typography";
import CircleBottomPrimaryArrowIcon from "@/ui/icons/CircleBottomPrimaryArrowIcon";
import CircleRightArrowIcon from "@/ui/icons/CircleRightArrowIcon";
import styles from './baseCollapse.module.scss';
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function BaseCollapse({
  title,
  text
}: {
  title: string;
  text: string;
}) {
  const isMobile = useGetIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  return (
    <div
      className="p-3 md:p-[36px] w-full md:rounded-[14px] rounded-[18px]"
      style={{
        background: 'rgba(255, 255, 255, 0.12)',
        border: '2px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <button onClick={handleToggle} className="w-full flex justify-between items-center space-x-2">
        <Typography text={title} type={isMobile ? 'heading6SM' : 'heading4'} color={'text-primary'}  className="text-start"/>
        <div>
          {isOpen ? <CircleBottomPrimaryArrowIcon /> : <CircleRightArrowIcon />}
        </div>
      </button>
      <div
        ref={contentRef}
        className={`${styles.collapsibleContent} ${isAnimating ? styles.opening : ''} ${!isOpen && !isAnimating ? styles.closing : ''}`}
      >
        <Typography
          text={text}
          type={'heading6'}
          color={'text-grayBody'}
          className="w-[88%] pt-8"
        />
      </div>
    </div>
  );
}
