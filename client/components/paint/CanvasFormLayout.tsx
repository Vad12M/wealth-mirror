import Typography from "@/ui/typography/Typography";
import CanvasHandlerForms from "@/components/paint/CanvasHandlerForms";

export default function CanvasFormLayout({
  type,
  position,
  onClose
}: {
  type: string;
  position: {
    x: number;
    y: number;
  };
  onClose: () => void;
}) {


  return (
    <div className="bg-[#101828] rounded-[20px] py-4 px-6">
      <Typography text={'Fill details'} className={'mb-2'} type={'subHeading4'}/>
      <div>
        Slider
      </div>
      <CanvasHandlerForms type={type} position={position} onClose={onClose}/>
    </div>
  )
}
