import PlanBlock from "@/components/mainHome/blocks/PlanBlock";
import { FireflyLayout } from "@/components/FireflyLayout";
import PriceBlock from "@/components/mainHome/blocks/PriceBlock";

export default function Pricing() {
  return (
    <div className="md:py-[180px] py-[80px] ">
      <FireflyLayout/>
      <PriceBlock/>
      <FireflyLayout/>
      <PlanBlock/>
    </div>
  )
}
