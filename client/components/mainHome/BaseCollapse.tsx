import { useState, useRef, useEffect } from "react";
import Typography from "@/ui/typography/Typography";
import CircleBottomPrimaryArrowIcon from "@/ui/icons/CircleBottomPrimaryArrowIcon";
import CircleRightArrowIcon from "@/ui/icons/CircleRightArrowIcon";
import styles from './baseCollapse.module.scss';

export default function BaseCollapse({
  title,
  text
}: {
  title: string;
  text: string;
}) {
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
      className="p-[36px] w-full rounded-[14px]"
      style={{
        background: 'rgba(255, 255, 255, 0.12)',
        border: '2px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <button
        onClick={handleToggle}
        className="w-full flex justify-between items-center"
      >
        <Typography text={title} type={'sub1'} color={'text-primary'} />
        {isOpen ? <CircleBottomPrimaryArrowIcon /> : <CircleRightArrowIcon />}
      </button>
      <div
        ref={contentRef}
        className={`${styles.collapsibleContent} ${isAnimating ? styles.opening : ''} ${!isOpen && !isAnimating ? styles.closing : ''}`}
      >
        <Typography
          text={text}
          type={'body'}
          color={'text-grayLight'}
          className="w-[88%] pt-8"
        />
      </div>
    </div>
  );
}
