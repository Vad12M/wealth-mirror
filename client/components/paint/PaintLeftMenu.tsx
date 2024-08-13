import Home from "@/ui/icons/canvas/leftMenu/Home";
import Reccomendations from "@/ui/icons/canvas/leftMenu/Reccomendations";
import Export from "@/ui/icons/canvas/leftMenu/Export";
import Plus from "@/ui/icons/canvas/leftMenu/Plus";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import { Button } from "@/ui/button/Button";

export default function PaintLeftMenu({
  addClick,
  exportClick,
}: {
  exportClick: () => void
  addClick: () => void
}) {
  return (
    <div className="flex flex-col items-center space-y-4 pt-2 px-2 pb-4 rounded-[50px] w-full bg-white">
      <Button className="border rounded-full border-[#D0D5DD] p-2" typeButton="none" onClick={addClick}>
        <Plus/>
      </Button>
      <Anchor href={'/'}>
        <Home/>
      </Anchor>
      <Reccomendations/>
      <Button typeButton="none" onClick={exportClick} className="relative">
        <Export/>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none" className="absolute -right-[6px] -bottom-[4.5px]">
          <path
            d="M3.26653 10.4002H13.4002C13.8605 10.4002 14.2569 10.0753 14.3472 9.62389L15.8132 2.29369C15.9887 1.41624 14.9797 0.792639 14.2733 1.34199L12.2558 2.91119C11.8489 3.22769 11.2651 3.16879 10.9296 2.77739L9.06658 0.603839C8.68118 0.154189 7.98553 0.154189 7.60008 0.603839L5.73703 2.77739C5.40153 3.16879 4.81778 3.22769 4.41088 2.91119L2.39343 1.34199C1.68708 0.792589 0.678026 1.41624 0.853526 2.29369L2.31958 9.62389C2.40988 10.0753 2.80623 10.4002 3.26653 10.4002Z"
            fill="#F5C314"/>
        </svg>
      </Button>
    </div>
  )
}
