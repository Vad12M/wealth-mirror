import { Inter } from "next/font/google";
import VideoBlock from "@/components/home/blocks/VideoBlock";
import ServicesBlock from "@/components/home/blocks/ServicesBlock";
import PriceBlock from "@/components/home/blocks/PriceBlock";
import HeroBlock from "@/components/home/blocks/HeroBlock";
import FAQBlock from "@/components/home/blocks/FAQBlock";
import PlatformToAnalyzeBlock from "@/components/home/blocks/PlatformToAnalyzeBlock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroBlock/>
      <VideoBlock/>
      <PlatformToAnalyzeBlock/>
      <ServicesBlock/>
      <PriceBlock/>
      <FAQBlock/>
    </main>
  );
}
