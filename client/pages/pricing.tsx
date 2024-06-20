import PriceBlock from "@/components/mainHome/blocks/PriceBlock";
import SpotlightBlock from "@/components/SpotlightBlock";
import PlanBlock from "@/components/mainHome/blocks/PlanBlock";

export default function Pricing() {
  return (
    <div className="pt-[120px]">
      <PriceBlock/>
      <PlanBlock/>
      {/*<SpotlightBlock/>*/}
    </div>
  )
}
