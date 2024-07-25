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
      <Button typeButton="none" onClick={exportClick}>
        <Export/>
      </Button>
    </div>
  )
}
