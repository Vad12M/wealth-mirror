import PlanBlock from "@/components/home/blocks/PlanBlock";
import { FireflyLayout } from "@/components/FireflyLayout";
import PriceBlock from "@/components/home/blocks/PriceBlock";

export default function Pricing() {
  return (
    <div className="md:py-[180px] py-[80px]">
      <FireflyLayout/>
      <PriceBlock/>
      <FireflyLayout/>
      <PlanBlock/>
    </div>
  )
}
