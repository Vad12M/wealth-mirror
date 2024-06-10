import { useState } from "react";
import Typography from "@/ui/typography/Typography";
import AnimateHeight from "react-animate-height";
import CircleBottomPrimaryArrowIcon from "@/ui/icons/CircleBottomPrimaryArrowIcon";
import CircleRightArrowIcon from "@/ui/icons/CircleRightArrowIcon";

export default function BaseCollapse({
  title,
  text
}: {
  title: string;
  text: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="p-[36px] w-full rounded-[14px]"
      style={{
        background: 'rgba(255, 255, 255, 0.12)',
        border: '2px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center"
      >
        <Typography text={title} type={'sub1'} color={'text-primary'}/>
        {isOpen ? <CircleBottomPrimaryArrowIcon/> : <CircleRightArrowIcon/>}
      </button>
      <AnimateHeight height={isOpen ? 'auto' : 0}>
        <Typography
          text={text}
          type={'body'}
          color={'text-grayLight'}
          className="w-3/4 pt-8"
        />
      </AnimateHeight>
    </div>
  )
}
